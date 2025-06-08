import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, DollarSign, Calendar, Building, Heart, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const caseStudies = [
  {
    id: 'medical-practice-patient-growth',
    title: 'Multi-Location Medical Practice: 275% Increase in Patient Bookings',
    client: 'Premier Healthcare Network',
    industry: 'Healthcare',
    icon: Heart,
    challenge: 'Struggling to fill appointment slots across 12 locations with declining patient acquisition and high competition.',
    solution: 'Implemented HIPAA-compliant SEO strategy, patient education content, and Google Ads campaigns targeting specific medical conditions.',
    duration: '12 months',
    results: [
      { metric: 'Patient Bookings', value: '+275%', color: 'text-green-600' },
      { metric: 'Organic Traffic', value: '+340%', color: 'text-blue-600' },
      { metric: 'Cost Per Lead', value: '-65%', color: 'text-purple-600' },
      { metric: 'Online Reviews', value: '+180%', color: 'text-orange-600' }
    ],
    services: ['SEO', 'Content Marketing', 'Google Ads', 'Reputation Management'],
    testimonial: 'MonkMantra transformed our patient acquisition completely. We went from struggling to fill appointments to having a 3-month waiting list.',
    author: 'Dr. Sarah Johnson, Healthcare Director',
    featured: true
  },
  {
    id: 'luxury-real-estate-leads',
    title: 'Luxury Real Estate Firm: 1,200+ Qualified Leads in 6 Months',
    client: 'Platinum Properties Group',
    industry: 'Real Estate',
    icon: Building,
    challenge: 'High-end real estate market with long sales cycles and need for qualified leads in luxury property segment.',
    solution: 'Developed targeted Facebook and Google campaigns, created luxury property showcases, and implemented lead nurturing sequences.',
    duration: '6 months',
    results: [
      { metric: 'Qualified Leads', value: '1,200+', color: 'text-green-600' },
      { metric: 'Sales Volume', value: '+185%', color: 'text-blue-600' },
      { metric: 'Lead Quality Score', value: '+95%', color: 'text-purple-600' },
      { metric: 'ROAS', value: '4.8x', color: 'text-orange-600' }
    ],
    services: ['Media Buying', 'Lead Generation', 'Content Creation', 'CRM Setup'],
    testimonial: 'Best ROI we have ever seen from a marketing agency. The lead quality is exceptional.',
    author: 'Michael Chen, Real Estate CEO',
    featured: true
  },
  {
    id: 'tourism-hotel-bookings',
    title: 'Tourism Destination: 180% Booking Increase During Off-Season',
    client: 'Coastal Resort & Spa',
    industry: 'Travel & Tourism',
    icon: Plane,
    challenge: 'Severe seasonal booking fluctuations with 70% revenue loss during off-peak months.',
    solution: 'Created off-season marketing campaigns, wellness-focused content, and strategic partnerships with travel influencers.',
    duration: '8 months',
    results: [
      { metric: 'Off-Season Bookings', value: '+180%', color: 'text-green-600' },
      { metric: 'Revenue Growth', value: '+225%', color: 'text-blue-600' },
      { metric: 'Social Engagement', value: '+340%', color: 'text-purple-600' },
      { metric: 'Repeat Customers', value: '+150%', color: 'text-orange-600' }
    ],
    services: ['Content Marketing', 'Social Media', 'Influencer Partnerships', 'Email Marketing'],
    testimonial: 'Our off-season is now as profitable as our peak season. MonkMantra completely transformed our business model.',
    author: 'Lisa Thompson, Tourism Manager',
    featured: true
  },
  {
    id: 'healthcare-system-organic-growth',
    title: 'Healthcare System: 400% Organic Traffic Growth',
    client: 'Regional Medical Center',
    industry: 'Healthcare',
    icon: Heart,
    challenge: 'Low online visibility for specialized medical services and poor search rankings.',
    solution: 'Comprehensive SEO overhaul, medical content strategy, and local search optimization.',
    duration: '10 months',
    results: [
      { metric: 'Organic Traffic', value: '+400%', color: 'text-green-600' },
      { metric: 'Keyword Rankings', value: '+275%', color: 'text-blue-600' },
      { metric: 'Specialist Consultations', value: '+190%', color: 'text-purple-600' },
      { metric: 'Online Appointment Bookings', value: '+220%', color: 'text-orange-600' }
    ],
    services: ['SEO', 'Content Marketing', 'Technical SEO', 'Local SEO'],
    testimonial: 'The organic growth has been phenomenal. We are now the top-ranked medical center in our region.',
    author: 'Dr. James Wilson, Chief Medical Officer',
    featured: false
  },
  {
    id: 'real-estate-team-lead-reduction',
    title: 'Real Estate Team: 25% Reduction in Cost Per Lead',
    client: 'Metro Realty Specialists',
    industry: 'Real Estate',
    icon: Building,
    challenge: 'High advertising costs with inconsistent lead quality and poor conversion rates.',
    solution: 'Optimized Google Ads campaigns, implemented advanced targeting, and created high-converting landing pages.',
    duration: '4 months',
    results: [
      { metric: 'Cost Per Lead', value: '-25%', color: 'text-green-600' },
      { metric: 'Lead Quality', value: '+85%', color: 'text-blue-600' },
      { metric: 'Conversion Rate', value: '+120%', color: 'text-purple-600' },
      { metric: 'Sales Volume', value: '+165%', color: 'text-orange-600' }
    ],
    services: ['Google Ads', 'Landing Page Optimization', 'Lead Scoring', 'Analytics Setup'],
    testimonial: 'Finally, advertising that actually works. Our lead quality has never been better.',
    author: 'Jennifer Rodriguez, Team Leader',
    featured: false
  },
  {
    id: 'tourism-board-destination-inquiries',
    title: 'Tourism Board: 300% Increase in Destination Inquiries',
    client: 'Mountain Valley Tourism',
    industry: 'Travel & Tourism',
    icon: Plane,
    challenge: 'Limited destination awareness and declining visitor numbers compared to competitive regions.',
    solution: 'Multi-channel content strategy, influencer collaborations, and targeted destination marketing campaigns.',
    duration: '12 months',
    results: [
      { metric: 'Destination Inquiries', value: '+300%', color: 'text-green-600' },
      { metric: 'Visitor Numbers', value: '+185%', color: 'text-blue-600' },
      { metric: 'Tourism Revenue', value: '+240%', color: 'text-purple-600' },
      { metric: 'Brand Awareness', value: '+275%', color: 'text-orange-600' }
    ],
    services: ['Content Marketing', 'Social Media', 'Google Ads', 'PR & Outreach'],
    testimonial: 'We went from being unknown to being one of the top destinations in the region. Incredible results.',
    author: 'Mark Stevens, Tourism Director',
    featured: false
  }
];

