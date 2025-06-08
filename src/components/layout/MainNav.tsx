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
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="https://cdn.prod.website-files.com/62e2a0383b26fad64af677b9/62e2a0383b26fa2cf8f677e7_Monkmantra.svg"
          alt="MonkMantra Logo"
          width={150}
          height={40}
          priority
        />
      </Link>
      {navItems?.length ? (
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href || "/"}
              className={`flex items-center text-sm font-medium transition-colors hover:text-primary relative group ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
