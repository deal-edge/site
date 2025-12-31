import { Check } from "lucide-react"

export function WhyChooseSection() {
  const reasons = [
    "Une expérience de plus de 20 ans",
    "Une équipe d'architectes locaux et à l'écoute",
    "Un engagement pour la qualité et le respect des délais",
    "Des tarifs transparents et compétitifs",
  ]

  const teamMembers = [
    {
      image: "/professional-architect-man-working.jpg",
      title: "Un architecte de proximité",
    },
    {
      image: "/house-construction-site-inspection.jpg",
      title: "Expertise et suivi des travaux",
    },
    {
      image: "/architect-woman-reviewing-plans.jpg",
      title: "Une garantie décennale",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Pourquoi choisir A EXPERTISES & ARCHITECTURES ?
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-3">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
