import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ValueSection } from "@/components/value-section"
import { BrandsSection } from "@/components/brands-section"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ValueSection />
      <BrandsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
