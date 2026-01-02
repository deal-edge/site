
import fs from 'fs';
import path from 'path';
import http from 'http';

const HTML_PATH = 'raw.html';
const CSS_PATH = 'styles.css';
const OUTPUT_PATH = 'static/index.html';
const BASE_URL = 'http://localhost:3000';

async function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            const data = [];
            res.on('data', chunk => data.push(chunk));
            res.on('end', () => resolve(Buffer.concat(data)));
            res.on('error', reject);
        });
    });
}

async function main() {
    console.log('Reading files...');
    let html = fs.readFileSync(HTML_PATH, 'utf8');
    const css = fs.readFileSync(CSS_PATH, 'utf8');

    // 1. Inline CSS
    console.log('Inlining CSS...');
    // Remove existing link rel=stylesheet (simple regex)
    html = html.replace(/<link[^>]+rel="stylesheet"[^>]*>/g, '');
    html = html.replace(/<link[^>]+rel="preload"[^>]+as="style"[^>]*>/g, '');

    // Inject style at the end of head
    const styleTag = `<style>\n${css}\n</style>`;
    html = html.replace('</head>', `${styleTag}\n</head>`);

    // 1.5. Clean Next.js scripts (MOVED UP)
    console.log('Cleaning Next.js scripts...');
    // Remove script tags with src containing /_next/
    html = html.replace(/<script[^>]+src="\/_next\/[^"]+"[^>]*><\/script>/g, '');
    // Remove inline scripts that might be hydration (often contain self.__next_f)
    html = html.replace(/<script>[^<]*self\.__next_f[^<]*<\/script>/g, '');

    // 2. Inline Images
    console.log('Inlining Images...');
    // Regex to find img tags and their srcs
    // We want to handle src="..." and srcset="..."
    // Simple approach: find src="...", fetch valid URL, replace with base64.
    // Also remove srcset to force using the src.

    const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
    let match;
    const replacements = [];

    // We can't replace while iterating with regex easily, so we collect replacements
    // Actually, let's use a replacer function with String.replace which supports async if we promisify properly, 
    // but String.replace doesn't support async replacer.
    // So we'll find all matches, fetch data, then replace.

    let imgMatches = [];
    while ((match = imgRegex.exec(html)) !== null) {
        imgMatches.push({
            fullTag: match[0],
            src: match[1],
            index: match.index
        });
    }

    for (const item of imgMatches) {
        let src = item.src;
        // Fix relative URLs (Next.js images often start with /_next or /)
        if (src.startsWith('/')) {
            src = BASE_URL + src;
        } else if (!src.startsWith('http')) {
            continue; // Skip data uris or weird things
        }

        console.log(`Fetching image: ${src}`);
        try {
            const buffer = await fetchUrl(src);
            const base64 = buffer.toString('base64');
            // Guess mime type roughly
            let mime = 'image/jpeg';
            if (src.endsWith('.png')) mime = 'image/png';
            if (src.endsWith('.svg')) mime = 'image/svg+xml';
            if (src.endsWith('.webp')) mime = 'image/webp';

            const dataUri = `data:${mime};base64,${base64}`;

            // Create loop to replace this specific instance. 
            // Note: global replace might replace identical multiple images, which is fine.
            // But to be safe and remove srcset, we can rebuild the tag?
            // Next.js tags are complex strings. 
            // Let's just replace the src value and remove srcset attribute from the WHOLE html string globally for this URL?
            // No, safer to replace the exact substring if we can. 

            // Simplest robust strategy without DOM parser:
            // 1. Remove all `srcset="..."` attributes globally to simplify.
            // 2. Replace `src="/path/to/img"` with `src="data:..."`

        } catch (e) {
            console.error(`Failed to fetch ${src}:`, e.message);
        }
    }

    // Reworking image replacement strategy:
    // 1. Remove all `srcset` attributes first.
    html = html.replace(/\s+srcset="[^"]*"/g, '');
    html = html.replace(/\s+srcset='[^']*'/g, '');

    // 2. Find all src URLs again (cleaner list)
    const uniqueSrcs = new Set();
    let m;
    const srcRegex = /src="([^"]+)"/g;
    while ((m = srcRegex.exec(html)) !== null) {
        if (m[1].startsWith('/') || m[1].startsWith('http')) {
            uniqueSrcs.add(m[1]);
        }
    }

    for (const src of uniqueSrcs) {
        let fetchSrc = src;
        if (src.startsWith('/')) {
            fetchSrc = BASE_URL + src;
        }

        // Decode HTML entities in URL if any (Next.js might put &amp;)
        fetchSrc = fetchSrc.replace(/&amp;/g, '&');

        console.log(`Processing ${src} -> ${fetchSrc}`);
        try {
            const buffer = await fetchUrl(fetchSrc);
            const base64 = buffer.toString('base64');
            let mime = 'image/jpeg';
            if (fetchSrc.includes('.png')) mime = 'image/png';
            if (fetchSrc.includes('.svg')) mime = 'image/svg+xml';
            if (fetchSrc.includes('.webp')) mime = 'image/webp';

            const dataUri = `data:${mime};base64,${base64}`;

            // Replace globally: src="original" -> src="dataUri"
            // We escape the src for regex
            const escapedSrc = src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // Be careful with quotes. The regex assumed double quotes.
            const replaceRegex = new RegExp(`src="${escapedSrc}"`, 'g');
            html = html.replace(replaceRegex, `src="${dataUri}"`);

        } catch (e) {
            console.error(`Error processing ${src}: ${e.message}`);
        }
    }

    // 4. Save
    fs.writeFileSync(OUTPUT_PATH, html);
    console.log(`Done! Saved to ${OUTPUT_PATH}`);
}

main();
