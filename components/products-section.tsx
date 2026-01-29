"use client"

import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

const productImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707689373/kalabesh_atnxg2.jpg",
    alt: "Kalebas produkter",
    title: "Kalebas",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707689013/qasilorgin_vac2u5.jpg",
    alt: "Qasil produkter",
    title: "Qasil Original",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707688268/qasilPicss_yskcg6.jpg",
    alt: "Qasil behandling",
    title: "Qasil Pulver",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707688268/oil_dpm34w.jpg",
    alt: "Naturliga oljor",
    title: "Naturliga Oljor",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary)/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-widest mb-6">
            <Sparkles className="h-4 w-4" />
            Våra Produkter
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Produkter Konsten Av{" "}
            <span className="text-primary">Naturlig Skönhet</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Upptäck vårt sortiment av internationella produkter som vi erbjuder i vår butik.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {productImages.map((product, index) => (
            <div 
              key={product.id}
              className="group relative aspect-square rounded-3xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={product.src || "/placeholder.svg"}
                alt={product.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-xl font-serif font-bold text-card text-center mb-2">
                  {product.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm text-primary-foreground font-medium">
                  Se mer
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 text-lg font-semibold text-primary hover:gap-5 transition-all duration-300"
          >
            Besök vår butik för fler produkter
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
