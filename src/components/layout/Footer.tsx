import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/utils"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

const footerLinks = {
  services: [
    { title: "Organic Growth & SEO", href: "/services/organic-growth" },
    { title: "Strategic Media Buying", href: "/services/media-buying" },
    { title: "Content Marketing", href: "/services/content-marketing" },
    { title: "Marketing Strategy", href: "/services/marketing-strategy" },
    { title: "Internal Tools", href: "/services/internal-tools" },
    { title: "Web Development", href: "/services/web-development" },
  ],
  industries: [
    { title: "Healthcare Marketing", href: "/industries/healthcare" },
    { title: "Real Estate Marketing", href: "/industries/real-estate" },
    { title: "Travel & Tourism", href: "/industries/travel-tourism" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Blog", href: "/blog" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="https://cdn.prod.website-files.com/62e2a0383b26fad64af677b9/62e2a0383b26fa2cf8f677e7_Monkmantra.svg"
                alt="MonkMantra Logo"
                width={150}
                height={40}
                className="filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Specialized digital marketing agency driving exponential growth for healthcare, 
              real estate, and travel businesses worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@monkmantra.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Remote-First, Worldwide</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-white mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Link 
                href={siteConfig.links.linkedin}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Monk Mantra on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href={siteConfig.links.twitter}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Monk Mantra on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Monk Mantra on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 