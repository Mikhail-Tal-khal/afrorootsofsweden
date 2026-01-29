"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, ShieldCheck, Leaf, ShoppingBag } from "lucide-react"

const showcaseImages = [
  "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh1_xqkfcz.jpg",
  "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/show1_l37ttp.jpg",
  "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh2_s0tfxt.jpg",
  "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/sh3_tmi4tu.jpg",
  "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/sh5_gya7ov.jpg",
  "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh4_ypcnbw.webp",
]

const features = [
  {
    icon: ShieldCheck,
    title: "Butik Lojalitet",
    subtitle: "Vi har högt fokus på",
    description: "produktkvalitet, så alla produkter testas innan de säljs",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707689373/kalabesh_atnxg2.jpg",
  },
  {
    icon: Leaf,
    title: "Naturliga Produkter",
    subtitle: "Vi använder våra egna",
    description: "utländska produkter som är noggrant utvalda",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707689013/qasilorgin_vac2u5.jpg",
  },
  {
    icon: ShoppingBag,
    title: "Produkter",
    subtitle: "Vi erbjuder handel av",
    description: "våra premium produkter som används i tjänsterna",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707688268/oil_dpm34w.jpg",
  },
]

const treatments = [
  {
    id: 1,
    name: "Klassisk Massage",
    slug: "klassisk-massage",
    duration: "60min",
    price: "600kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707685871/stressmassage_qyh0vo.jpg",
    description: "Effektiv behandling för att frigöra muskelspänningar och förbättra blodcirkulationen",
  },
  {
    id: 2,
    name: "Afrikansk Signatur",
    slug: "afrikansk-signatur",
    duration: "60min",
    price: "600kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702332898/head_dy3b6d.jpg",
    description: "Djupgående aromatisk massage med ångade örter för ökad cirkulation och lindring av muskelspänningar. Perfekt för vintermånaderna",
    note: "Viktigt meddelande: Rådgör alltid med din läkare innan du genomgår en Herbal Compress Massage.",
  },
  {
    id: 3,
    name: "Kalebas Massage",
    slug: "kalebas-massage",
    duration: "60min",
    price: "650kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1704056190/ook_wqz5hy.jpg",
    description: "Behandling med 100% torkade pumpafrukter för att frigöra toxiner, lindra spänningar och förbättra blodcirkulation",
  },
  {
    id: 4,
    name: "Rungu Massage",
    slug: "rungu-massage",
    duration: "60min",
    price: "600kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707686166/rungu_gxhgpe.png",
    description: "Stimulerande Afrikansk massage med Maasai Rungu. Lindrar permanent spända muskler, förbättrar blodcirkulation och minskar celluliter",
  },
  {
    id: 5,
    name: "Aromaterapi",
    slug: "aromaterapi",
    duration: "60min",
    price: "600kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/show1_l37ttp.jpg",
    description: "Avkopplande massage med aromatiska eteriska oljor som stimulerar sinnet och kroppen.",
  },
  {
    id: 6,
    name: "Bamboo Massage",
    slug: "bamboo-massage",
    duration: "60min",
    price: "650kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/sh3_tmi4tu.jpg",
    description: "Unik massage med uppvärmda bamburör som rullas och pressas mot musklerna för djup avslappning.",
  },
  {
    id: 7,
    name: "Fotmassage",
    slug: "fotmassage",
    duration: "45min",
    price: "450kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh2_s0tfxt.jpg",
    description: "Reflexologibehandling som fokuserar på tryckpunkter i fötterna för att stimulera kroppens naturliga läkningsprocesser.",
  },
  {
    id: 8,
    name: "Graviditet Massage",
    slug: "graviditet-massage",
    duration: "60min",
    price: "650kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/sh5_gya7ov.jpg",
    description: "Skonsam och trygg massage speciellt anpassad för gravida kvinnor.",
  },
  {
    id: 9,
    name: "Indisk Huvudmassage",
    slug: "indisk-huvudmassage",
    duration: "45min",
    price: "500kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702505240/m1_gs8swb.jpg",
    description: "Traditionell indisk massage som fokuserar på huvud, nacke och axlar.",
  },
  {
    id: 10,
    name: "Stressmassage",
    slug: "stressmassage",
    duration: "60min",
    price: "600kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh1_xqkfcz.jpg",
    description: "Specialiserad massage för att motverka stress och spänningar.",
  },
]

export function TreatmentsShowcase() {
  const [showAll, setShowAll] = useState(false)
  const displayedTreatments = showAll ? treatments : treatments.slice(0, 4)

  return (
    <section id="treatments" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-widest mb-6">
            <div className="w-12 h-px bg-primary" />
            Vår Filosofi
            <div className="w-12 h-px bg-primary" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
            Elementen och{" "}
            <span className="text-primary">energin</span>
          </h2>
          <p className="text-2xl text-primary/80 mt-6 font-serif italic">
            Energi i rörelse och glädje
          </p>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-2xl mx-auto">
            Efter många års studier av massage och naturliga läkningsmetoder, har vi omfamnat den unika 
            och kraftfulla formen av afrikansk klassisk massage.
          </p>
        </div>

        {/* Showcase Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-24">
          {showcaseImages.map((src, index) => (
            <div 
              key={index} 
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Behandling ${index + 1}`}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-card/90 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-6 left-6 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">{feature.subtitle}</span>{" "}
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Treatments Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-widest mb-4">
            <Sparkles className="h-4 w-4" />
            Våra Behandlingar
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Konsten av Naturlig{" "}
            <span className="text-primary">Skönhet</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Upptäck vårt utbud av autentiska afrikanska massagebehandlingar
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {displayedTreatments.map((treatment, index) => (
            <Link
              key={treatment.id}
              href={`/tjanster/${treatment.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-card aspect-[16/10]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={treatment.image || "/placeholder.svg"}
                alt={treatment.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-foreground/20 group-hover:from-foreground/98 transition-all duration-500" />
              
              {/* Price tag */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-card/95 backdrop-blur-sm rounded-full text-foreground font-bold shadow-lg">
                {treatment.price}
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-card">
                      {treatment.name}
                    </h3>
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm text-primary-foreground">
                      {treatment.duration}
                    </span>
                  </div>
                  
                  <p className="text-card/90 leading-relaxed line-clamp-2">
                    {treatment.description}
                  </p>
                  
                  {treatment.note && (
                    <p className="text-sm text-card/70 italic">
                      {treatment.note}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-2 pt-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span>Läs mer</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            size="lg"
            className="rounded-full px-12 py-7 text-lg shadow-xl shadow-btn-bg/25 hover:shadow-2xl hover:shadow-btn-bg/30 transition-all duration-300 hover:-translate-y-1"
          >
            {showAll ? 'Visa färre' : 'Visa alla behandlingar'}
            <ArrowRight className={`ml-3 h-5 w-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {[
            { value: "10+", label: "Unika behandlingar" },
            { value: "450kr", label: "Från pris" },
            { value: "45-60", label: "Minuter per session" },
            { value: "100%", label: "Naturliga produkter" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="text-5xl font-serif font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}