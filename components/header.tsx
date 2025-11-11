"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isProductPage =
    pathname.startsWith("/product") ||
    pathname.startsWith("/sofas") ||
    pathname.startsWith("/sleeping-rooms") ||
    pathname === "/contact"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 650)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navClasses = isHomePage
    ? isScrolled
      ? "bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg"
      : "bg-white/30 backdrop-blur-md border border-white/40"
    : "bg-gradient-to-r from-[#a89f9a] to-[#95897f] backdrop-blur-md border border-gray-300 shadow-lg"

  const textClasses = isHomePage ? (isScrolled ? "text-gray-800" : "text-white") : "text-white"

  const logoClasses = isHomePage ? (isScrolled ? "bg-gray-200" : "bg-white/40") : "bg-white/30"

  const logoTextClasses = isHomePage ? (isScrolled ? "text-gray-800" : "text-white") : "text-white"

  const contactButtonClasses = isHomePage ? "bg-[#90856f] hover:bg-[#7a6f5f]" : "bg-[#a3aca5] hover:bg-[#929b93]"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <nav
        className={`max-w-7xl w-full px-6 py-4 flex items-center justify-between rounded-md transition-all duration-300 ${navClasses}`}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${logoClasses}`}
          >
            <span className={`font-bold text-lg transition-colors duration-300 ${logoTextClasses}`}>V</span>
          </div>
          <span
            className={`text-xl font-semibold hidden sm:inline-block transition-colors duration-300 ${textClasses}`}
          >
            Vola
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/all-products"
            className={`hover:opacity-70 transition-all duration-300 text-sm font-medium ${textClasses}`}
          >
            Produits
          </Link>
          <Link
            href="/#process"
            className={`hover:opacity-70 transition-all duration-300 text-sm font-medium ${textClasses}`}
          >
            Notre Processus
          </Link>
          <Link
            href="/contact"
            className={`hover:opacity-70 transition-all duration-300 text-sm font-medium ${textClasses}`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isHomePage && !isScrolled ? "hover:bg-white/10 text-white" : "hover:bg-white/10 text-white"
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <Link href="/contact">
            <Button
              className={`hidden sm:flex ${contactButtonClasses} text-white rounded-full px-6 transition-all duration-300`}
            >
              Nous Contacter
            </Button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isHomePage && !isScrolled ? "hover:bg-white/10 text-white" : "hover:bg-white/10 text-white"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className={`md:hidden m-4 mt-2 rounded-lg border transition-all duration-300 ${
            isHomePage && !isScrolled
              ? "bg-white/10 backdrop-blur-md border-white/20"
              : "bg-gradient-to-r from-[#a89f9a] to-[#95897f] backdrop-blur-md border-gray-300"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/all-products"
              className={`transition-colors py-2 ${
                isHomePage && !isScrolled ? "text-white hover:text-gray-100" : "text-white hover:text-gray-100"
              }`}
            >
              Produits
            </Link>
            <Link
              href="/#process"
              className={`transition-colors py-2 ${
                isHomePage && !isScrolled ? "text-white hover:text-gray-100" : "text-white hover:text-gray-100"
              }`}
            >
              Notre Processus
            </Link>
            <Link
              href="/contact"
              className={`transition-colors py-2 ${
                isHomePage && !isScrolled ? "text-white hover:text-gray-100" : "text-white hover:text-gray-100"
              }`}
            >
              Contact
            </Link>
            <Link href="/contact" className="w-full">
              <Button className={`w-full ${contactButtonClasses} text-white rounded-full`}>Nous Contacter</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
