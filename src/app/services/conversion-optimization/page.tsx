import React from 'react';
import { ArrowRight, MousePointer, CheckCircle, TrendingUp, BarChart3, Target, Heart, Building, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const croServices = [
  "Advanced A/B and multivariate testing",
  "Landing page optimization and design", 
  "Conversion funnel analysis and optimization",
  "User experience (UX) testing and heatmaps",
  "Personalization and dynamic content",
  "Performance tracking and reporting"
];

const croTools = [
  {
    title: "A/B Testing Platform",
    description: "Comprehensive testing framework for continuous optimization",
    features: ["Statistical significance testing", "Multi-variant experiments", "Real-time results", "Automated winner selection"],
    result: "Average 285% increase in conversion rates"
  },
  {
    title: "Heatmap & User Analytics",
    description: "Visual insights into user behavior and interaction patterns",
    features: ["Click heatmaps", "Scroll tracking", "Session recordings", "User flow analysis"],
    result: "95% improvement in identifying conversion barriers"
  },
  {
    title: "Landing Page Optimizer",
    description: "AI-powered landing page creation and optimization system",
    features: ["Dynamic headlines", "Smart CTAs", "Form optimization", "Mobile optimization"],
    result: "350% improvement in landing page performance"
  },
  {
    title: "Conversion Funnel Analyzer",
    description: "Deep analysis of customer journey and drop-off points",
    features: ["Funnel visualization", "Drop-off analysis", "Cohort tracking", "Revenue attribution"],
    result: "78% reduction in funnel abandonment"
  }
];

const industryCRO = [
  {
    title: "Healthcare CRO",
    description: "HIPAA-compliant conversion optimization for medical practices and health services",
    features: ["Appointment booking optimization", "Patient form optimization", "Telehealth conversion", "Treatment page optimization"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    result: "285% increase in appointment bookings"
  },
  {
    title: "Real Estate CRO", 
    description: "Property-focused conversion optimization for agents, brokers, and developers",
    features: ["Property inquiry forms", "Listing page optimization", "Contact optimization", "Market report downloads"],
    icon: Building,
    color: "from-blue-500 to-purple-600",
    result: "240% more qualified property leads"
  },
  {
    title: "Travel CRO",
    description: "Booking-focused optimization for travel companies and tourism businesses",
    features: ["Booking flow optimization", "Package selection optimization", "Review conversion", "Email capture optimization"],
    icon: Plane,
    color: "from-green-500 to-teal-600",
    result: "320% increase in booking conversions"
  }
];

const croProcess = [
  {
    phase: "Audit & Analysis",
    description: "Comprehensive analysis of current conversion performance and barriers",
    activities: ["Conversion audit", "User behavior analysis", "Funnel mapping", "Competitor benchmarking"],
    duration: "1-2 weeks"
  },
  {
    phase: "Hypothesis Development", 
    description: "Data-driven hypothesis creation based on insights and best practices",
    activities: ["Test planning", "Hypothesis prioritization", "Success metrics definition", "Test design"],
    duration: "1 week"
  },
  {
    phase: "Testing & Implementation",
    description: "Execute A/B tests and optimization experiments with statistical rigor",
    activities: ["Test implementation", "Traffic allocation", "Data collection", "Performance monitoring"],
    duration: "2-4 weeks per test"
  },
  {
    phase: "Analysis & Optimization",
    description: "Analyze results and implement winning variations for maximum impact",
    activities: ["Statistical analysis", "Result implementation", "Continuous optimization", "Performance reporting"],
    duration: "Ongoing"
  }
];

const caseStudies = [
  {
    client: "Multi-Specialty Medical Center",
    challenge: "Low online appointment booking rate with 85% form abandonment",
    solution: "Implemented progressive form optimization with smart field reduction and trust signals",
    result: "285% increase in completed bookings, 65% reduction in form abandonment, 40% faster booking process"
  },
  {
    client: "Luxury Real Estate Agency",
    challenge: "High traffic to property listings but low inquiry conversion rates",
    solution: "Optimized property inquiry forms with simplified design and social proof elements",
    result: "240% more qualified leads, 180% increase in property showings, 35% higher closing rate"
  },
  {
    client: "Adventure Travel Company",
    challenge: "Visitors browsing packages but not completing bookings",
    solution: "Redesigned booking flow with urgency elements and simplified payment process",
    result: "320% increase in booking conversions, 50% reduction in cart abandonment, 60% faster checkout"
  }
];

const croTechnologies = [
  { name: "Testing Platforms", description: "Optimizely, VWO, Google Optimize" },
  { name: "Analytics Tools", description: "Google Analytics, Hotjar, Mixpanel" },
  { name: "Heatmap Software", description: "Crazy Egg, FullStory, LogRocket" },
  { name: "Landing Page Builders", description: "Unbounce, Leadpages, Instapage" },
  { name: "Form Optimization", description: "Typeform, Formstack, Gravity Forms" },
  { name: "Personalization", description: "Dynamic Yield, Evergage, Monetate" }
];

export default function ConversionOptimizationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                Conversion Rate Optimization
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maximize Conversions with
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent block">
                Data-Driven Testing & Optimization
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
              Transform visitors into customers through scientific testing and continuous optimization
            </p>
            <div className="bg-amber-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-amber-300">
                Average 285% increase in conversion rates through systematic optimization
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg">
                Get CRO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 text-lg">
                View A/B Test Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CRO Services */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conversion Optimization Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive testing and optimization solutions that maximize your conversion potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {croServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                    <p className="font-medium">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CRO Tools */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimization Tools & Methods</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced testing platforms and analytics tools for maximum conversion impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {croTools.map((tool, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-amber-700">{tool.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific CRO */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Optimization</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conversion optimization strategies tailored for healthcare, real estate, and travel industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryCRO.map((industry, index) => {
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
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-amber-700">{industry.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CRO Process */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CRO Implementation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to conversion rate optimization that delivers measurable results
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {croProcess.map((phase, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <div className="text-sm text-amber-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm">
                          <MousePointer className="w-4 h-4 text-amber-500 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CRO Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading platforms and tools for comprehensive conversion optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {croTechnologies.map((tech, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CRO Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our conversion rate optimization campaigns
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
                    <h4 className="font-semibold text-blue-600 mb-2">CRO Solution:</h4>
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
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Maximize Your Conversion Rates?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how data-driven optimization can transform your website performance and ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get CRO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg">
              Schedule CRO Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 