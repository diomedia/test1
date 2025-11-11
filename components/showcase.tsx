"use client"

import Link from "next/link"
import { Star, MapPin } from "lucide-react"
import { useState, useMemo } from "react"

export default function Showcase() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  const reviews = [
    { name: "Marie Laurent", text: "Qualité exceptionnelle, design magnifique!", rating: 5 },
    { name: "Jean Dupont", text: "Notre maison transformée complètement!", rating: 5 },
    { name: "Sophie Martin", text: "Service et produits impeccables!", rating: 5 },
  ]

  const sofaImages = useMemo(
    () => [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    ],
    [],
  )

  const bedroomImages = useMemo(
    () => [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    ],
    [],
  )

  const randomSofaImage = useMemo(() => sofaImages[Math.floor(Math.random() * sofaImages.length)], [sofaImages])
  const randomBedroomImage = useMemo(
    () => bedroomImages[Math.floor(Math.random() * bedroomImages.length)],
    [bedroomImages],
  )

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-32 md:py-40 relative" style={{ backgroundColor: "#eff0f1" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center">Ensembles Complets</h2>
        </div>

        <div className="flex gap-8 md:gap-12 relative">
          {/* Sofas Card */}
          <Link href="/sofas" className="group flex-1">
            <div className="relative overflow-hidden bg-muted h-48 md:h-64 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-lg cursor-pointer">
              <img
                src={randomSofaImage || "/placeholder.svg"}
                alt="Collection premium de sofas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-5xl md:text-6xl font-serif font-bold text-white"
                  style={{
                    textShadow: "0 8px 16px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
                    fontStyle: "italic",
                    letterSpacing: "-0.02em",
                    animation: "wave 3s ease-in-out infinite",
                  }}
                >
                  Sofas
                </p>
              </div>
            </div>
          </Link>

          {/* Sleeping Room Card */}
          <Link href="/sleeping-rooms" className="group flex-1">
            <div className="relative overflow-hidden bg-muted h-48 md:h-64 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-lg cursor-pointer">
              <img
                src={randomBedroomImage || "/placeholder.svg"}
                alt="Collection élégante de chambres"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-5xl md:text-6xl font-serif font-bold text-white"
                  style={{
                    textShadow: "0 8px 16px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
                    fontStyle: "italic",
                    letterSpacing: "-0.02em",
                    animation: "wave 3s ease-in-out infinite",
                  }}
                >
                  Chambre
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Reviews Card - Bottom Right with Carousel */}
        <div className="absolute -top-36 right-6 z-20 animate-float max-w-sm">
          <div className="bg-white/95 backdrop-blur-md rounded-[40px] p-6 shadow-2xl flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 mb-4">Avis Clients</h3>
            <div className="relative flex flex-col">
              <div className="flex gap-3 pb-4 border-b border-gray-200">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-amber-900">
                  {reviews[currentReviewIndex].name[0]}
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex gap-1 mb-1">
                    {[...Array(reviews[currentReviewIndex].rating)].map((_, j) => (
                      <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed">
                    {reviews[currentReviewIndex].text}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">- {reviews[currentReviewIndex].name}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <button
                  onClick={prevReview}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg font-bold text-xl transition-colors"
                >
                  ←
                </button>
                <div className="flex gap-2">
                  {reviews.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        i === currentReviewIndex ? "bg-amber-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextReview}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg font-bold text-xl transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews Card - Bottom Left */}
        <div className="absolute -top-36 left-6 z-20 max-w-sm animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="bg-white/95 backdrop-blur-md rounded-[40px] p-6 shadow-2xl max-h-96 overflow-y-auto">
            <h3 className="text-sm font-bold text-gray-800 mb-4">Avis Google</h3>
            <div className="flex-1">
              <p className="text-xs text-gray-700 font-medium leading-relaxed mb-4">
                Nous nous engageons à offrir une expérience exceptionnelle. Chaque avis client nous inspire à continuer
                d'améliorer nos services et nos produits de qualité supérieure.
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/cjjvrBX2X2M2UMbv5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#90856f] hover:bg-[#7a6f5f] text-white rounded-lg py-3 px-4 text-sm font-semibold transition-colors w-full whitespace-nowrap"
            >
              <MapPin size={16} />
              Avis Google
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
