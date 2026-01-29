import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CreditCard, ArrowLeft, Check, Phone } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const massageServices = {
  "afrikansk-signatur": {
    name: "Afrikansk Signatur",
    duration: "60 min",
    price: "600 kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702332898/head_dy3b6d.jpg",
    description: "Djupgående aromatisk massage med ångade örter för ökad cirkulation och lindring av muskelspänningar. Perfekt för vintermånaderna.",
    longDescription: "Vår Afrikanska Signaturmassage är en unik behandling som kombinerar traditionella afrikanska massagetekniker med aromatiska ångade örter. Denna djupgående massage är speciellt utformad för att öka blodcirkulationen, lindra muskelspänningar och ge en total avslappning för både kropp och sinne.",
    benefits: [
      "Ökad blodcirkulation",
      "Lindring av muskelspänningar",
      "Djup avslappning",
      "Aromatisk upplevelse",
      "Förbättrad rörlighet",
      "Stressreducering"
    ],
    warning: "Viktigt meddelande: Rådgör alltid med din läkare innan du genomgår en Herbal Compress Massage.",
  },
  "aromaterapi": {
    name: "Aromaterapi",
    duration: "60 min",
    price: "600 kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/show1_l37ttp.jpg",
    description: "Avkopplande massage med aromatiska eteriska oljor som stimulerar sinnet och kroppen. Lindrar stress och ångest.",
    longDescription: "Aromaterapi är en holistisk behandling som använder naturliga eteriska oljor utvunna från blommor, bark, stjälkar, löv och rötter. Dessa oljor appliceras genom massage för att förbättra fysiskt och emotionellt välbefinnande. Behandlingen är perfekt för dig som söker djup avslappning och mental klarhet.",
    benefits: [
      "Stressreducering",
      "Förbättrat humör",
      "Lindring av ångest",
      "Bättre sömn",
      "Ökad energi",
      "Mental klarhet"
    ],
    warning: "",
  },
  "bamboo-massage": {
    name: "Bamboo Massage",
    duration: "60 min",
    price: "650 kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/sh3_tmi4tu.jpg",
    description: "Unik massage med uppvärmda bamburör som rullas och pressas mot musklerna för djup avslappning.",
    longDescription: "Bamboo Massage är en innovativ behandling där uppvärmda bamburör av olika storlekar används för att massera kroppen. Bamburören rullas och pressas mot musklerna vilket ger en djupgående massage som effektivt löser upp spänningar och stimulerar blodcirkulationen.",
    benefits: [
      "Djup muskelavslappning",
      "Förbättrad blodcirkulation",
      "Lymfdränage",
      "Minskad celluliter",
      "Ökad rörlighet",
      "Avstressande"
    ],
    warning: "",
  },
  "fotmassage": {
    name: "Fotmassage",
    duration: "45 min",
    price: "450 kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh2_s0tfxt.jpg",
    description: "Reflexologibehandling som fokuserar på tryckpunkter i fötterna för att stimulera kroppens naturliga läkningsprocesser.",
    longDescription: "Fotmassage baserad på reflexologi är en terapeutisk behandling som fokuserar på specifika tryckpunkter i fötterna. Dessa punkter är kopplade till olika organ och system i kroppen. Genom att stimulera dessa punkter kan vi främja kroppens naturliga läkningsprocesser och återställa balans.",
    benefits: [
      "Stimulerar naturlig läkning",
      "Förbättrad cirkulation",
      "Stressreducering",
      "Bättre sömn",
      "Lindring av huvudvärk",
      "Ökad energi"
    ],
    warning: "",
  },
  "graviditet-massage": {
    name: "Graviditet Massage",
    duration: "60 min",
    price: "650 kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504033/sh5_gya7ov.jpg",
    description: "Skonsam och trygg massage speciellt anpassad för gravida kvinnor. Lindrar ryggsmärta och svullna ben.",
    longDescription: "Vår Graviditetsmassage är speciellt utformad för att möta de unika behoven hos gravida kvinnor. Behandlingen är skonsam men effektiv och fokuserar på att lindra vanliga besvär som ryggsmärta, svullna ben och allmän trötthet. Vi använder säkra tekniker och positioner för maximal komfort.",
    benefits: [
      "Lindring av ryggsmärta",
      "Minskad svullnad",
      "Bättre sömn",
      "Stressreducering",
      "Ökad rörlighet",
      "Emotionellt välbefinnande"
    ],
    warning: "Rekommenderas efter första trimestern. Rådgör med din barnmorska eller läkare.",
  },
  "indisk-huvudmassage": {
    name: "Indisk Huvudmassage",
    duration: "45 min",
    price: "500 kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702505240/m1_gs8swb.jpg",
    description: "Traditionell indisk massage som fokuserar på huvud, nacke och axlar. Lindrar huvudvärk och spänningar.",
    longDescription: "Indisk Huvudmassage, även känd som Champi, är en traditionell behandling som har praktiserats i Indien i över tusen år. Behandlingen fokuserar på huvud, nacke, axlar och ansikte för att lindra spänningar, huvudvärk och främja avslappning och mental klarhet.",
    benefits: [
      "Lindring av huvudvärk",
      "Minskad nackspänning",
      "Förbättrad hårtillväxt",
      "Mental klarhet",
      "Bättre sömn",
      "Stressreducering"
    ],
    warning: "",
  },
  "kalebas-massage": {
    name: "Kalebas Massage",
    duration: "60 min",
    price: "650 kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1704056190/ook_wqz5hy.jpg",
    description: "Behandling med 100% torkade pumpafrukter för att frigöra toxiner, lindra spänningar och förbättra blodcirkulation.",
    longDescription: "Kalebas Massage är en unik afrikansk behandling som använder 100% naturliga torkade pumpafrukter (kalebassar) som massageverktyg. Dessa traditionella verktyg har använts i Afrika i generationer för att frigöra toxiner, lindra muskelspänningar och förbättra blodcirkulationen.",
    benefits: [
      "Detox-effekt",
      "Förbättrad blodcirkulation",
      "Lindring av spänningar",
      "Naturliga verktyg",
      "Traditionell teknik",
      "Djup avslappning"
    ],
    warning: "",
  },
  "klassisk-massage": {
    name: "Klassisk Massage",
    duration: "60 min",
    price: "600 kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707685871/stressmassage_qyh0vo.jpg",
    description: "Effektiv behandling för att frigöra muskelspänningar och förbättra blodcirkulationen.",
    longDescription: "Klassisk Massage är en beprövad behandling som effektivt frigör muskelspänningar och förbättrar blodcirkulationen. Perfekt för dig som spenderar långa timmar vid skrivbordet eller bakom ratten. Behandlingen anpassas efter dina individuella behov och önskemål.",
    benefits: [
      "Muskelavslappning",
      "Förbättrad cirkulation",
      "Stressreducering",
      "Ökad rörlighet",
      "Smärtlindring",
      "Bättre sömn"
    ],
    warning: "",
  },
  "rungu-massage": {
    name: "Rungu Massage",
    duration: "60 min",
    price: "600 kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1707686166/rungu_gxhgpe.png",
    description: "Stimulerande Afrikansk massage med Maasai Rungu. Lindrar permanent spända muskler och förbättrar blodcirkulation.",
    longDescription: "Rungu Massage är en autentisk afrikansk behandling som använder den traditionella Maasai Rungu - ett träverktyg som historiskt använts av Maasai-folket. Denna stimulerande massage är speciellt effektiv för att lindra kroniskt spända muskler, förbättra blodcirkulationen och minska celluliter.",
    benefits: [
      "Lindrar kroniska spänningar",
      "Förbättrad blodcirkulation",
      "Minskar celluliter",
      "Maasai-tradition",
      "Muskelstimulering",
      "Djup behandling"
    ],
    warning: "",
  },
  "stressmassage": {
    name: "Stressmassage",
    duration: "60 min",
    price: "600 kr",
    image: "https://res.cloudinary.com/ddeif6hmk/image/upload/v1702504032/sh1_xqkfcz.jpg",
    description: "Specialiserad massage för att motverka stress och spänningar. Fokuserar på nacke, axlar och rygg.",
    longDescription: "Stressmassage är en specialiserad behandling utformad för att motverka de fysiska effekterna av stress. Behandlingen fokuserar på de områden som oftast drabbas av stressrelaterade problem - nacke, axlar och rygg. Perfekt för dig som lever ett aktivt liv och behöver regelbunden avslappning.",
    benefits: [
      "Stressreducering",
      "Spänningslindring",
      "Djup avslappning",
      "Förbättrad sömn",
      "Ökad energi",
      "Mental klarhet"
    ],
    warning: "",
  },
}

