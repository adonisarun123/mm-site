import React from 'react';
import Link from 'next/link';
import { ArrowRight, Target, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const platforms = [
  "Google Ads (Search, Display, YouTube)",
  "Facebook and Instagram advertising", 
  "LinkedIn advertising for B2B",
  "Native advertising campaigns",
  "Programmatic display advertising",
  "Retargeting and remarketing"
];

const industryStrategies = [
  {
    title: "Healthcare Media Buying",
    description: "HIPAA-compliant campaigns with patient acquisition focus",
    features: ["Compliance monitoring", "Medical professional targeting", "Patient acquisition funnels"],
    result: "180% increase in consultation bookings"
  },
  {
    title: "Real Estate Media Buying", 
    description: "Buyer and seller targeting with geo-specific campaigns",
    features: ["Listing promotion", "Agent branding campaigns", "Market-specific messaging"],
    result: "25% reduction in cost per lead"
  },
  {
    title: "Travel Media Buying",
    description: "Seasonal optimization with booking funnel focus",
    features: ["Travel intent targeting", "Dynamic remarketing", "Destination targeting"],
    result: "300% increase in destination inquiries"
  }
];

const platformExpertise = [
  {
    platform: "Google Ads",
    description: "Search campaign optimization with shopping and display network targeting",
    features: ["Search campaigns", "Shopping campaigns", "Display network", "YouTube advertising", "Local service ads"]
  },
  {
    platform: "Meta Advertising",
    description: "Lead generation and brand awareness campaigns across Facebook and Instagram",
    features: ["Lead generation", "Brand awareness", "Conversion optimization", "Lookalike audiences", "Creative testing"]
  },
  {
    platform: "LinkedIn Advertising",
    description: "B2B lead generation with professional targeting capabilities",
    features: ["B2B lead generation", "Professional targeting", "Sponsored content", "Message ads", "Event promotion"]
  }
];

export default function MediaBuyingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                Strategic Media Buying
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maximize ROI with
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                Precision-Targeted Advertising
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Data-driven media buying strategies that deliver qualified leads and measurable growth
            </p>
            <div className="bg-blue-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-blue-300">
                Average 4.2x ROAS across all campaigns
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg">
                Get Campaign Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                View Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized knowledge across all major advertising platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {platformExpertise.map((platform, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{platform.platform}</CardTitle>
                  <CardDescription className="text-center">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Strategies */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Strategies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored media buying approaches for your industry
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryStrategies.map((strategy, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{strategy.title}</CardTitle>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {strategy.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-700">{strategy.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive media buying services across all major platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    <p className="font-medium">{platform}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your Advertising Results?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a comprehensive audit of your current campaigns and discover optimization opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Campaign Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Schedule Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 