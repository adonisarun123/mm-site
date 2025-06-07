"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/utils"
import { NavItem } from "@/types"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="https://cdn.prod.website-files.com/62e2a0383b26fad64af677b9/62e2a0383b26fa2cf8f677e7_Monkmantra.svg"
          alt="MonkMantra Logo"
          width={150}
          height={40}
        />
      </Link>
    </div>
  )
}
