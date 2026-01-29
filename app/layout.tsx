import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Afro Roots of Sweden | Moment of Peace - African Wellness & Massage',
  description:
    'Upplev autentiska afrikanska massagebehandlingar och naturliga wellness-produkter. Upptäck Ubuntu-filosofin genom våra helande tjänster i Sverige.',
  keywords: [
    'massage',
    'afrikansk massage',
    'wellness',
    'spa',
    'stockholm',
    'ubuntu',
    'naturliga produkter',
    'avslappning',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" suppressHydrationWarning translate="no">
      <body
        className={`${dmSans.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}