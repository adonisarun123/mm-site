"use client"

import * as React from "react"
import Link from "next/link"
import { MainNav } from "@/components/layout/MainNav"
import { MobileNav } from "@/components/layout/MobileNav"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 backdrop-blur-md supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-slate-900/80 supports-[backdrop-filter]:via-blue-900/80 supports-[backdrop-filter]:to-indigo-900/80 border-b border-white/10 shadow-xl">
      <div className="container flex h-20 max-w-screen-2xl items-center px-4">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              asChild 
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button 
              asChild 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold px-6 py-2.5 rounded-full"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 