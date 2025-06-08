import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, CheckCircle, Users, Award, Heart, Building, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  "Technical SEO audits and fixes",
  "Industry-specific keyword research", 
  "Content strategy and creation",
  "Local SEO for multi-location businesses",
  "E-A-T optimization for healthcare",
  "Link building and digital PR"
];

const industryApproaches = [
  {
    title: "Healthcare SEO",
    description: "YMYL (Your Money or Your Life) optimization with medical expertise demonstration",
    features: ["Local SEO for practices", "Patient education content", "Reputation management integration"],
    icon: Heart,
    color: "from-red-500 to-pink-600"
  },
  {
    title: "Real Estate SEO", 
    description: "Local market optimization with property listing enhancement",
    features: ["Agent personal branding", "Market report content", "Neighborhood-specific targeting"],
    icon: Building,
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Travel SEO",
    description: "Destination content optimization with seasonal keyword targeting",
    features: ["Visual content optimization", "Voice search optimization", "Multi-language SEO"],
    icon: Plane,
    color: "from-green-500 to-teal-600"
  }
];

const caseStudies = [
  {
    client: "Healthcare Practice",
    result: "275% increase in appointment bookings",
    description: "Multi-location medical practice saw dramatic patient acquisition growth"
  },
  {
    client: "Real Estate Agency", 
    result: "First page rankings for 85% of target keywords",
    description: "Local real estate firm dominated search results in competitive market"
  },
  {
    client: "Travel Company",
    result: "450% increase in organic bookings", 
    description: "Tourism business achieved massive growth in direct bookings"
  }
];

const process = [
  { step: "1", title: "Comprehensive SEO audit", description: "Deep analysis of current performance and opportunities" },
  { step: "2", title: "Competitor analysis", description: "Understanding the competitive landscape and gaps" },
  { step: "3", title: "Keyword strategy development", description: "Industry-specific keyword research and targeting" },
  { step: "4", title: "Technical optimization", description: "Fixing technical issues and improving site structure" },
  { step: "5", title: "Content creation and optimization", description: "Creating valuable content that ranks and converts" },
  { step: "6", title: "Link building campaign", description: "Building authority through strategic link acquisition" },
  { step: "7", title: "Ongoing monitoring and optimization", description: "Continuous improvement and performance tracking" }
];

export default function OrganicGrowthPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                SEO & Organic Growth
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dominate Search Results
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent block">
                in Your Industry
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Our SEO strategies are built for healthcare, real estate, and travel businesses that demand results
            </p>
            <div className="bg-green-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-green-300">
                Average 340% increase in organic traffic within 12 months
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-lg">
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SEO services designed to drive sustainable organic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <p className="font-medium">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Approaches */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Approaches</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored SEO strategies for your specific industry requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryApproaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${approach.color} rounded-2xl w-fit`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center">{approach.title}</CardTitle>
                    <CardDescription className="text-center">{approach.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {approach.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our organic growth campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{study.client}</CardTitle>
                  <div className="text-2xl font-bold text-green-600">{study.result}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Your Industry&apos;s Search Results?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a comprehensive SEO audit and custom strategy for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Free SEO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 