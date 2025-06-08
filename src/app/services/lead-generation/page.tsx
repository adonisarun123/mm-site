import React from 'react';
import { ArrowRight, Users, CheckCircle, Target, Magnet, Filter, Heart, Building, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const leadGenServices = [
  "High-converting lead magnets and opt-in offers",
  "Custom landing page creation and optimization", 
  "Advanced lead scoring and qualification",
  "Multi-channel lead capture systems",
  "Lead nurturing workflow automation",
  "Performance tracking and analytics"
];

const leadGenTools = [
  {
    title: "Lead Magnet Creation",
    description: "Compelling offers and content that attract and capture quality leads",
    features: ["eBooks and guides", "Free consultations", "Tool calculators", "Video masterclasses"],
    result: "Average 420% increase in qualified leads"
  },
  {
    title: "Landing Page Optimizer",
    description: "High-converting landing pages designed for maximum lead capture",
    features: ["Mobile-responsive design", "A/B tested elements", "Form optimization", "Trust signals"],
    result: "65% improvement in conversion rates"
  },
  {
    title: "Lead Scoring Engine",
    description: "AI-powered system that identifies and prioritizes your best prospects",
    features: ["Behavioral scoring", "Demographic analysis", "Engagement tracking", "Sales readiness alerts"],
    result: "85% improvement in lead quality"
  },
  {
    title: "Multi-Channel Capture",
    description: "Comprehensive lead capture across all marketing channels and touchpoints",
    features: ["Website forms", "Social media capture", "Email campaigns", "Chatbot integration"],
    result: "180% increase in lead volume"
  }
];

const industryLeadGen = [
  {
    title: "Healthcare Lead Generation",
    description: "HIPAA-compliant patient acquisition and medical practice lead generation",
    features: ["Patient consultation requests", "Health assessment forms", "Appointment booking", "Treatment guides"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    result: "420% increase in patient inquiries"
  },
  {
    title: "Real Estate Lead Generation", 
    description: "Property-focused lead capture for agents, brokers, and real estate professionals",
    features: ["Property valuation tools", "Market report downloads", "Buyer/seller forms", "Investment calculators"],
    icon: Building,
    color: "from-blue-500 to-purple-600",
    result: "350% more qualified property leads"
  },
  {
    title: "Travel Lead Generation",
    description: "Booking-focused lead capture for travel agencies and tourism businesses",
    features: ["Trip planning tools", "Destination guides", "Quote requests", "Travel consultations"],
    icon: Plane,
    color: "from-green-500 to-teal-600",
    result: "380% increase in travel inquiries"
  }
];

const leadGenProcess = [
  {
    phase: "Strategy & Planning",
    description: "Define target audience and create compelling lead generation strategy",
    activities: ["Audience research", "Offer development", "Channel selection", "Goal setting"],
    duration: "1-2 weeks"
  },
  {
    phase: "Asset Creation", 
    description: "Develop lead magnets, landing pages, and capture mechanisms",
    activities: ["Lead magnet creation", "Landing page design", "Form development", "Email sequences"],
    duration: "2-3 weeks"
  },
  {
    phase: "Campaign Launch",
    description: "Deploy lead generation campaigns across selected channels",
    activities: ["Campaign setup", "Traffic generation", "Lead capture optimization", "Initial testing"],
    duration: "1 week"
  },
  {
    phase: "Optimization & Scaling",
    description: "Continuously optimize and scale successful lead generation efforts",
    activities: ["Performance analysis", "A/B testing", "Conversion optimization", "Campaign scaling"],
    duration: "Ongoing"
  }
];

const caseStudies = [
  {
    client: "Specialty Healthcare Practice",
    challenge: "Struggling to generate qualified patient leads online with low consultation requests",
    solution: "Created health assessment lead magnet with optimized landing pages and automated follow-up sequences",
    result: "420% increase in patient inquiries, 75% improvement in lead quality, 90% faster response time"
  },
  {
    client: "Luxury Real Estate Team",
    challenge: "High marketing costs with low-quality leads and poor conversion rates",
    solution: "Developed property valuation tool and market reports with targeted lead scoring system",
    result: "350% more qualified leads, 65% reduction in cost per lead, 40% higher closing rate"
  },
  {
    client: "Adventure Travel Agency",
    challenge: "Seasonal booking patterns with inconsistent lead flow throughout the year",
    solution: "Built trip planning tools and destination guides with year-round lead nurturing campaigns",
    result: "380% increase in travel inquiries, 55% more consistent lead flow, 70% higher booking rate"
  }
];

const leadGenTechnologies = [
  { name: "Landing Page Platforms", description: "Unbounce, Leadpages, ClickFunnels" },
  { name: "Lead Scoring Tools", description: "HubSpot, Pardot, Marketo" },
  { name: "Form Builders", description: "Typeform, Gravity Forms, Formstack" },
  { name: "Email Marketing", description: "Mailchimp, ConvertKit, ActiveCampaign" },
  { name: "CRM Integration", description: "Salesforce, Pipedrive, Zoho" },
  { name: "Analytics Platforms", description: "Google Analytics, Mixpanel, Hotjar" }
];

export default function LeadGenerationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-pink-900 to-rose-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                Lead Generation Services
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Generate High-Quality
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent block">
                Leads That Convert
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 leading-relaxed">
              Comprehensive lead capture and qualification systems that fill your pipeline with qualified prospects
            </p>
            <div className="bg-pink-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-pink-300">
                Average 420% increase in qualified leads through strategic lead generation
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg">
                Get Lead Gen Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-900 px-8 py-4 text-lg">
                View Lead Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Services */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lead Generation Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete lead generation solutions that attract, capture, and qualify your ideal prospects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadGenServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0" />
                    <p className="font-medium">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Gen Tools */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lead Generation Tools & Systems</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced tools and strategies for capturing and qualifying high-quality leads
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {leadGenTools.map((tool, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-pink-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-pink-700">{tool.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Lead Gen */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Lead Generation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized lead generation strategies for healthcare, real estate, and travel industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryLeadGen.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${industry.color} rounded-2xl w-fit`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center">{industry.title}</CardTitle>
                    <CardDescription className="text-center">{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-pink-700">{industry.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead Gen Process */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lead Generation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to building high-performing lead generation systems
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {leadGenProcess.map((phase, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <div className="text-sm text-pink-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm">
                          <Users className="w-4 h-4 text-pink-500 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lead Generation Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading platforms and tools for comprehensive lead generation and management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadGenTechnologies.map((tech, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lead Generation Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our lead generation campaigns and systems
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
                    <h4 className="font-semibold text-blue-600 mb-2">Lead Gen Solution:</h4>
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
      <section className="py-24 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fill Your Pipeline with Quality Leads?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how strategic lead generation can transform your business growth and revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Lead Gen Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 text-lg">
              Schedule Lead Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 