const otherServices = Object.entries(massageServices).slice(0, 4)

export async function generateStaticParams() {
  return Object.keys(massageServices).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = massageServices[slug as keyof typeof massageServices]
  
  if (!service) {
    return { title: "Tjänst hittades inte" }
  }
  
  return {
    title: `${service.name} | Afro Roots of Sweden`,
    description: service.description,
  }
}

export default async function MassageServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = massageServices[slug as keyof typeof massageServices]
  
  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link 
            href="/#treatments" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Tillbaka till alla tjänster
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                  {service.name}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Price & Duration */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-secondary px-5 py-3 rounded-xl">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{service.duration}</span>
                </div>
                <div className="flex items-center gap-3 bg-primary/10 px-5 py-3 rounded-xl">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span className="font-bold text-primary text-lg">{service.price}</span>
                </div>
              </div>
              
              {/* Warning if exists */}
              {service.warning && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-amber-800 text-sm">{service.warning}</p>
                </div>
              )}
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  asChild 
                  size="lg"
                  className="shadow-lg shadow-btn-bg/25"
                >
                  <a href="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964" target="_blank" rel="noopener noreferrer">
                    Boka Denna Behandling
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  <a href="tel:+46739752503">
                    <Phone className="mr-2 h-5 w-5" />
                    Ring Oss
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Details Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Long Description */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Om Behandlingen
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.longDescription}
              </p>
            </div>
            
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Fördelar
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit) => (
                  <div 
                    key={benefit}
                    className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
            Andra Behandlingar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(massageServices)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, item]) => (
                <Link
                  key={key}
                  href={`/tjanster/${key}`}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2 text-sm">
                      <span className="text-muted-foreground">{item.duration}</span>
                      <span className="font-bold text-primary">{item.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Redo att boka din behandling?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Boka enkelt online via Bokadirekt eller ring oss för personlig service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-card text-primary hover:bg-card/90"
            >
              <a href="https://www.bokadirekt.se/places/afro-roots-of-sweden-55964" target="_blank" rel="noopener noreferrer">
                Boka Online Nu
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="tel:+46739752503">
                <Phone className="mr-2 h-5 w-5" />
                +46 739 752 503
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
