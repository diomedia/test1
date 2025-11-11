"use client"

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: "#eff0f1" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Nous <span className="text-[#90856f]">sommes là pour vous aider</span>
          </h2>
        </div>

        {/* Bento Grid with animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Solutions Complètes */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between h-64 animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Solutions Complètes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nous gérons chaque aspect de votre projet d'ameublement, vous faisant gagner du temps et des ressources.
              </p>
            </div>
            <div className="text-5xl text-[#90856f] animate-pulse">✦</div>
          </div>

          {/* Card 2: Support Après-Vente */}
          <div
            className="bg-white rounded-3xl p-8 flex flex-col justify-between h-64 animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: "0.1s" }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Support Après-Vente</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nous nous engageons à fournir un support continu et un service après-vente pour répondre à vos besoins.
              </p>
            </div>
            <div className="text-5xl text-[#90856f] animate-pulse">◆</div>
          </div>

          {/* Card 3: Absence de Restrictions */}
          <div
            className="bg-[#5a4a3a] rounded-3xl p-8 flex flex-col justify-between h-64 text-white animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">Absence de Restrictions</h3>
              <p className="text-gray-100 text-sm leading-relaxed">
                Nous nous associons à tous les fournisseurs pour offrir la plus large sélection de solutions
                d'ameublement.
              </p>
            </div>
          </div>

          {/* Card 4: Qualité Supérieure */}
          <div
            className="md:col-span-2 rounded-3xl overflow-hidden h-80 flex items-end bg-cover bg-center relative animate-fade-in-up hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            style={{
              backgroundImage:
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-bedroom-furniture-set-pxXjpIrGkZQnmSu1E5wJP39OghOmj9.jpg)",
              animationDelay: "0.3s",
            }}
          >
            <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-all duration-300"></div>
            <div className="relative z-10 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">Qualité Supérieure</h3>
              <p className="text-gray-100 text-sm">
                Nos partenariats avec les meilleurs fournisseurs nous donnent accès aux meilleurs matériaux et processus
                de contrôle qualité.
              </p>
            </div>
          </div>

          {/* Card 5: Mobilier Personnalisé */}
          <div
            className="bg-[#5a4a3a] rounded-3xl p-8 flex flex-col justify-between h-80 text-white animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">Mobilier Personnalisé</h3>
              <p className="text-gray-100 text-sm leading-relaxed">
                Nous spécialisons dans la création de meubles sur mesure qui correspondent parfaitement à votre vision
                unique et vos besoins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
