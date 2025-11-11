"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%208%20nov.%202025%2C%2016_52_02-58aR3ivw7SRjNIpV7B6kudRoWQqbRl.png)",
          filter: "blur(20px)",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-white">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="font-bold" style={{ color: "#878976" }}>
                  V
                </span>
              </div>
              <span className="text-xl font-semibold">Vola</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Créer des expériences de meubles exceptionnelles pour les espaces de vie modernes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Boutique</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-amber-200 transition-colors">
                  Tous les Produits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200 transition-colors">
                  Nouveautés
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200 transition-colors">
                  Soldes
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-amber-200 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200 transition-colors">
                  Notre Processus
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@vola.com" className="hover:text-amber-200 transition-colors">
                  hello@vola.com
                </a>
              </li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <p className="text-sm text-white/80">© 2025 X Furniture. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link href="#" className="hover:text-amber-200 transition-colors p-2 hover:bg-white/10 rounded-lg">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-amber-200 transition-colors p-2 hover:bg-white/10 rounded-lg">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-amber-200 transition-colors p-2 hover:bg-white/10 rounded-lg">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
