import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Votre architecte à Nantes pour des projets durables et innovants
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-500">EXPERTISE À VOTRE SERVICE</h3>
                <p className="text-gray-600">
                  Bénéficiez de l&apos;expérience et des compétences d&apos;un professionnel reconnu dans le domaine de
                  l&apos;architecture et de l&apos;expertise, parfaitement adapté à vos besoins et à votre budget.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-500">GAIN DE TEMPS ET D&apos;ARGENT</h3>
                <p className="text-gray-600">
                  L&apos;architecte vous décharge des démarches administratives et techniques. Il coordonne tous les artisans
                  et supervise votre budget pour un résultat optimal.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-500">ACCOMPAGNEMENT PERSONNALISÉ</h3>
                <p className="text-gray-600">
                  De la définition du projet à la réalisation des travaux, nous vous conseillons sur un expert qui vous
                  accompagne à votre écoute et vous propose des solutions innovantes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-500">QUALITÉ ET TRANQUILLITÉ GARANTIES</h3>
                <p className="text-gray-600">
                  Profitez d&apos;un travail réalisé dans les règles de l&apos;art et conforme aux normes en vigueur. Notre
                  service d&apos;un expert pour un suivi d&apos;œuvre et une garantie décennale.
                </p>
              </div>
            </div>

            <Button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white">Votre Devis Gratuit</Button>
          </div>

          <div className="relative">
            <img src="/modern-sustainable-house-architecture.jpg" alt="Architecture moderne" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
