"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, ArrowRight, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// TikTok SVG Icon component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

const footerLinks = {
  services: [
    { name: "Klassisk Massage", slug: "klassisk-massage" },
    { name: "Afrikansk Signatur", slug: "afrikansk-signatur" },
    { name: "Kalebas Massage", slug: "kalebas-massage" },
    { name: "Rungu Massage", slug: "rungu-massage" },
    { name: "Aromaterapi", slug: "aromaterapi" },
    { name: "Bamboo Massage", slug: "bamboo-massage" },
    { name: "Fotmassage", slug: "fotmassage" },
    { name: "Graviditet Massage", slug: "graviditet-massage" },
    { name: "Indisk Huvudmassage", slug: "indisk-huvudmassage" },
    { name: "Stressmassage", slug: "stressmassage" },
  ],
  company: [
    { label: "Hem", href: "/" },
    { label: "Om Oss", href: "#about" },
    { label: "Våra Produkter", href: "#products" },
    { label: "Kontakta Oss", href: "#contact" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/afrorootsofsweden/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/afrorootsofsweden/", label: "Facebook" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@afrorootsofsweden", label: "TikTok" },
  { icon: Mail, href: "mailto:afro.Afroroots@gmail.com", label: "E-post" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Sky Blue/Cyan Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-teal-900 to-cyan-950" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Top Section with Logo */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-cyan-400/30 transition-colors duration-500" />
                <Image
                  src="/images/logo.png"
                  alt="Afro Roots of Sweden"
                  width={100}
                  height={100}
                  className="relative h-20 w-20 object-contain drop-shadow-2xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Afro Roots
                </h3>
                <p className="text-cyan-300 text-sm tracking-wider">of Sweden</p>
              </div>
            </Link>
            
            {/* Social Links */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <p className="text-white/60 text-sm">Följ oss på sociala medier</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white/80 hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300 border border-white/10 hover:border-cyan-400"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* About Column */}
            <div className="space-y-6">
              <h4 className="font-serif font-bold text-xl text-white">Om Oss</h4>
              <p className="text-white/70 leading-relaxed">
                Autentiska afrikanska massagebehandlingar och naturliga produkter. 
                Ubuntu-filosofin genomsyrar allt vi gör - vi tror på samhörighet och vårt ömsesidiga beroende av varandra.
              </p>
              
              {/* Ubuntu Quote */}
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-cyan-500/20">
                <p className="text-white/90 italic font-serif">
                  {'"Jag är för att vi är"'}
                </p>
                <p className="text-cyan-400 text-sm mt-2 font-medium">— Ubuntu Filosofin</p>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-serif font-bold text-xl text-white mb-6">Våra Behandlingar</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/tjanster/${service.slug}`}
                      className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full group-hover:bg-cyan-400 transition-colors" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links & Contact Column */}
            <div className="space-y-8">
              <div>
                <h4 className="font-serif font-bold text-xl text-white mb-6">Snabblänkar</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 text-cyan-500/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center gap-2 group font-medium"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-all" />
                      Boka Tid Online
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h4 className="font-serif font-bold text-xl text-white mb-4">Kontakt</h4>
                <div className="space-y-3">
                  <a 
                    href="https://maps.google.com/?q=Bromsgatan+4A,+653+41+Karlstad" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/60 hover:text-cyan-400 transition-colors text-sm group"
                  >
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-cyan-500" />
                    <span>Bromsgatan 4A, 653 41 Karlstad</span>
                  </a>
                  <a href="tel:+46739752503" className="flex items-center gap-3 text-white/60 hover:text-cyan-400 transition-colors text-sm">
                    <Phone className="h-4 w-4 text-cyan-500" />
                    <span>+46 739 752 503</span>
                  </a>
                  <a href="mailto:afro.Afroroots@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-cyan-400 transition-colors text-sm">
                    <Mail className="h-4 w-4 text-cyan-500" />
                    <span>afro.Afroroots@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Column */}
            <div className="space-y-6">
              <h4 className="font-serif font-bold text-xl text-white">Boka Din Tid</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Ge dig själv en stund av avkoppling och välmående med våra autentiska afrikanska behandlingar.
              </p>
              
              <Button
                asChild
                size="lg"
                className="w-full rounded-xl shadow-lg shadow-btn-bg/30"
              >
                <a href="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964" target="_blank" rel="noopener noreferrer">
                  Boka Online
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              {/* Opening Hours */}
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-cyan-500/20">
                <div className="flex items-center gap-2 text-cyan-400 mb-3">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium text-sm">Öppettider</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between text-white/70">
                    <span>Måndag - Fredag</span>
                    <span className="text-white">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Lördag</span>
                    <span className="text-white">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Söndag</span>
                    <span className="text-cyan-400">Stängt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Afro Roots of Sweden AB. Alla rättigheter förbehållna.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Integritetspolicy
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Villkor
              </Link>
              <a 
                href="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-medium hover:text-cyan-300 flex items-center gap-1"
              >
                Boka nu
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
