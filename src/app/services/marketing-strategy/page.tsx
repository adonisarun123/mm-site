import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, CheckCircle, Target, Users, BarChart3, Heart, Building, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const strategyServices = [
  "AI-powered market analysis and insights",
  "Competitor intelligence and positioning", 
  "Customer journey mapping and optimization",
  "Growth framework development",
  "Performance tracking and KPI setup",
  "Strategic roadmap and execution planning"
];

const industryStrategies = [
  {
    title: "Healthcare Marketing Strategy",
    description: "Compliant, patient-focused strategies that build trust and drive appointments",
    features: ["Patient acquisition funnels", "Reputation management strategy", "HIPAA-compliant campaigns"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    result: "275% increase in patient bookings"
  },
  {
    title: "Real Estate Marketing Strategy", 
    description: "Market-specific strategies for agents, brokers, and property developers",
    features: ["Local market domination", "Lead generation systems", "Listing optimization strategies"],
    icon: Building,
    color: "from-blue-500 to-purple-600",
    result: "150% more qualified property leads"
  },
  {
    title: "Travel Marketing Strategy",
    description: "Seasonal optimization and destination marketing strategies",
    features: ["Peak season planning", "Experience marketing", "Booking funnel optimization"],
    icon: Plane,
    color: "from-green-500 to-teal-600",
    result: "300% increase in direct bookings"
  }
];

const strategyFramework = [
  {
    phase: "Discovery & Analysis",
    description: "Deep dive into your market, competitors, and current performance",
    activities: ["Market research", "Competitor analysis", "Current state audit", "SWOT analysis"],
    duration: "2-3 weeks"
  },
  {
    phase: "Strategy Development", 
    description: "Create custom growth framework tailored to your industry and goals",
    activities: ["Goal setting", "Customer persona development", "Channel strategy", "Content planning"],
    duration: "1-2 weeks"
  },
  {
    phase: "Implementation Planning",
    description: "Detailed roadmap with timelines, resources, and success metrics",
    activities: ["Campaign planning", "Resource allocation", "Timeline development", "KPI setup"],
    duration: "1 week"
  },
  {
    phase: "Execution & Optimization",
    description: "Launch campaigns and continuously optimize based on performance data",
    activities: ["Campaign launch", "Performance monitoring", "A/B testing", "Strategy refinement"],
    duration: "Ongoing"
  }
];

const caseStudies = [
  {
    client: "Multi-Location Healthcare Practice",
    challenge: "Struggling to attract patients across 5 locations with inconsistent marketing",
    solution: "Developed location-specific strategies with centralized brand management",
    result: "275% increase in appointment bookings within 6 months"
  },
  {
    client: "Luxury Real Estate Agency",
    challenge: "High-end properties sitting on market too long, limited qualified leads",
    solution: "Premium positioning strategy with targeted affluent audience campaigns",
    result: "Reduced average days on market by 40%, 3x more qualified buyers"
  },
  {
    client: "Adventure Travel Company",
    challenge: "Seasonal business with 80% revenue in 4 months, needed year-round strategy",
    solution: "Developed off-season marketing strategy and experience diversification",
    result: "35% revenue increase in traditionally slow months"
  }
];

export default function MarketingStrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                Marketing Strategy
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Marketing
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent block">
                Strategy & Growth Planning
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Data-driven strategies and custom growth frameworks designed specifically for your industry
            </p>
            <div className="bg-orange-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-orange-300">
                Average 85% faster time to market with our strategic frameworks
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg">
                Get Strategy Consultation
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive strategy development from market analysis to execution planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategyServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                    <p className="font-medium">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Strategies */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Strategies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored strategic approaches for your industry&apos;s unique challenges and opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryStrategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${strategy.color} rounded-2xl w-fit`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center">{strategy.title}</CardTitle>
                    <CardDescription className="text-center">{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {strategy.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-orange-700">{strategy.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategy Framework */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Strategy Framework</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven 4-phase approach that delivers measurable results
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {strategyFramework.map((phase, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <div className="text-sm text-orange-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm">
                          <BarChart3 className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
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

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategy Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our strategic marketing frameworks
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
      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Growth with Strategic Planning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a comprehensive strategy consultation and custom growth framework for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Strategy Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              Download Strategy Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 