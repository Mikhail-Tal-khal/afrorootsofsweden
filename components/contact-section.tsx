"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight, Star } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+46 739 752 503",
    href: "tel:+46739752503"
  },
  {
    icon: Mail,
    label: "E-post",
    value: "afro.Afroroots@gmail.com",
    href: "mailto:afro.Afroroots@gmail.com"
  },
  {
    icon: MapPin,
    label: "Adress",
    value: "Bromsgatan 4A, 653 41 Karlstad",
    href: "https://maps.google.com/?q=Bromsgatan+4A,+653+41+Karlstad"
  },
  {
    icon: Clock,
    label: "Öppettider",
    value: "Man-Fre: 10:00-19:00",
    href: "#"
  },
]

const services = [
  { name: "Afrikansk Signatur", duration: "60 min", price: "600 kr" },
  { name: "Aromaterapi", duration: "60 min", price: "600 kr" },
  { name: "Bamboo Massage", duration: "60 min", price: "650 kr" },
  { name: "Fotmassage", duration: "45 min", price: "450 kr" },
  { name: "Graviditet Massage", duration: "60 min", price: "650 kr" },
  { name: "Indisk Huvudmassage", duration: "45 min", price: "500 kr" },
  { name: "Kalebas Massage", duration: "60 min", price: "650 kr" },
  { name: "Klassisk Massage", duration: "60 min", price: "600 kr" },
  { name: "Rungu Massage", duration: "60 min", price: "600 kr" },
  { name: "Stressmassage", duration: "60 min", price: "600 kr" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Contact Info */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-widest">
                <div className="w-8 h-px bg-primary" />
                Kontakt
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1]">
                Redo att uppleva{" "}
                <span className="text-primary">våra tjänster?</span>
              </h2>
              <p className="text-xl text-background/70 leading-relaxed">
                Boka din behandling enkelt online via Bokadirekt eller kontakta oss direkt.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-start gap-4 p-6 bg-background/5 rounded-2xl hover:bg-background/10 transition-all duration-300 border border-background/10 hover:border-primary/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-background/50 mb-1">{item.label}</p>
                    <p className="font-semibold text-background">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Ubuntu Card */}
            <div className="p-8 bg-primary/10 rounded-3xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🌍</span>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">Ubuntu</p>
                  <p className="text-background/80 mt-2 leading-relaxed">
                    {'"Jag är för att vi är"'} — Vår filosofi som förenar oss i healing och välmående.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Booking Card */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] blur-xl" />
            
            <div className="relative bg-card text-card-foreground p-8 md:p-10 rounded-3xl shadow-2xl">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-foreground">Boka Din Behandling</h3>
                <p className="text-muted-foreground mt-3">
                  Välj en tid som passar dig via Bokadirekt.
                </p>
                
                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">5.0 på Bokadirekt</span>
                </div>
              </div>

              {/* Services List */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                  Våra behandlingar ({services.length} st)
                </p>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2 scrollbar-thin">
                  {services.map((service) => (
                    <div 
                      key={service.name} 
                      className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                    >
                      <div>
                        <p className="font-medium text-foreground">{service.name}</p>
                        <p className="text-xs text-muted-foreground">{service.duration}</p>
                      </div>
                      <p className="font-bold text-primary">{service.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                asChild 
                size="lg"
                className="w-full h-16 text-lg rounded-2xl shadow-xl shadow-btn-bg/25 hover:shadow-2xl hover:shadow-btn-bg/30 transition-all duration-300"
              >
                <a href="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964" target="_blank" rel="noopener noreferrer">
                  Boka på Bokadirekt
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Eller ring oss på{" "}
                <a href="tel:+46739752503" className="text-primary font-semibold hover:underline">
                  +46 739 752 503
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
