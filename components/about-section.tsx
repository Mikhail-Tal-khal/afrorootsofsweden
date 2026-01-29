"use client"

import Image from "next/image"
import { Check, Heart, Sparkles, Users } from "lucide-react"

const benefits = [
  "Förbättrad blodcirkulation",
  "Minskad stress och ångest",
  "Lindring av muskelspänningar",
  "Ökad flexibilitet",
  "Naturlig detox",
  "Djup avslappning"
]

const stats = [
  { icon: Users, value: "500+", label: "Nöjda kunder" },
  { icon: Heart, value: "10+", label: "Års erfarenhet" },
  { icon: Sparkles, value: "100%", label: "Naturligt" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image Composition */}
          <div className="relative">
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702505240/m1_gs8swb.jpg"
                alt="Afrikansk wellness"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating secondary image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-card hidden md:block">
              <Image
                src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/sh3_tmi4tu.jpg"
                alt="Massage behandling"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Ubuntu card */}
            <div className="absolute -bottom-4 left-8 md:left-auto md:-left-8 bg-card p-6 rounded-2xl shadow-2xl border border-border max-w-[280px]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-foreground">Ubuntu Filosofi</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {'"Jag är för att vi är"'}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative rings */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-primary/20 rounded-full" />
            <div className="absolute -top-12 -left-12 w-40 h-40 border border-primary/10 rounded-full" />
          </div>

          {/* Right - Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-widest">
                <div className="w-8 h-px bg-primary" />
                Om Oss
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1]">
                Elementen och energin i{" "}
                <span className="text-primary">rörelse</span> och{" "}
                <span className="text-primary">glädje</span>
              </h2>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Efter många års studier av massage och naturliga läkningsmetoder, har vi omfamnat 
              den unika och kraftfulla formen av afrikansk klassisk massage. Våra behandlingar 
              är rotade i århundraden av tradition.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div 
                  key={benefit} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
