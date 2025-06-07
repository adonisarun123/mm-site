import React from 'react';
import type { Metadata } from 'next'
import { Inter, Inter_Tight, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight'
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'MonkMantra - Digital Marketing Excellence for Healthcare, Real Estate & Travel',
  description: 'Specialized digital marketing agency driving exponential growth for healthcare, real estate, and travel businesses with proprietary frameworks. 98% client retention rate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 