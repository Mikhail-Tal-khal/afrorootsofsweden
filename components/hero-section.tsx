"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1704056190/ook_wqz5hy.jpg",
    title: "Kärnan av vår",
    titleAccent: "Existens",
    subtitle: "Ubuntu - Jag är för att vi är",
    description: "Vår filosofi bygger på samhörighet och vårt ömsesidiga beroende av varandra",
  },
  {
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702505240/m1_gs8swb.jpg",
    title: "Massage &",
    titleAccent: "Hudvård",
    subtitle: "Afrikansk Wellness",
    description: "Upplev autentisk afrikansk massage med naturliga produkter",
  },
  {
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702505240/sh2_th7a7o.webp",
    title: "Harmoni med",
    titleAccent: "Naturen",
    subtitle: "Stund av Frid",
    description: "Låt kropp och själ finna balans genom våra behandlingar",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative min-h-[75vh] max-h-[850px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-6 py-28 md:py-32 flex items-center">
        <div className="max-w-2xl">
          {/* Label */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {slides[current].subtitle}
          </span>

          {/* Title */}
          <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
            <span className="block">{slides[current].title}</span>
            <span className="block text-primary">{slides[current].titleAccent}</span>
          </h1>

          {/* Description */}
          <p className="mt-7 text-base sm:text-lg text-white/90 max-w-lg leading-relaxed drop-shadow-md">
            {slides[current].description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex gap-4">
            <Button asChild size="lg" className="rounded-full px-7 py-5">
              <a
                href="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964"
                target="_blank"
                rel="noopener noreferrer"
              >
                Boka Behandling
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="rounded-full px-7 py-5 bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 transition-all"
            >
              <a href="#about">Upptäck Mer</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-9 left-0 right-0">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1 rounded-full transition-all ${
                  index === current ? "w-10 bg-emerald-500" : "w-5 bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* GREEN ARROWS */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-emerald-500/60 text-emerald-500 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
            >
              <ChevronLeft className="h-5 w-5 mx-auto" />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-emerald-500/60 text-emerald-500 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
            >
              <ChevronRight className="h-5 w-5 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}