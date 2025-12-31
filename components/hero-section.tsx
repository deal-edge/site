import { ContactForm } from "@/components/contact-form"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/modern-glass-building.png')`,
      }}
    >
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <div className="text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            BESOIN D&apos;UN ARCHITECTE OU D&apos;UNE EXPERTISE EN BÂTIMENT ?
          </h1>
          <p className="text-lg mb-4 text-gray-200">
            Profitez des compétences de nos experts et d&apos;un architecte professionnel.
          </p>
          <p className="text-gray-200">Réponse rapide et devis gratuit.</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
