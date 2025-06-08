import React from 'react';
import { ArrowRight, Zap, CheckCircle, Users, BarChart3, Settings, Heart, Building, Plane, Mail, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const automationServices = [
  "Intelligent email marketing automation",
  "Lead scoring and nurturing workflows", 
  "Customer journey automation",
  "Social media automation and scheduling",
  "CRM integration and data synchronization",
  "Performance tracking and optimization"
];

const industryAutomations = [
  {
    title: "Healthcare Automation",
    description: "HIPAA-compliant patient communication and appointment automation systems",
    features: ["Appointment reminders", "Patient follow-ups", "Treatment sequences", "Review automation"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    result: "85% reduction in manual patient communications"
  },
  {
    title: "Real Estate Automation", 
    description: "Lead nurturing and property marketing automation for agents and brokers",
    features: ["Lead qualification", "Property alerts", "Market updates", "Client nurturing"],
    icon: Building,
    color: "from-blue-500 to-purple-600",
    result: "240% increase in lead-to-sale conversions"
  },
  {
    title: "Travel Automation",
    description: "Booking confirmation and customer journey automation for travel companies",
    features: ["Booking sequences", "Trip reminders", "Upsell automation", "Review requests"],
    icon: Plane,
    color: "from-green-500 to-teal-600",
    result: "175% improvement in customer retention"
  }
];

const automationTools = [
  {
    title: "Email Marketing Automation",
    description: "Sophisticated email sequences that nurture leads and drive conversions automatically",
    features: ["Drip campaigns", "Behavioral triggers", "Personalization", "A/B testing"],
    result: "78% higher email engagement rates"
  },
  {
    title: "Lead Scoring & Qualification",
    description: "Intelligent systems that automatically score and qualify leads based on behavior",
    features: ["Behavioral scoring", "Demographic analysis", "Engagement tracking", "Sales handoff"],
    result: "92% improvement in lead quality"
  },
  {
    title: "Social Media Automation",
    description: "Automated posting, engagement, and content distribution across social platforms",
    features: ["Content scheduling", "Auto-responses", "Cross-platform posting", "Performance analytics"],
    result: "65% increase in social engagement"
  },
  {
    title: "CRM Integration & Workflows",
    description: "Seamless automation between marketing tools and customer relationship management",
    features: ["Data synchronization", "Pipeline automation", "Task creation", "Follow-up reminders"],
    result: "89% reduction in data entry time"
  }
];

const automationProcess = [
  {
    phase: "Workflow Analysis",
    description: "Map current processes and identify automation opportunities",
    activities: ["Process mapping", "Bottleneck identification", "ROI assessment", "Priority ranking"],
    duration: "1-2 weeks"
  },
  {
    phase: "System Design", 
    description: "Create custom automation workflows tailored to your business needs",
    activities: ["Workflow design", "Tool selection", "Integration planning", "Testing protocols"],
    duration: "2-3 weeks"
  },
  {
    phase: "Implementation & Testing",
    description: "Deploy automation systems with thorough testing and quality assurance",
    activities: ["System setup", "Data migration", "Workflow testing", "Team training"],
    duration: "2-4 weeks"
  },
  {
    phase: "Optimization & Scaling",
    description: "Continuously optimize and expand automation based on performance data",
    activities: ["Performance monitoring", "A/B testing", "Workflow refinement", "Scaling strategies"],
    duration: "Ongoing"
  }
];

const caseStudies = [
  {
    client: "Regional Healthcare Network",
    challenge: "Manual patient communication causing missed appointments and poor follow-up rates",
    solution: "Implemented comprehensive patient communication automation with appointment reminders and follow-ups",
    result: "85% reduction in manual tasks, 40% decrease in no-shows, 95% patient satisfaction rate"
  },
  {
    client: "Real Estate Brokerage Firm",
    challenge: "Agents spending 60% of time on administrative tasks instead of selling",
    solution: "Built complete lead nurturing automation with CRM integration and follow-up sequences",
    result: "240% increase in lead conversions, 70% time savings for agents, 3x more deals closed"
  },
  {
    client: "Adventure Tourism Company",
    challenge: "Inconsistent customer communication and poor post-booking engagement",
    solution: "Created end-to-end customer journey automation from booking to post-trip follow-up",
    result: "175% improvement in customer retention, 55% increase in repeat bookings, 90% review rate"
  }
];

const automationPlatforms = [
  { name: "Email Platforms", description: "Mailchimp, Klaviyo, ConvertKit" },
  { name: "CRM Systems", description: "HubSpot, Salesforce, Pipedrive" },
  { name: "Marketing Automation", description: "Marketo, Pardot, ActiveCampaign" },
  { name: "Social Media", description: "Buffer, Hootsuite, Sprout Social" },
  { name: "Workflow Tools", description: "Zapier, Microsoft Power Automate" },
  { name: "Analytics & Tracking", description: "Google Analytics, Mixpanel" }
];

export default function MarketingAutomationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                Marketing Automation
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intelligent Marketing
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                Automation That Works 24/7
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Streamline your marketing operations with intelligent automation that nurtures leads and drives conversions
            </p>
            <div className="bg-cyan-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-cyan-300">
                Average 85% reduction in manual marketing tasks through smart automation
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg">
                Get Automation Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 text-lg">
                View Automation Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketing Automation Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automation solutions that eliminate manual tasks and scale your marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                    <p className="font-medium">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Tools */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful automation tools that work together to create seamless marketing workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {automationTools.map((tool, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-cyan-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-cyan-700">{tool.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Automation */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Automation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored automation workflows for healthcare, real estate, and travel industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryAutomations.map((automation, index) => {
              const Icon = automation.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${automation.color} rounded-2xl w-fit`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center">{automation.title}</CardTitle>
                    <CardDescription className="text-center">{automation.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {automation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-cyan-700">{automation.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation Process */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Implementation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to implementing marketing automation that delivers results
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {automationProcess.map((phase, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <div className="text-sm text-cyan-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm">
                          <Zap className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" />
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

      {/* Automation Platforms */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Platforms We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading platforms and tools for comprehensive marketing automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationPlatforms.map((platform, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{platform.name}</h3>
                  <p className="text-gray-600 text-sm">{platform.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our marketing automation implementations
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
                    <h4 className="font-semibold text-blue-600 mb-2">Automation Solution:</h4>
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
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Marketing Operations?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how marketing automation can scale your business while reducing manual tasks
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Automation Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg">
              Schedule Automation Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 