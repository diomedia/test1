"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const sofas = [
  {
    id: 1,
    name: "Minimalist Sofa",
    description: "Sleek and sophisticated sofa perfect for contemporary living spaces",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    price: "Da1,299",
  },
  {
    id: 2,
    name: "Modern Sectional",
    description: "Spacious L-shaped sectional for comfort and style",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    price: "Da1,899",
  },
  {
    id: 3,
    name: "Contemporary Loveseat",
    description: "Perfect two-seater for cozy spaces and apartments",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    price: "Da899",
  },
  {
    id: 4,
    name: "Luxury Sofa Bed",
    description: "Convertible sofa bed with premium comfort features",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    price: "Da1,599",
  },
]

export default function SofasPage() {
  return (
    <div className="relative">
      <Header />

      <main className="min-h-screen pt-24" style={{ backgroundColor: "#eff0f1" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/" className="flex items-center gap-2 text-[#90856f] hover:text-[#7a6f5f] mb-12 font-semibold">
            <ArrowLeft className="w-5 h-5" />
            Retour à la page d'accueil
          </Link>

          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">Our Sofas Collection</h1>
            <div className="h-1 w-32 bg-[#90856f] mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
              Discover our curated collection of modern sofas, from minimalist designs to luxurious sectionals. Each
              piece is crafted for comfort and style.
            </p>
          </div>

          {/* Sofas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sofas.map((sofa) => (
              <Link key={sofa.id} href={`/sofas/${sofa.id}`}>
                <div className="group cursor-pointer bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden bg-white h-96 flex items-center justify-center">
                    <img
                      src={sofa.image || "/placeholder.svg"}
                      alt={sofa.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{sofa.name}</h3>
                        <div className="h-0.5 w-12 bg-[#90856f]"></div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base mb-6 leading-relaxed">{sofa.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[#90856f] font-bold text-2xl">{sofa.price}</p>
                      <button className="bg-[#90856f] hover:bg-[#7a6f5f] text-white px-6 py-2 font-semibold transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Professional Spacing */}
        <div className="h-24 md:h-32"></div>
      </main>

      <Footer />
    </div>
  )
}
