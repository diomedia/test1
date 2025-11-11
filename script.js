// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-menu .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open")
  })
})

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      const target = document.querySelector(href)
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Product Database
const productsDatabase = [
  {
    id: 1,
    name: "Sofa Minimaliste",
    price: "$1,299",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "sofas",
    description: "Canapé épuré et sophistiqué parfait pour les espaces de vie contemporains",
    materials: "Cuir premium, structure acier",
    dimensions: "240cm x 90cm x 85cm",
    weight: "45kg",
  },
  {
    id: 2,
    name: "Chaise Exécutive",
    price: "$799",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Chaise ergonomique premium conçue pour le confort et le style",
    materials: "Cuir, acier inoxydable",
    dimensions: "65cm x 65cm x 110cm",
    weight: "18kg",
  },
  {
    id: 3,
    name: "Table Basse",
    price: "$499",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Table basse élégante en bois au design minimaliste",
    materials: "Bois massif, verre teinté",
    dimensions: "120cm x 60cm x 45cm",
    weight: "22kg",
  },
  {
    id: 4,
    name: "Lit Plateforme",
    price: "$1,599",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "bedrooms",
    description: "Lit plateforme contemporain aux lignes épurées et durabilité",
    materials: "Bois de frêne, tissu linen",
    dimensions: "200cm x 160cm x 40cm",
    weight: "60kg",
  },
  {
    id: 5,
    name: "Étagères Murales",
    price: "$349",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Étagères flottantes pour maximiser l'espace et le style",
    materials: "Bois blanc laqué, supports acier",
    dimensions: "120cm x 30cm x 20cm",
    weight: "8kg",
  },
  {
    id: 6,
    name: "Luminaires Suspendus",
    price: "$249",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Solution d'éclairage ambiant pour tout intérieur moderne",
    materials: "Verre soufflé, laiton brossé",
    dimensions: "40cm x 40cm x 45cm",
    weight: "2kg",
  },
  {
    id: 7,
    name: "Fauteuil Lounge",
    price: "$899",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "sofas",
    description: "Fauteuil confortable et élégant pour n'importe quelle pièce",
    materials: "Tissu haute densité, pieds bois",
    dimensions: "85cm x 85cm x 80cm",
    weight: "28kg",
  },
  {
    id: 8,
    name: "Buffet",
    price: "$1,199",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Solution de rangement avec esthétique contemporaine",
    materials: "Bois chêne, acier noir",
    dimensions: "180cm x 50cm x 90cm",
    weight: "55kg",
  },
  {
    id: 9,
    name: "Canapé Sectionnelle",
    price: "$1,899",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "sofas",
    description: "Canapé spacieux pour les espaces de vie modernes",
    materials: "Cuir véritable, bois de peuplier",
    dimensions: "280cm x 200cm x 90cm",
    weight: "75kg",
  },
  {
    id: 10,
    name: "Table de Salle à Manger",
    price: "$1,399",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Table élégante pour les repas en famille et les réceptions",
    materials: "Marbre blanc, acier inoxydable",
    dimensions: "200cm x 100cm x 75cm",
    weight: "85kg",
  },
  {
    id: 11,
    name: "Bureau Contemporain",
    price: "$649",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Bureau fonctionnel avec design minimaliste épuré",
    materials: "Bois MDF blanc, pieds noirs",
    dimensions: "160cm x 70cm x 75cm",
    weight: "35kg",
  },
  {
    id: 12,
    name: "Armoire Moderne",
    price: "$1,299",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "bedrooms",
    description: "Armoire de rangement pour chambre ou salon",
    materials: "Bois laminé, portes miroir",
    dimensions: "120cm x 50cm x 200cm",
    weight: "70kg",
  },
  {
    id: 13,
    name: "Étagère Suspendue Chêne",
    price: "$599",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Étagère suspendue en chêne massif pour présentation élégante",
    materials: "Chêne massif, câbles acier",
    dimensions: "150cm x 35cm x 25cm",
    weight: "12kg",
  },
  {
    id: 14,
    name: "Tabouret de Bar Luxe",
    price: "$449",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Tabouret de bar avec assise cuir et base en métal chromé",
    materials: "Cuir premium, chromage",
    dimensions: "40cm x 40cm x 65cm",
    weight: "8kg",
  },
  {
    id: 15,
    name: "Console d'Entrée",
    price: "$789",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Table console contemporaine pour hall d'entrée spacieux",
    materials: "Bois clair, verre noir",
    dimensions: "120cm x 40cm x 80cm",
    weight: "25kg",
  },
  {
    id: 16,
    name: "Meuble TV Suspendu",
    price: "$1,099",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Design%20Clipart-s1hTxHLyMmmCU1pkY1mGrI94o3kaLC.jpg",
    category: "other",
    description: "Meuble TV mural avec rangement intégré minimaliste",
    materials: "Bois blanc, montages muraux",
    dimensions: "180cm x 45cm x 50cm",
    weight: "40kg",
  },
]

// Render Products Function
function renderProducts(products, container) {
  if (!container) return
  container.innerHTML = ""
  products.forEach((product) => {
    const productCard = document.createElement("a")
    productCard.href = `product-detail.html?id=${product.id}`
    productCard.style.textDecoration = "none"
    productCard.style.color = "inherit"

    productCard.innerHTML = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">${product.price}</p>
        </div>
      </div>
    `
    container.appendChild(productCard)
  })
}

// Load Product Detail Function
function loadProductDetail() {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id")) || 1
  const product = productsDatabase.find((p) => p.id === productId)

  if (!product) {
    document.body.innerHTML = "<p>Produit non trouvé</p>"
    return
  }

  document.title = `${product.name} - Vola Furniture`
  // Product detail rendering handled on product-detail.html
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Existing mobile menu functionality
  const menuToggle = document.getElementById("menuToggle")
  const mobileMenu = document.getElementById("mobileMenu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open")
    })
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".mobile-menu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("open")
      }
    })
  })

  // Smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault()
        const target = document.querySelector(href)
        target.scrollIntoView({ behavior: "smooth" })
      }
    })
  })

  const productsGrid = document.getElementById("productsGrid")
  if (productsGrid) {
    renderProducts(productsDatabase.slice(0, 8), productsGrid)
  }

  const allProductsGrid = document.getElementById("allProductsGrid")
  if (allProductsGrid) {
    renderProducts(productsDatabase, allProductsGrid)
  }

  const sofasGrid = document.getElementById("sofasGrid")
  if (sofasGrid) {
    const sofas = productsDatabase.filter((p) => p.category === "sofas")
    renderProducts(sofas, sofasGrid)
  }

  const bedroomsGrid = document.getElementById("bedroomsGrid")
  if (bedroomsGrid) {
    const bedrooms = productsDatabase.filter((p) => p.category === "bedrooms")
    renderProducts(bedrooms, bedroomsGrid)
  }

  loadProductDetail()

  // Handle form submissions
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Merci de nous avoir contactés ! Nous vous répondrons bientôt.")
      contactForm.reset()
    })
  }

  const productForm = document.getElementById("productForm")
  if (productForm) {
    productForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Votre demande a été envoyée ! Nous vous répondrons bientôt.")
      productForm.reset()
    })
  }

  // Add scroll animation for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.6s ease-out"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe sections
  document.querySelectorAll(".showcase, .categories, .products").forEach((section) => {
    observer.observe(section)
  })
})
