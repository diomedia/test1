"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Merci de nous avoir contactés ! Nous vous répondrons bientôt.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">Nous Contacter</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Avez-vous une question sur nos produits ? Nous aimerions entendre parler de vous.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Contact Info Cards */}
            <div
              style={{ backgroundColor: "#eff0f1" }}
              className="border-l-4 border-r-4 border-[#90856f] p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#90856f] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-700">hello@volafurniture.com</p>
              <p className="text-gray-700">support@volafurniture.com</p>
            </div>

            <div
              style={{ backgroundColor: "#eff0f1" }}
              className="border-l-4 border-r-4 border-[#90856f] p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#90856f] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Téléphone</h3>
              </div>
              <p className="text-gray-700">+1 (555) 123-4567</p>
              <p className="text-gray-700">Lun-Ven: 9h - 18h EST</p>
            </div>

            <div
              style={{ backgroundColor: "#eff0f1" }}
              className="border-l-4 border-r-4 border-[#90856f] p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#90856f] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Adresse</h3>
              </div>
              <p className="text-gray-700">123 Rue du Design</p>
              <p className="text-gray-700">New York, NY 10001</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div style={{ backgroundColor: "#eff0f1" }} className="p-12">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">Envoyez-nous</h2>
              <h3 className="text-4xl font-serif font-bold text-[#90856f] mb-10">un message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Nom Complet</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre Nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#90856f] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#90856f] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#90856f] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Sujet</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#90856f] focus:outline-none text-gray-900 transition-colors bg-white"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="product-inquiry">Demande de Produit</option>
                    <option value="bulk-order">Commande Importante</option>
                    <option value="custom-design">Design Personnalisé</option>
                    <option value="general">Question Générale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Votre message ici..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#90856f] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors bg-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#90856f] hover:bg-[#7a6f5f] text-white py-3 text-lg font-semibold transition-colors"
                >
                  Envoyer le Message
                </Button>
              </form>
            </div>

            <div style={{ backgroundColor: "#eff0f1" }} className="p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">Pourquoi</h2>
              <h3 className="text-4xl font-serif font-bold text-[#90856f] mb-10">nous choisir</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#90856f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-800 text-base leading-relaxed">
                      Meubles de qualité premium fabriqués à la main avec attention aux détails
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#90856f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-800 text-base leading-relaxed">
                      Matériaux durables et production respectueuse de l'environnement
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#90856f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-800 text-base leading-relaxed">
                      Options de design personnalisé pour correspondre à votre style unique
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#90856f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-800 text-base leading-relaxed">Support client expert et livraison rapide</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#90856f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-800 text-base leading-relaxed">Garantie à vie sur tous nos meubles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">Notre Localisation</h2>
          <div className="border-l-4 border-r-4 border-[#90856f] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.0!2d3.0859464!3d36.71220990052291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMzYuNzEyMjA5OSwgMy4wODU5NDY0!5e0!3m2!1sfr!2sdz!4v1700000000000"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="h-24 md:h-32 bg-white"></section>

      <Footer />
    </main>
  )
}
