"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Target, FileText, TrendingUp, Code, Globe, Sparkles, Bot, Zap, Database } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const services = [
  {
    icon: Bot,
    title: "AI Marketing Systems",
    description: "Leverage artificial intelligence to optimize campaigns and predict customer behavior",
    features: ["AI campaign optimization", "Predictive analytics", "Smart audience targeting"],
    result: "312% improvement in campaign performance",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    iconColor: "text-violet-600",
    resultColor: "text-violet-700",
    href: "/services/ai-marketing"
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Automate your entire marketing funnel for 24/7 lead generation and nurturing",
    features: ["Email automation", "Lead scoring", "Workflow optimization"],
    result: "85% reduction in manual marketing tasks",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
    resultColor: "text-cyan-700",
    href: "/services/marketing-automation"
  },
  {
    icon: Search,
    title: "Organic Growth & SEO",
    description: "AI-powered SEO strategies that dominate search results and build sustainable traffic",
    features: ["Healthcare SEO", "Local SEO", "AI content optimization"],
    result: "Average 340% organic traffic increase",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    iconColor: "text-blue-600",
    resultColor: "text-blue-700",
    href: "/services/organic-growth"
  },
  {
    icon: Target,
    title: "Strategic Media Buying",
    description: "AI-optimized ad campaigns with automated bidding and smart audience targeting",
    features: ["Google Ads automation", "Facebook AI targeting", "Programmatic advertising"],
    result: "Average 4.2x ROAS across campaigns",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
    resultColor: "text-purple-700",
    href: "/services/media-buying"
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "AI-assisted content creation and automated distribution for maximum engagement",
    features: ["AI content generation", "Automated publishing", "Performance optimization"],
    result: "2.5x increase in qualified leads",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
    resultColor: "text-emerald-700",
    href: "/services/content-marketing"
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description: "Data-driven strategies powered by AI insights and predictive analytics",
    features: ["AI market analysis", "Automated reporting", "Growth forecasting"],
    result: "85% faster time to market",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    iconColor: "text-orange-600",
    resultColor: "text-orange-700",
    href: "/services/marketing-strategy"
  },
  {
    icon: Code,
    title: "Internal Tools Development",
    description: "AI-powered custom solutions to automate and scale operations",
    features: ["AI-powered CRM", "Smart dashboards", "Automation workflows"],
    result: "60% reduction in manual tasks",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
    iconColor: "text-indigo-600",
    resultColor: "text-indigo-700",
    href: "/services/internal-tools"
  },
  {
    icon: Globe,
    title: "World-Class Websites",
    description: "High-converting websites with AI chatbots and automated user experiences",
    features: ["AI chatbots", "Smart personalization", "Conversion optimization"],
    result: "Average 190% increase in conversions",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    iconColor: "text-rose-600",
    resultColor: "text-rose-700",
    href: "/services/websites"
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    description: "Transform data into actionable insights and intelligence",
    features: ["Custom Dashboards", "Predictive Analytics", "ROI Attribution"],
    result: "95% improvement in decision-making speed",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
    resultColor: "text-emerald-700",
    href: "/services/data-analytics"
  }
]

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            AI-Powered Marketing Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Built for Automation & Growth
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-driven marketing automation suite delivers measurable results for 
            <span className="font-semibold text-blue-600"> healthcare, real estate, and travel</span> businesses through intelligent automation and predictive analytics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredCard === index;
            
            return (
              <Card 
                key={index} 
                className={`group relative h-full transition-all duration-500 cursor-pointer border-0 overflow-hidden ${
                  isHovered ? 'transform scale-105 shadow-2xl' : 'shadow-lg hover:shadow-xl'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} p-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="h-full w-full bg-white rounded-lg"></div>
                </div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mr-4 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className={`text-xs px-3 py-1 bg-white/80 hover:bg-white transition-colors duration-300 ${service.iconColor} border-0 shadow-sm`}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className={`p-4 bg-gradient-to-r ${service.gradient} bg-opacity-10 rounded-xl border-l-4 border-gradient-to-b ${service.gradient}`}>
                      <p className={`text-sm font-bold ${service.resultColor}`}>
                        🎯 {service.result}
                      </p>
                    </div>
                  </div>
                  
                  <Link href={service.href} aria-label={`Learn more about ${service.title}`}>
                    <Button 
                      variant="outline" 
                      className={`w-full group-hover:bg-gradient-to-r ${service.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-300 font-medium`}
                    >
                      <span>Learn More about {service.title}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
                
                {/* Animated Corner Decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 transform translate-x-10 -translate-y-10 rotate-45 group-hover:scale-150 transition-transform duration-700`}></div>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-lg text-gray-600 max-w-2xl">
              Ready to accelerate your growth with our proven strategies?
            </p>
            <Link href="/services">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>View All Services</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 