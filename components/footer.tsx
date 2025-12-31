export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <span className="font-bold">A EXPERTISES & ARCHITECTURES</span>
            </div>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour tous vos projets d&apos;architecture et d&apos;expertise en bâtiment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Architecture</li>
              <li>Expertise en bâtiment</li>
              <li>Audit énergétique</li>
              <li>Maîtrise d&apos;œuvre</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>06 62 50 57 05</li>
              <li>contact@aexpertisesarchitectures.fr</li>
              <li>Nantes, France</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Certifications</h3>
            <div className="flex gap-4">
              <img src="/architecture-certification-logo.jpg" alt="Certification" className="h-10" />
              <img src="/building-expertise-certification.jpg" alt="Certification" className="h-10" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 A Expertises & Architectures. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
