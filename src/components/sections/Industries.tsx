"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Home, Plane, CheckCircle, Sparkles, TrendingUp } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const industries = [
  {
    icon: Heart,
    title: "Healthcare Marketing",
    description: "HIPAA-compliant campaigns that build trust and drive patient acquisition",
    features: [
      "Patient acquisition strategies",
      "Medical SEO and reputation management", 
      "Healthcare content marketing",
      "Compliance monitoring"
    ],
    caseStudy: "Increased patient bookings by 275% for multi-location medical practice",
    stats: "98% compliance rate across 250+ campaigns",
    gradient: "from-red-500 via-pink-500 to-rose-500",
    bgGradient: "from-red-50 via-pink-50 to-rose-50",
    iconColor: "text-red-600",
    accentColor: "text-red-800"
  },
  {
    icon: Home,
    title: "Real Estate Marketing",
    description: "Lead generation systems that convert prospects into qualified buyers and sellers",
    features: [
      "Lead generation systems",
      "Property marketing campaigns",
      "Realtor brand building", 
      "Market analysis and targeting"
    ],
    caseStudy: "Generated 1,200+ qualified leads in 6 months for luxury real estate firm",
    stats: "85% of target keywords ranking on page 1",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
    iconColor: "text-blue-600",
    accentColor: "text-blue-800"
  },
  {
    icon: Plane,
    title: "Travel & Tourism Marketing",
    description: "Destination marketing that inspires travelers and drives bookings",
    features: [
      "Destination marketing",
      "Booking optimization",
      "Travel content strategy",
      "Seasonal campaign management"
    ],
    caseStudy: "Boosted hotel bookings by 180% during off-season",
    stats: "150M+ travel content impressions generated",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
    iconColor: "text-emerald-600",
    accentColor: "text-emerald-800"
  }
]

export function Industries() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-400/5 to-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Industry Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Specialized Expertise in
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              High-Growth Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We understand the unique challenges and opportunities in 
            <span className="font-semibold text-purple-600"> healthcare, real estate, and travel</span>. 
            Our industry-specific strategies deliver results that matter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const isHovered = hoveredCard === index;
            
            return (
              <Card 
                key={index} 
                className={`group relative h-full transition-all duration-700 cursor-pointer border-0 overflow-hidden ${
                  isHovered ? 'transform scale-105 shadow-2xl' : 'shadow-xl hover:shadow-2xl'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} p-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="h-full w-full bg-white rounded-2xl"></div>
                </div>
                
                <CardHeader className="relative z-10 text-center pb-6">
                  {/* Animated Icon Container */}
                  <div className="relative mx-auto mb-6">
                    <div className={`p-6 bg-gradient-to-br ${industry.gradient} rounded-3xl w-fit mx-auto transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl`}>
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    {/* Floating Ring Animation */}
                    <div className={`absolute inset-0 border-4 border-gradient-to-r ${industry.gradient} rounded-3xl opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-700`}></div>
                  </div>
                  
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                      Our Approach:
                    </h4>
                    <ul className="space-y-3">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 100}ms` }}>
                          <CheckCircle className={`h-5 w-5 ${industry.accentColor} mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`} />
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Success Story Card */}
                  <div className={`mb-8 p-6 bg-gradient-to-r ${industry.gradient} bg-opacity-5 rounded-2xl border-l-4 border-gradient-to-b ${industry.gradient} group-hover:bg-opacity-10 transition-all duration-300`}>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
                      Success Story:
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {industry.caseStudy}
                    </p>
                    <div className={`inline-flex items-center px-3 py-1 bg-white rounded-full text-xs font-semibold ${industry.accentColor} shadow-sm`}>
                      📊 {industry.stats}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link href="/case-studies">
                    <Button 
                      className={`w-full group-hover:bg-gradient-to-r ${industry.gradient} group-hover:text-white group-hover:border-transparent group-hover:scale-105 transition-all duration-300 font-semibold shadow-lg`}
                      variant="outline"
                    >
                      <span>View Case Studies</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
                
                {/* Decorative Corner Element */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${industry.gradient} opacity-5 rounded-full group-hover:scale-150 group-hover:opacity-10 transition-all duration-700`}></div>
                <div className={`absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr ${industry.gradient} opacity-5 rounded-full group-hover:scale-150 group-hover:opacity-10 transition-all duration-700`}></div>
              </Card>
            )
          })}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-8 p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl border border-gray-100">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Ready to see what we can achieve in your industry?</h3>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Join hundreds of successful businesses who&apos;ve transformed their marketing with our industry-specific strategies.
            </p>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Get Your Industry-Specific Strategy</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center gap-6 mt-4 opacity-60">
              {['Healthcare Leaders', 'Real Estate Pros', 'Travel Giants'].map((text, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 