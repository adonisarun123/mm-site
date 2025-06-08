import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, PenTool, BarChart3, Settings, Globe, Brain, Zap, Database, Users, Shield, Video, Bot, MousePointer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
  {
    id: 'organic-growth',
    title: 'Organic Growth & SEO',
    description: 'Dominate search results and build sustainable traffic',
    icon: TrendingUp,
    features: ['Healthcare SEO', 'Local SEO', 'Technical SEO', 'E-A-T Optimization'],
    result: 'Average 340% organic traffic increase',
    href: '/services/organic-growth',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'media-buying',
    title: 'Strategic Media Buying',
    description: 'Maximize ROI with precision-targeted ad campaigns',
    icon: Target,
    features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Native Advertising'],
    result: 'Average 4.2x ROAS across campaigns',
    href: '/services/media-buying',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'ai-marketing',
    title: 'AI Marketing',
    description: 'Leverage artificial intelligence for superior campaign performance',
    icon: Brain,
    features: ['AI Audience Targeting', 'Predictive Analytics', 'Smart Bidding', 'Dynamic Personalization'],
    result: 'Average 312% improvement in conversion rates',
    href: '/services/ai-marketing',
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    description: 'Streamline workflows and nurture leads automatically',
    icon: Zap,
    features: ['Email Automation', 'Lead Scoring', 'Workflow Optimization', 'CRM Integration'],
    result: '85% reduction in manual marketing tasks',
    href: '/services/marketing-automation',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    description: 'Transform data into actionable insights and intelligence',
    icon: Database,
    features: ['Custom Dashboards', 'Predictive Analytics', 'ROI Attribution', 'Performance Intelligence'],
    result: 'Average 95% improvement in decision-making speed',
    href: '/services/data-analytics',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'conversion-optimization',
    title: 'Conversion Rate Optimization',
    description: 'Maximize conversions through data-driven testing and optimization',
    icon: MousePointer,
    features: ['A/B Testing', 'Landing Page Optimization', 'User Experience Testing', 'Conversion Funnel Analysis'],
    result: 'Average 285% increase in conversion rates',
    href: '/services/conversion-optimization',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation Services',
    description: 'Comprehensive lead capture and qualification systems',
    icon: Users,
    features: ['Lead Magnets', 'Landing Pages', 'Lead Scoring', 'Qualification Systems'],
    result: 'Average 420% increase in qualified leads',
    href: '/services/lead-generation',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'reputation-management',
    title: 'Reputation Management',
    description: 'Protect and enhance your online reputation across all platforms',
    icon: Shield,
    features: ['Review Management', 'Crisis Communication', 'Brand Monitoring', 'Reputation Recovery'],
    result: 'Average 4.8+ star rating maintenance',
    href: '/services/reputation-management',
    color: 'from-slate-500 to-gray-600'
  },
  {
    id: 'video-production',
    title: 'Video Production & Marketing',
    description: 'Professional video content that engages and converts audiences',
    icon: Video,
    features: ['Commercial Production', 'Social Media Videos', 'Testimonial Videos', 'Animated Explainers'],
    result: 'Average 350% increase in engagement rates',
    href: '/services/video-production',
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'chatbot-development',
    title: 'Chatbot Development',
    description: 'AI-powered conversational interfaces that enhance customer experience',
    icon: Bot,
    features: ['AI Chatbots', 'Lead Qualification', '24/7 Customer Support', 'Multi-platform Integration'],
    result: 'Average 75% reduction in response time',
    href: '/services/chatbot-development',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description: 'Build authority and trust through compelling content',
    icon: PenTool,
    features: ['Medical Content', 'Real Estate Guides', 'Travel Inspiration', 'SEO Content'],
    result: '2.5x increase in qualified leads',
    href: '/services/content-marketing',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'marketing-strategy',
    title: 'Marketing Strategy',
    description: 'Custom frameworks designed for your industry',
    icon: BarChart3,
    features: ['Market Research', 'Competitor Analysis', 'Growth Planning', 'KPI Development'],
    result: '85% faster time to market',
    href: '/services/marketing-strategy',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'internal-tools',
    title: 'Internal Tools Development',
    description: 'Custom solutions to automate and scale operations',
    icon: Settings,
    features: ['CRM Systems', 'Analytics Dashboards', 'Automation Tools', 'Custom Integrations'],
    result: '60% reduction in manual tasks',
    href: '/services/internal-tools',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'websites',
    title: 'World-Class Websites',
    description: 'High-converting websites that drive results',
    icon: Globe,
    features: ['UX/UI Design', 'Development', 'Conversion Optimization', 'Performance Optimization'],
    result: 'Average 190% increase in conversions',
    href: '/services/websites',
    color: 'from-teal-500 to-green-600'
  }
];

const industries = [
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant campaigns and patient acquisition strategies',
    caseStudy: 'Increased patient bookings by 275% for multi-location medical practice'
  },
  {
    name: 'Real Estate',
    description: 'Lead generation systems and property marketing campaigns',
    caseStudy: 'Generated 1,200+ qualified leads in 6 months for luxury real estate firm'
  },
  {
    name: 'Travel & Tourism',
    description: 'Destination marketing and booking optimization',
    caseStudy: 'Boosted hotel bookings by 180% during off-season'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Digital Marketing
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                Solutions Built for Growth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Specialized strategies for Healthcare, Real Estate, and Travel industries that deliver measurable results
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg">
                Get Your Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth in your industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg hover:scale-105">
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${service.color} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-700">{service.result}</p>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized knowledge and proven results in high-growth industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{industry.name}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">Case Study Result:</p>
                    <p className="text-sm text-blue-700 mt-1">{industry.caseStudy}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Marketing Results?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a comprehensive audit of your current marketing and discover untapped growth opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Your Free Marketing Audit
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