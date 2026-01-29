import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { TreatmentsShowcase } from "@/components/treatments-showcase"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ShowcaseSection />
      <TreatmentsShowcase />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
