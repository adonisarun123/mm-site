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
      <Link href="/" className="flex items-center space-x-2 group">
        <div className="relative">
          <Image
            src="https://ik.imagekit.io/6oa6qejxe/MonkMantra-Logo.png"
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
