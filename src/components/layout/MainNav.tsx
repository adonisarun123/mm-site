"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { NavItem } from "@/types"
import { usePathname } from "next/navigation"

const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services", 
    href: "/services",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  const navItems = items || navigationItems

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-3 group">
        {/* Beautiful Text-Based Logo */}
        <div className="relative flex items-center gap-2">
          {/* Decorative Icon */}
          <div className="relative w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Brand Text */}
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-tight bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent group-hover:from-orange-200 group-hover:via-red-200 group-hover:to-yellow-200 transition-all duration-300">
              MonkMantra
            </span>
            <span className="text-xs text-white/70 -mt-1 group-hover:text-orange-200 transition-colors duration-300">
              Digital Marketing
            </span>
          </div>
        </div>
        
        {/* Alternative: Uncomment this section if you have your logo file */}
        {/* 
        <div className="relative">
          <Image
            src="/logo.png" // Replace with your actual logo path
            alt="MonkMantra"
            width={40}
            height={40}
            className="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <span className="hidden font-bold text-xl md:inline-block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300">
          MonkMantra
        </span>
        */}
      </Link>
      {navItems?.length && (
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href || "/"}
              className={`
                relative flex items-center text-base font-medium transition-all duration-300 group
                ${pathname === item.href 
                  ? 'text-orange-400' 
                  : 'text-white/90 hover:text-white'
                }
              `}
            >
              <span className="relative z-10">{item.title}</span>
              
              {/* Animated underline */}
              <span 
                className={`
                  absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300
                  ${pathname === item.href 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                  }
                `}
              />
              
              {/* Hover background glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}
