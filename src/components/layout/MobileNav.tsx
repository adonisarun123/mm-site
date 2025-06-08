"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavItem } from "@/types"

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

interface MobileNavProps {
  items?: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const navItems = items || navigationItems

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-white/10 focus-visible:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="pr-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 border-white/10"
      >
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center group"
            onClick={() => setOpen(false)}
          >
            {/* MonkMantra Logo for Mobile */}
            <div className="relative">
              <Image
                src="/logo.png"
                alt="MonkMantra"
                width={120}
                height={30}
                className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
        </div>
        
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="flex flex-col space-y-3 px-7">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href || "/"}
              onClick={() => setOpen(false)}
              className={`
                relative flex items-center py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg group
                ${pathname === item.href 
                  ? 'text-orange-400 bg-gradient-to-r from-orange-500/20 to-red-500/20' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <span className="relative z-10">{item.title}</span>
              
              {/* Active indicator */}
              {pathname === item.href && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-r-full" />
              )}
              
              {/* Hover glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>
        
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="flex flex-col space-y-3 px-7">
          <Button 
            variant="ghost" 
            asChild 
            className="justify-start text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            <Link href="/contact">Contact</Link>
          </Button>
          
          <Button 
            asChild 
            className="justify-start bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold rounded-full"
            onClick={() => setOpen(false)}
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
} 