const stats = [
  { value: '$50M+', label: 'Revenue Generated', icon: DollarSign },
  { value: '250+', label: 'Successful Campaigns', icon: TrendingUp },
  { value: '98%', label: 'Client Retention Rate', icon: Users },
  { value: '15+', label: 'Industries Served', icon: Building }
];

export default function CaseStudiesPage() {
  const featuredCaseStudies = caseStudies.filter(study => study.featured);
  const otherCaseStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Results for Real
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent block">
                Businesses Like Yours
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Explore how we&apos;ve helped healthcare, real estate, and travel businesses achieve extraordinary growth
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most impactful campaigns that transformed businesses
            </p>
          </div>

          <div className="space-y-16">
            {featuredCaseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <Card key={study.id} className="overflow-hidden border-0 shadow-xl">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary">{study.industry}</Badge>
                          <p className="text-sm text-muted-foreground mt-1">{study.client}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold mb-2">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline">{service}</Badge>
                        ))}
                      </div>

                      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-muted-foreground mb-4">
                        &ldquo;{study.testimonial}&rdquo;
                      </blockquote>
                      <cite className="text-sm font-semibold">— {study.author}</cite>
                    </div>

                    <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-center">
                      <h4 className="text-xl font-bold mb-6 text-center">Key Results</h4>
                      <div className="grid grid-cols-2 gap-6">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className={`text-2xl font-bold ${result.color} mb-1`}>
                              {result.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-6">
                        <Badge variant="secondary">Duration: {study.duration}</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">More Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional case studies showcasing our diverse expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCaseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <Card key={study.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant="secondary">{study.industry}</Badge>
                    </div>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <CardDescription>{study.client}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className={`text-lg font-bold ${result.color}`}>
                            {result.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      &ldquo;{study.testimonial.substring(0, 100)}...&rdquo;
                    </p>
                    <p className="text-xs font-semibold">— {study.author}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can achieve similar results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Your Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 