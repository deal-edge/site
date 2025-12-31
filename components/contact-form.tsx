"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    project: "",
    consent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-orange-500 mb-2">OBTENEZ VOTRE DEVIS GRATUIT*</h2>
        <p className="text-sm text-gray-600">Décrivez votre projet, on vous rappelle dans les 24h. Première !</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-600">Je souhaite une estimation pour *</label>
          <div className="mt-2 space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="construction" className="rounded" />
              <label htmlFor="construction">Un projet d&apos;architecture (construction, rénovation, extension...)</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="expertise" className="rounded" />
              <label htmlFor="expertise">Une expertise en bâtiment (fissures, humidité, pathologies...)</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="diagnostic" className="rounded" />
              <label htmlFor="diagnostic">Un diagnostic énergétique (audit ou dpe des travaux)</label>
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600">Votre prénom *</label>
          <Input
            placeholder="Votre prénom"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Votre nom *</label>
          <Input
            placeholder="Votre nom"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Votre téléphone *</label>
          <Input
            placeholder="Votre téléphone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email *</label>
          <Input
            type="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Votre projet *</label>
          <Textarea
            placeholder="Décrivez votre projet"
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
            required
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
          />
          <label htmlFor="consent" className="text-xs text-gray-600">
            Je souhaite transmettre mes informations pour pouvoir être recontacté par un expert conformément à la loi
            base de confidentialité des données et à l&apos;Expertise & Architectures.
          </label>
        </div>

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          Valider
        </Button>

        <p className="text-xs text-gray-500 text-center">
          *Obligatoire pour être personnellement gratuitement ! Les frais de déplacement, si nécessaires, vous seront
          indiqués.
        </p>
      </div>
    </form>
  )
}
