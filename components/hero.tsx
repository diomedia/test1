"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative">
      {/* Main Hero */}
      <div className="relative w-full h-[700px] md:h-[850px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%208%20nov.%202025%2C%2016_52_02-58aR3ivw7SRjNIpV7B6kudRoWQqbRl.png)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 max-w-3xl leading-tight">
            Meubles Uniques pour Espaces Modernes
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Découvrez des meubles magnifiquement conçus qui transforment votre espace en un sanctuaire de style et de
            confort.
          </p>
          <Link href="/contact">
            <Button className="bg-[#90856f] hover:bg-[#7a6f5f] text-white rounded-full px-8 py-6 text-base font-medium">
              Nous Contacter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
