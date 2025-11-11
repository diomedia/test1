"use client"

import { Armchair, Sofa, Lamp, Bed, Warehouse, Leaf } from "lucide-react"
import Link from "next/link"

const categories = [
  { icon: Armchair, label: "Chairs" },
  { icon: Sofa, label: "Sofas", href: "/sofas" },
  { icon: Lamp, label: "Lighting" },
  { icon: Bed, label: "Beds", href: "/sleeping-rooms" },
  { icon: Warehouse, label: "Storage" },
  { icon: Leaf, label: "Décor" },
]

export default function Categories() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%208%20nov.%202025%2C%2016_52_02-58aR3ivw7SRjNIpV7B6kudRoWQqbRl.png)",
          filter: "blur(20px)",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="mb-12 relative inline-block w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Category</h2>
          <div className="h-1 w-20 mx-auto" style={{ backgroundColor: "#878976" }}></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            const isClickable = cat.href

            return (
              <div key={idx}>
                {isClickable ? (
                  <Link href={cat.href}>
                    <div
                      className="flex flex-col items-center gap-3 p-5 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-110"
                      style={{
                        backgroundColor: "#878976",
                      }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-white text-center">{cat.label}</p>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="flex flex-col items-center gap-3 p-5 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-110"
                    style={{
                      backgroundColor: "#878976",
                    }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-medium text-white text-center">{cat.label}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
