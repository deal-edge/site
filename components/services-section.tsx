import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      title: "Architecture",
      description:
        "Notre agence vous accompagne dans la réalisation de vos projets immobiliers, de la conception à la réalisation. Nous vous proposons un service complet de maîtrise d'œuvre mission complète. Ou bien Vous souhaitez faire construire ou rénover votre maison ? Nous vous accompagnons dans votre projet en respectant vos besoins et votre budget.",
      image: "/architectural-blueprints-and-plans.jpg",
    },
    {
      title: "Expertise En Bâtiment",
      description:
        "Notre expertise en bâtiment vous garantit une analyse complète et fiable de votre bien immobilier. Que ce soit pour un achat, une vente ou une expertise suite à un sinistre ou avant l'achat, une expertise suite à un sinistre ou avant l'achat d'une maison, nous vous proposons des expertises techniques et réglementaires pour vous aider à prendre les bonnes décisions et sécuriser vos investissements.",
      image: "/construction-workers-inspecting-building.jpg",
    },
    {
      title: "Audit Energétique",
      description:
        "L'audit énergétique est un outil essentiel pour optimiser la performance énergétique de votre bâtiment. Notre équipe d'experts vous accompagne dans l'amélioration des consommations, identifions les points faibles et vous proposons des solutions innovantes.",
      image: "/energy-efficiency-house-diagram.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nos Services</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Demandez Votre Rendez-Vous Gratuit
          </Button>
        </div>
      </div>
    </section>
  )
}
