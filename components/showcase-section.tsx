"use client"

import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

const showcaseImages = [
  "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh1_xqkfcz.jpg",
  "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/show1_l37ttp.jpg",
  "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh2_s0tfxt.jpg",
  "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/sh3_tmi4tu.jpg",
]

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-widest">
                <Sparkles className="h-4 w-4" />
                Valkommen
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1]">
                Upptack vart breda utbud av{" "}
                <span className="text-primary">skraddarsydda</span>{" "}
                massagebehandlingar
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Erfarenheter av vark och smarta kan ofta hindra oss fran att vara pa var basta niva. 
              Vi hjalper dig hitta balansen.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-lg text-foreground/80">
                  <strong className="text-foreground">Perfekt for dig</strong> som spenderar langa timmar vid skrivbordet eller bakom ratten.
                </span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-lg text-foreground/80">
                  <strong className="text-foreground">Var avstressande massage</strong> fokuserar pa att forbattra cirkulation och flexibilitet, samtidigt som den minskar smarta och stress.
                </span>
              </li>
            </ul>

            <a 
              href="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:gap-4 transition-all duration-300 group"
            >
              Boka din behandling idag
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right - Image Grid */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl -z-10" />
            <div className="absolute -inset-8 border border-primary/10 rounded-[2rem] -z-10" />
            
            <div className="grid grid-cols-2 gap-4">
              {showcaseImages.map((src, index) => (
                <div 
                  key={index} 
                  className={`relative rounded-2xl overflow-hidden group ${
                    index === 0 ? 'aspect-[4/5]' : 
                    index === 1 ? 'aspect-square mt-8' :
                    index === 2 ? 'aspect-square -mt-8' :
                    'aspect-[4/5]'
                  }`}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Massage behandling ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}