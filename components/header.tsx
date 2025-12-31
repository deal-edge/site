import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-500 rounded"></div>
        <span className="font-bold text-gray-800">A EXPERTISES & ARCHITECTURES</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <Phone className="w-4 h-4" />
        <span>06 62 50 57 05</span>
      </div>
    </header>
  )
}
