import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, CheckCircle, Smartphone, Zap, Users, Palette, Shield, Heart, Building, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const websiteFeatures = [
  "AI-powered chatbots and customer support",
  "Mobile-first responsive design", 
  "Conversion rate optimization (CRO)",
  "Advanced SEO and site speed optimization",
  "Smart personalization and user experience",
  "Secure hosting and SSL implementation"
];

const industryWebsites = [
  {
    title: "Healthcare Websites",
    description: "HIPAA-compliant medical websites that build trust and drive patient appointments",
    features: ["Patient portals", "Appointment booking", "Telehealth integration", "Medical SEO"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    result: "275% increase in online appointments"
  },
  {
    title: "Real Estate Websites", 
    description: "Property showcase websites with advanced search and lead capture systems",
    features: ["Property listings", "Virtual tours", "MLS integration", "Lead capture forms"],
    icon: Building,
    color: "from-blue-500 to-purple-600",
    result: "180% more qualified property inquiries"
  },
  {
    title: "Travel Websites",
    description: "Booking-focused travel websites with stunning visuals and seamless UX",
    features: ["Booking systems", "Payment processing", "Trip planning tools", "Review integration"],
    icon: Plane,
    color: "from-green-500 to-teal-600",
    result: "190% increase in direct bookings"
  }
];

const websiteTypes = [
  {
    title: "Business Websites",
    description: "Professional corporate websites that establish credibility and generate leads",
    features: ["Professional design", "Lead generation", "Company portfolios", "Contact systems"],
    result: "150% more business inquiries"
  },
  {
    title: "E-commerce Platforms",
    description: "High-converting online stores with seamless shopping experiences",
    features: ["Shopping carts", "Payment gateways", "Inventory management", "Customer accounts"],
    result: "200% increase in online sales"
  },
  {
    title: "Landing Pages",
    description: "Conversion-optimized pages designed for specific campaigns and offers",
    features: ["A/B testing", "Form optimization", "Campaign tracking", "Mobile optimization"],
    result: "340% improvement in conversion rates"
  },
  {
    title: "Web Applications",
    description: "Custom web apps and portals for business operations and customer service",
    features: ["User dashboards", "Data management", "Workflow automation", "API integration"],
    result: "60% increase in operational efficiency"
  }
];

const developmentProcess = [
  {
    phase: "Strategy & Planning",
    description: "Define goals, target audience, and website architecture",
    activities: ["Goal setting", "User research", "Competitor analysis", "Site mapping"],
    duration: "1-2 weeks"
  },
  {
    phase: "Design & Prototyping", 
    description: "Create visual designs and interactive prototypes",
    activities: ["Wireframing", "Visual design", "Prototyping", "Design review"],
    duration: "2-3 weeks"
  },
  {
    phase: "Development & Testing",
    description: "Build responsive website with rigorous testing across devices",
    activities: ["Front-end development", "Back-end integration", "Testing", "Optimization"],
    duration: "3-6 weeks"
  },
  {
    phase: "Launch & Optimization",
    description: "Deploy website and continuously optimize for better performance",
    activities: ["Site deployment", "Performance monitoring", "SEO optimization", "Ongoing updates"],
    duration: "1 week + ongoing"
  }
];

const caseStudies = [
  {
    client: "Regional Medical Center",
    challenge: "Outdated website with poor mobile experience causing lost patients",
    solution: "Modern, HIPAA-compliant website with online booking and patient portal",
    result: "275% increase in online appointment bookings, 60% mobile traffic improvement"
  },
  {
    client: "Luxury Real Estate Agency",
    challenge: "Generic website template not showcasing premium properties effectively",
    solution: "Custom property showcase website with virtual tours and advanced search",
    result: "180% more qualified inquiries, 45% increase in property showings"
  },
  {
    client: "Adventure Tourism Company",
    challenge: "High bounce rate and low booking conversions on existing website",
    solution: "Immersive travel website with seamless booking flow and experience galleries",
    result: "190% increase in direct bookings, 50% reduction in bounce rate"
  }
];

const technologies = [
  { name: "Next.js/React", description: "Modern web frameworks" },
  { name: "TypeScript", description: "Type-safe development" },
  { name: "Tailwind CSS", description: "Responsive styling" },
  { name: "WordPress/CMS", description: "Content management" },
  { name: "E-commerce Platforms", description: "Shopify, WooCommerce" },
  { name: "AI Integration", description: "Chatbots, personalization" }
];

export default function WebsitesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/30">
                World-Class Websites
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              High-Converting Websites
              <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent block">
                Built for Results
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Custom websites with AI chatbots, smart personalization, and conversion optimization
            </p>
            <div className="bg-rose-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-rose-300">
                Average 190% increase in conversions with our website designs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg">
                Get Website Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive website solutions designed to convert visitors into customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-rose-500 flex-shrink-0" />
                    <p className="font-medium">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Types</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom solutions for every business need and industry requirement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {websiteTypes.map((type, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-rose-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-rose-700">{type.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Websites */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Websites</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized website solutions for healthcare, real estate, and travel industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryWebsites.map((website, index) => {
              const Icon = website.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${website.color} rounded-2xl w-fit`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center">{website.title}</CardTitle>
                    <CardDescription className="text-center">{website.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {website.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-rose-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-rose-700">{website.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology for creating high-performing websites
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {developmentProcess.map((phase, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <div className="text-sm text-rose-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm">
                          <Globe className="w-4 h-4 text-rose-500 mr-3 flex-shrink-0" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern web technologies for fast, secure, and scalable websites
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our high-converting website designs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{study.client}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Result:</h4>
                    <p className="text-sm font-medium text-green-700">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your High-Converting Website?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a custom website that drives results and grows your business
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Website Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 