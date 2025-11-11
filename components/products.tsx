"use client"

import Link from "next/link"

interface Product {
  id: number
  name: string
  price: string
  image: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Sofa Minimaliste",
    price: "$1,299",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Canapé épuré et sophistiqué parfait pour les espaces de vie contemporains",
  },
  {
    id: 2,
    name: "Chaise Exécutive",
    price: "$799",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Chaise ergonomique premium conçue pour le confort et le style",
  },
  {
    id: 3,
    name: "Table Basse",
    price: "$499",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Table basse élégante en bois au design minimaliste",
  },
  {
    id: 4,
    name: "Lit Plateforme",
    price: "$1,599",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Lit plateforme contemporain aux lignes épurées et durabilité",
  },
  {
    id: 5,
    name: "Étagères Murales",
    price: "$349",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Étagères flottantes pour maximiser l'espace et le style",
  },
  {
    id: 6,
    name: "Luminaires Suspendus",
    price: "$249",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Solution d'éclairage ambiant pour tout intérieur moderne",
  },
  {
    id: 7,
    name: "Fauteuil Lounge",
    price: "$899",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Fauteuil confortable et élégant pour n'importe quelle pièce",
  },
  {
    id: 8,
    name: "Buffet",
    price: "$1,199",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Solution de rangement avec esthétique contemporaine",
  },
  {
    id: 9,
    name: "Canapé Sectionnelle",
    price: "$1,899",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Canapé spacieux pour les espaces de vie modernes",
  },
  {
    id: 10,
    name: "Table de Salle à Manger",
    price: "$1,399",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Table élégante pour les repas en famille et les réceptions",
  },
  {
    id: 11,
    name: "Bureau Contemporain",
    price: "$649",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Bureau fonctionnel avec design minimaliste épuré",
  },
  {
    id: 12,
    name: "Armoire Moderne",
    price: "$1,299",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Armoire de rangement pour chambre ou salon",
  },
  {
    id: 13,
    name: "Étagère Suspendue Chêne",
    price: "$599",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Étagère suspendue en chêne massif pour présentation élégante",
  },
  {
    id: 14,
    name: "Tabouret de Bar Luxe",
    price: "$449",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Tabouret de bar avec assise cuir et base en métal chromé",
  },
  {
    id: 15,
    name: "Console d'Entrée",
    price: "$789",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Table console contemporaine pour hall d'entrée spacieux",
  },
  {
    id: 16,
    name: "Meuble TV Suspendu",
    price: "$1,099",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    description: "Meuble TV mural avec rangement intégré minimaliste",
  },
]

export default function Products() {
  return (
    <section className="py-16 md:py-24" id="products" style={{ backgroundColor: "#eff0f1" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Nos Produits</h2>
        <div className="h-1 w-12 bg-amber-600 mx-auto mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="group cursor-pointer bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                  <p className="text-black font-bold text-xl">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-300 flex flex-col items-center gap-6">
          <p className="text-gray-700 text-center max-w-2xl text-lg">
            Découvrez notre collection complète de meubles premium conçus pour transformer votre espace de vie.
          </p>
          <Link href="/all-products">
            <button className="px-8 py-3 bg-[#90856f] hover:bg-[#7a6f5f] text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Voir Tous les Produits
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
