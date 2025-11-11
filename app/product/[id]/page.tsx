"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Product {
  id: number
  name: string
  price: string
  image: string
  description: string
  details: string
  materials: string
  dimensions: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Sofa",
    price: "$1,299",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Sleek and sophisticated sofa perfect for contemporary living spaces",
    details: "Premium construction with premium upholstery and solid wood frame",
    materials: "Fabric upholstery, solid oak wood frame",
    dimensions: 'W: 85" x D: 38" x H: 32"',
  },
  {
    id: 2,
    name: "Executive Chair",
    price: "$799",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Premium ergonomic chair designed for comfort and style",
    details: "Adjustable height and recline with premium leather finish",
    materials: "Genuine leather, aluminum base",
    dimensions: 'W: 27" x D: 28" x H: 40-44"',
  },
  {
    id: 3,
    name: "Coffee Table",
    price: "$499",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Elegant wooden coffee table with minimalist design",
    details: "Handcrafted from premium solid wood with natural finish",
    materials: "Solid walnut wood with protective coating",
    dimensions: 'W: 48" x D: 24" x H: 18"',
  },
  {
    id: 4,
    name: "Platform Bed",
    price: "$1,599",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Contemporary platform bed with clean lines and durability",
    details: "Low-profile design with built-in storage and premium construction",
    materials: "Solid wood frame with quality slats",
    dimensions: 'W: 86" x D: 84" x H: 12" (Queen)',
  },
  {
    id: 5,
    name: "Wall Shelving",
    price: "$349",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Floating shelves to maximize space and style",
    details: "Easy installation with hidden brackets and weight capacity",
    materials: "Solid wood with matte black metal brackets",
    dimensions: 'W: 36" x D: 10" x H: 1"',
  },
  {
    id: 6,
    name: "Pendant Lights",
    price: "$249",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Ambient lighting solution for any modern interior",
    details: "Dimmable LED technology with adjustable height",
    materials: "Metal frame with frosted glass diffuser",
    dimensions: 'Diameter: 10" x Adjustable height up to 48"',
  },
  {
    id: 7,
    name: "Lounge Chair",
    price: "$899",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Comfortable and stylish accent chair for any room",
    details: "Premium fabric with comfortable cushioning and sturdy frame",
    materials: "Luxury fabric upholstery, solid wood frame",
    dimensions: 'W: 32" x D: 34" x H: 30"',
  },
  {
    id: 8,
    name: "Sideboard",
    price: "$1,199",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Storage solution with contemporary aesthetic appeal",
    details: "Multiple compartments with premium hinges and soft-close drawers",
    materials: "Solid wood with matte finish and metal accents",
    dimensions: 'W: 60" x D: 18" x H: 36"',
  },
  {
    id: 9,
    name: "Canapé Sectionnelle",
    price: "$1,899",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Spacious sectional sofa perfect for modern living spaces",
    details: "Premium construction with modular design for flexible configuration",
    materials: "Premium fabric upholstery, solid hardwood frame",
    dimensions: 'W: 120" x D: 90" x H: 34"',
  },
  {
    id: 10,
    name: "Table de Salle à Manger",
    price: "$1,399",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Elegant dining table for family gatherings and entertaining",
    details: "Handcrafted with premium wood and refined finishing touches",
    materials: "Solid oak wood with polyurethane coating",
    dimensions: 'W: 96" x D: 48" x H: 30"',
  },
  {
    id: 11,
    name: "Bureau Contemporain",
    price: "$649",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Functional workspace with minimalist contemporary design",
    details: "Clean lines with ample workspace and integrated storage",
    materials: "Solid pine wood with matte finish, metal accents",
    dimensions: 'W: 54" x D: 24" x H: 30"',
  },
  {
    id: 12,
    name: "Armoire Moderne",
    price: "$1,299",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Modern wardrobe storage for bedroom or living room",
    details: "Spacious interior with adjustable shelves and hanging rails",
    materials: "Solid wood frame with soft-close doors",
    dimensions: 'W: 48" x D: 22" x H: 84"',
  },
  {
    id: 13,
    name: "Oak Floating Shelf",
    price: "$599",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Solid oak floating shelf for elegant display",
    details: "Wall-mounted solid oak construction with hidden brackets",
    materials: "Solid oak wood with protective matte varnish",
    dimensions: 'W: 48" x D: 12" x H: 1"',
  },
  {
    id: 14,
    name: "Luxury Bar Stool",
    price: "$449",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Premium leather bar stool with chrome base",
    details: "Adjustable height with premium leather upholstery",
    materials: "Genuine leather, polished chrome base",
    dimensions: 'W: 18" x D: 18" x H: 24-32"',
  },
  {
    id: 15,
    name: "Console Table",
    price: "$789",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Contemporary console table for elegant entryways",
    details: "Sleek minimalist design with sturdy frame construction",
    materials: "Solid wood with glass top, metal legs",
    dimensions: 'W: 54" x D: 14" x H: 32"',
  },
  {
    id: 16,
    name: "Wall Mounted TV Unit",
    price: "$1,099",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Modern wall-mounted TV unit with integrated storage",
    details: "Floating design with built-in shelving and cable management",
    materials: "Solid wood frame with metal accents",
    dimensions: 'W: 72" x D: 16" x H: 48"',
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.id])

  const product = products.find((p) => p.id === Number.parseInt(params.id))
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#eff0f1" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Product not found</h1>
          <Link href="/">
            <Button className="bg-[#90856f] hover:bg-[#7a6f5f]">Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Inquiry submitted:", { product: product.name, ...formData })
    alert("Thank you for your inquiry! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="relative">
      <Header />

      <main className="min-h-screen pt-20" style={{ backgroundColor: "#eff0f1" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/" className="flex items-center gap-2 text-[#90856f] hover:text-[#7a6f5f] mb-8 font-semibold">
            <ArrowLeft className="w-5 h-5" />
            Retour à la page d'accueil
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center justify-center">
              <div className="w-full max-h-[600px] flex items-center justify-center bg-white overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div>
              {/* Product Details Section */}
              <div className="mb-12">
                <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-4xl font-bold text-[#90856f] mb-8">{product.price}</p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{product.description}</p>

                <div className="bg-white/80 backdrop-blur-sm p-8 mb-12 border-l-4 border-[#90856f]">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-[#90856f] uppercase tracking-wider mb-2">Details</h3>
                      <p className="text-gray-800 text-base">{product.details}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#90856f] uppercase tracking-wider mb-2">Materials</h3>
                      <p className="text-gray-800 text-base">{product.materials}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#90856f] uppercase tracking-wider mb-2">Dimensions</h3>
                      <p className="text-gray-800 text-base">{product.dimensions}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 shadow-lg border-t-4 border-[#90856f]">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Demande d'Information</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Nom Complet</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre Nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#90856f] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Adresse E-mail</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#90856f] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Numéro de Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+213 (0) XXX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#90856f] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Message (Facultatif)</label>
                    <textarea
                      name="message"
                      placeholder="Parlez-nous de votre demande..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#90856f] focus:outline-none text-gray-900 placeholder-gray-500 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#90856f] hover:bg-[#7a6f5f] text-white py-3 text-base font-semibold transition-colors"
                  >
                    Envoyer la Demande
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="h-24 md:h-32"></div>
      </main>

      <Footer />
    </div>
  )
}
