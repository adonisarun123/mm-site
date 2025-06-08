import React from 'react';
import { ArrowRight, Shield, CheckCircle, AlertTriangle, Star, Eye, Heart, Building, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const reputationServices = [
  "Review monitoring and response management",
  "Crisis communication and damage control", 
  "Online brand monitoring and tracking",
  "Reputation recovery and restoration",
  "Review generation and acquisition",
  "Social media reputation management"
];

const reputationTools = [
  {
    title: "Review Management Platform",
    description: "Centralized system for monitoring and managing reviews across all platforms",
    features: ["Multi-platform monitoring", "Automated response workflows", "Review analytics", "Competitor tracking"],
    result: "Average 4.8+ star rating maintenance"
  },
  {
    title: "Crisis Communication System",
    description: "Rapid response framework for managing reputation threats and crises",
    features: ["24/7 monitoring alerts", "Response templates", "Escalation protocols", "Damage assessment"],
    result: "95% faster crisis response time"
  },
  {
    title: "Brand Monitoring Intelligence",
    description: "Comprehensive tracking of your brand mentions across the internet",
    features: ["Real-time alerts", "Sentiment analysis", "Mention tracking", "Competitor intelligence"],
    result: "100% coverage of brand mentions"
  },
  {
    title: "Reputation Recovery Engine",
    description: "Strategic system for rebuilding and enhancing damaged online reputations",
    features: ["Recovery planning", "Content optimization", "Review campaigns", "Progress tracking"],
    result: "Average 2.3 star rating improvement"
  }
];

const industryReputation = [
  {
    title: "Healthcare Reputation",
    description: "HIPAA-compliant reputation management for medical practices and health services",
    features: ["Patient review management", "Medical crisis response", "Provider reputation", "Health content monitoring"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    result: "4.8+ average star rating for healthcare clients"
  },
  {
    title: "Real Estate Reputation", 
    description: "Property-focused reputation management for agents, brokers, and real estate firms",
    features: ["Agent review profiles", "Market reputation", "Client testimonials", "Property listing reviews"],
    icon: Building,
    color: "from-blue-500 to-purple-600",
    result: "4.9+ average star rating for real estate professionals"
  },
  {
    title: "Travel Reputation",
    description: "Tourism-focused reputation management for travel agencies and hospitality businesses",
    features: ["Travel review management", "Destination reputation", "Guest experience monitoring", "Tourism crisis response"],
    icon: Plane,
    color: "from-green-500 to-teal-600",
    result: "4.7+ average star rating for travel businesses"
  }
];

const reputationProcess = [
  {
    phase: "Reputation Audit",
    description: "Comprehensive assessment of current online reputation and brand presence",
    activities: ["Review analysis", "Mention tracking", "Competitor benchmarking", "Risk assessment"],
    duration: "1-2 weeks"
  },
  {
    phase: "Strategy Development", 
    description: "Create customized reputation management strategy and response protocols",
    activities: ["Strategy planning", "Response templates", "Monitoring setup", "Team training"],
    duration: "1 week"
  },
  {
    phase: "Implementation & Monitoring",
    description: "Deploy reputation management systems and begin active monitoring",
    activities: ["Platform setup", "Monitoring activation", "Response workflows", "Review campaigns"],
    duration: "Ongoing"
  },
  {
    phase: "Recovery & Enhancement",
    description: "Execute reputation recovery plans and continuous improvement initiatives",
    activities: ["Recovery campaigns", "Content optimization", "Review generation", "Performance reporting"],
    duration: "Ongoing"
  }
];

const caseStudies = [
  {
    client: "Multi-Location Medical Practice",
    challenge: "Negative reviews across multiple locations affecting patient acquisition and trust",
    solution: "Implemented comprehensive review monitoring with personalized response strategy and patient feedback system",
    result: "Improved from 3.2 to 4.8 star average, 275% increase in positive reviews, 85% reduction in negative sentiment"
  },
  {
    client: "Luxury Real Estate Agency",
    challenge: "Reputation crisis from a high-profile transaction dispute affecting agent credibility",
    solution: "Deployed crisis communication strategy with proactive content creation and review generation campaigns",
    result: "Restored 4.9 star rating within 90 days, 150% increase in positive mentions, 95% crisis sentiment recovery"
  },
  {
    client: "Adventure Travel Company",
    challenge: "Seasonal negative reviews and social media criticism affecting booking confidence",
    solution: "Created year-round reputation management with guest experience optimization and proactive communication",
    result: "Maintained 4.7+ star rating year-round, 200% increase in positive guest testimonials, 70% reduction in complaints"
  }
];

const reputationTechnologies = [
  { name: "Review Platforms", description: "Google My Business, Yelp, TripAdvisor, Healthgrades" },
  { name: "Monitoring Tools", description: "Brand24, Mention, Google Alerts, Social Mention" },
  { name: "Social Listening", description: "Hootsuite, Sprout Social, Brandwatch" },
  { name: "Response Management", description: "ReviewTrackers, Podium, BirdEye" },
  { name: "Analytics Platforms", description: "Reputation.com, ReviewPush, Grade.us" },
  { name: "Crisis Management", description: "Custom alert systems, escalation protocols" }
];

export default function ReputationManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">
                Reputation Management
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protect & Enhance Your
              <span className="bg-gradient-to-r from-gray-400 to-slate-300 bg-clip-text text-transparent block">
                Online Reputation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Comprehensive reputation management that builds trust and protects your brand across all platforms
            </p>
            <div className="bg-gray-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-gray-300">
                Average 4.8+ star rating maintenance across all reputation management clients
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-gray-500 to-slate-600 hover:from-gray-600 hover:to-slate-700 text-white px-8 py-4 text-lg">
                Get Reputation Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                View Recovery Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reputation Services */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reputation Management Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete reputation protection and enhancement solutions for your brand and business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reputationServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-gray-500 flex-shrink-0" />
                    <p className="font-medium">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reputation Tools */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reputation Management Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced systems for monitoring, protecting, and enhancing your online reputation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {reputationTools.map((tool, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700">{tool.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Reputation */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Reputation Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized reputation strategies for healthcare, real estate, and travel industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryReputation.map((industry, index) => {
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
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-700">{industry.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reputation Process */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reputation Management Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to protecting and enhancing your online reputation
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {reputationProcess.map((phase, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <div className="text-sm text-gray-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm">
                          <Shield className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reputation Management Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading platforms and tools for comprehensive reputation monitoring and management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reputationTechnologies.map((tech, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reputation Recovery Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our reputation management and recovery campaigns
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
                    <h4 className="font-semibold text-blue-600 mb-2">Reputation Solution:</h4>
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
      <section className="py-24 bg-gradient-to-r from-gray-600 to-slate-700 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Online Reputation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how professional reputation management can safeguard and enhance your brand&apos;s credibility
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Reputation Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-600 px-8 py-4 text-lg">
              Schedule Reputation Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 