"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
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
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link
          href="/"
          className="flex items-center mb-6"
          onClick={() => setOpen(false)}
        >
          <Image
            src="https://cdn.prod.website-files.com/62e2a0383b26fad64af677b9/62e2a0383b26fa2cf8f677e7_Monkmantra.svg"
            alt="MonkMantra Logo"
            width={120}
            height={32}
            priority
          />
        </Link>
        <div className="flex flex-col space-y-4 pt-6">
          {navItems?.map((item) =>
            item.href ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary py-2 px-3 rounded-md",
                  pathname === item.href
                    ? "text-foreground bg-accent"
                    : "text-foreground/60 hover:bg-accent/50"
                )}
              >
                {item.title}
              </Link>
            ) : null
          )}
          <div className="border-t pt-4 mt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center text-sm font-medium transition-colors hover:text-primary py-2 px-3 rounded-md text-foreground/60 hover:bg-accent/50"
            >
              Contact
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 