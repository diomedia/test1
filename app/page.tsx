import Header from "@/components/header"
import Hero from "@/components/hero"
import Showcase from "@/components/showcase"
import Categories from "@/components/categories"
import Products from "@/components/products"
import Footer from "@/components/footer"
import WhyChooseUs from "@/components/why-choose-us"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Showcase />
      <Categories />
      <Products />
      <WhyChooseUs />
      <div className="h-24 md:h-32" style={{ backgroundColor: "#eff0f1" }}></div>
      <Footer />
    </main>
  )
}
