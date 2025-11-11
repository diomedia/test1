"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Sofa, Bed, Lamp, Armchair } from "lucide-react"

interface Product {
  id: number
  name: string
  price: string
  image: string
  description: string
  category: "sofas" | "bedroom" | "lighting" | "accessories"
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Sofa Minimaliste",
    price: "$1,299",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Canapé épuré et sophistiqué parfait pour les espaces de vie contemporains",
    category: "sofas",
  },
  {
    id: 2,
    name: "Chaise Exécutive",
    price: "$799",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Chaise ergonomique premium conçue pour le confort et le style",
    category: "accessories",
  },
  {
    id: 3,
    name: "Table Basse",
    price: "$499",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Table basse élégante en bois au design minimaliste",
    category: "accessories",
  },
  {
    id: 4,
    name: "Lit Plateforme",
    price: "$1,599",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Lit plateforme contemporain aux lignes épurées et durabilité",
    category: "bedroom",
  },
  {
    id: 5,
    name: "Étagères Murales",
    price: "$349",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Étagères flottantes pour maximiser l'espace et le style",
    category: "accessories",
  },
  {
    id: 6,
    name: "Luminaires Suspendus",
    price: "$249",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Solution d'éclairage ambiant pour tout intérieur moderne",
    category: "lighting",
  },
  {
    id: 7,
    name: "Fauteuil Lounge",
    price: "$899",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Fauteuil confortable et élégant pour n'importe quelle pièce",
    category: "sofas",
  },
  {
    id: 8,
    name: "Buffet",
    price: "$1,199",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Solution de rangement avec esthétique contemporaine",
    category: "accessories",
  },
  {
    id: 9,
    name: "Canapé Luxury Bleu",
    price: "$2,499",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Canapé premium en velours avec accoudoirs en or",
    category: "sofas",
  },
  {
    id: 10,
    name: "Chambre Complète",
    price: "$4,999",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Ensemble complet de chambre avec design contemporain",
    category: "bedroom",
  },
]

const categories = [
  { id: "all", name: "Tous les Produits", icon: null },
  { id: "sofas", name: "Canapés", icon: Sofa },
  { id: "bedroom", name: "Chambres", icon: Bed },
  { id: "lighting", name: "Éclairage", icon: Lamp },
  { id: "accessories", name: "Accessoires", icon: Armchair },
]

export default function AllProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Shuffle products randomly on mount
  const shuffledProducts = useMemo(() => {
    return [...allProducts].sort(() => Math.random() - 0.5)
  }, [])

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return shuffledProducts
    }
    return shuffledProducts.filter((product) => product.category === selectedCategory)
  }, [selectedCategory, shuffledProducts])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="pt-32 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2 text-center">
              Tous Nos Produits
            </h1>
            <p className="text-center text-gray-600 text-base max-w-2xl mx-auto">
              Découvrez notre collection complète de meubles premium
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const IconComponent = category.icon
                const isActive = selectedCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive ? "bg-[#90856f] text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {category.name}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`}>
                    <div className="group cursor-pointer bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg">
                      <div className="relative overflow-hidden bg-muted h-64 flex items-center justify-center">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                        <p className="text-[#90856f] font-bold text-xl">{product.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">Aucun produit trouvé dans cette catégorie</p>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Heading */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                Pourquoi Choisir <span className="text-[#90856f]">Notre Boutique</span>
              </h2>
              <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto">
                Découvrez ce qui nous rend uniques dans l'industrie du mobilier
              </p>
            </div>

            {/* Features Grid - Bento Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Top Row: 3 Cards */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#f5f1ed] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#90856f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Solutions Complètes</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nous gérons chaque aspect de votre projet de décoration, vous sauvant du temps et des ressources.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#f5f1ed] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#90856f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5-4a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Après-Vente</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nous sommes engagés dans un service de suivi et support pour résoudre tout besoin futur.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#f5f1ed] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#90856f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualité Garantie</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tous nos meubles respectent les plus hauts standards de qualité et de durabilité.
                </p>
              </div>

              {/* Bottom Row: 2 Cards - Larger */}
              <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#90856f] to-[#7a6f5f] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-bedroom-furniture-set-pxXjpIrGkZQnmSu1E5wJP39OghOmj9.jpg)",
                  }}
                ></div>
                <div className="relative z-10 p-6 md:p-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Qualité Supérieure</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Nos partenariats avec les meilleurs fournisseurs nous donnent accès aux matériaux et savoir-faire
                    les plus fins.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#9b8c7e] to-[#8a7a6c] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luxury-sofa-furniture-LDGqICyDsvz9wBnKgEU7PzMFTwKEjh.jpg)",
                  }}
                ></div>
                <div className="relative z-10 p-6 md:p-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Mobilier Sur Mesure</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Nous spécialisons dans le sourçage de pièces fabriquées sur mesure qui correspondent parfaitement à
                    votre vision unique et vos exigences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing section moved outside to have proper spacing before footer */}
        <section className="h-24 md:h-32 bg-gray-50"></section>
      </main>
      <Footer />
    </>
  )
}
