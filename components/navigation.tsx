"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Afrikansk Signatur", slug: "afrikansk-signatur" },
  { name: "Aromaterapi", slug: "aromaterapi" },
  { name: "Bamboo Massage", slug: "bamboo-massage" },
  { name: "Fotmassage", slug: "fotmassage" },
  { name: "Graviditet Massage", slug: "graviditet-massage" },
  { name: "Indisk Huvudmassage", slug: "indisk-huvudmassage" },
  { name: "Kalebas Massage", slug: "kalebas-massage" },
  { name: "Klassisk Massage", slug: "klassisk-massage" },
  { name: "Rungu Massage", slug: "rungu-massage" },
  { name: "Stressmassage", slug: "stressmassage" },
]

const navLinks = [
  { href: "#products", label: "Våra Butiker" },
  { href: "#about", label: "Om Oss" },
  { href: "#contact", label: "Kontakta Oss" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-card/98 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Afro Roots of Sweden"
              width={70}
              height={70}
              className={`transition-all duration-500 ${scrolled ? 'h-12 w-auto' : 'h-14 w-auto'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="#products"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Våra Butiker
            </Link>
            
            <Link
              href="#about"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Om Oss
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
                Tjänster
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
              }`}>
                <div className="relative bg-primary rounded-xl shadow-2xl shadow-primary/30 py-3 w-60 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rotate-45" />
                  {services.map((service, i) => (
                    <Link
                      key={service.slug}
                      href={`/tjanster/${service.slug}`}
                      className="block px-5 py-2.5 text-sm text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Kontakta Oss
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+46739752503"
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+46 739 752 503</span>
            </a>
            <Button 
              asChild 
              className="px-6 shadow-lg shadow-btn-bg/25 transition-all duration-300 hover:shadow-xl hover:shadow-btn-bg/30"
            >
              <a href="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964" target="_blank" rel="noopener noreferrer">
                Boka Tid
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-[700px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 space-y-1 border-t border-border/50">
            <Link
              href="#products"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Våra Butiker
            </Link>
            
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Om Oss
            </Link>
            
            {/* Mobile Services */}
            <div className="border-b border-border/30 pb-2">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground"
              >
                Tjänster
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-[500px] pb-3' : 'max-h-0'}`}>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/tjanster/${service.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Kontakta Oss
            </Link>
            
            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:+46739752503" className="flex items-center gap-3 text-foreground py-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-medium">+46 739 752 503</span>
              </a>
              <Button asChild className="w-full">
                <a href="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964" target="_blank" rel="noopener noreferrer">
                  Boka Tid
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
