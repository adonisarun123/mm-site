import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const siteConfig = {
  name: "MonkMantra",
  description:
    "Specialized digital marketing agency driving exponential growth for healthcare, real estate, and travel businesses with proprietary frameworks.",
  url: "https://monkmantra.com",
  ogImage: "https://monkmantra.com/og.jpg",
  links: {
    twitter: "https://twitter.com/monkmantra",
    linkedin: "https://linkedin.com/company/monkmantra",
  },
} 