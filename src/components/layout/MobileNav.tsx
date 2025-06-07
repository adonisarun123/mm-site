"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { siteConfig } from "@/lib/utils"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavItem } from "@/types"

interface MobileNavProps {
  items?: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link
          href="/"
          className="flex items-center"
        >
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <div className="flex flex-col space-y-3 pt-6">
          {items?.map(
            (item) =>
              item.href && (
                <Link
                  key={item.href}
                  href={item.href}
                >
                  {item.title}
                </Link>
              )
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
} 