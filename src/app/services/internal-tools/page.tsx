import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, CheckCircle, Database, BarChart3, Settings, Zap, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const toolCategories = [
  "AI-powered CRM systems and customer management",
  "Custom analytics dashboards and reporting", 
  "Marketing automation and workflow tools",
  "Lead management and scoring systems",
  "Performance tracking and KPI dashboards",
  "Integration platforms and API development"
];

const toolTypes = [
  {
    title: "Smart CRM Systems",
    description: "AI-powered customer relationship management with automated workflows",
    features: ["Contact management", "Deal pipeline automation", "Smart lead scoring", "Activity tracking"],
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    result: "45% increase in sales efficiency"
  },
  {
    title: "Analytics Dashboards", 
    description: "Real-time performance tracking with predictive insights and reporting",
    features: ["Custom KPI tracking", "Real-time reporting", "Predictive analytics", "Data visualization"],
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    result: "60% faster decision making"
  },
  {
    title: "Automation Workflows",
    description: "Streamline operations with intelligent process automation",
    features: ["Task automation", "Email sequences", "Follow-up reminders", "Process optimization"],
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    result: "70% reduction in manual tasks"
  },
  {
    title: "Integration Platforms",
    description: "Connect all your tools and systems for seamless data flow",
    features: ["API integrations", "Data synchronization", "System connectivity", "Workflow bridges"],
    icon: Settings,
    color: "from-orange-500 to-red-500",
    result: "85% improvement in data accuracy"
  }
];

const developmentProcess = [
  {
    phase: "Discovery & Requirements",
    description: "Understand your business processes and identify automation opportunities",
    activities: ["Process mapping", "Requirements gathering", "System analysis", "Technology assessment"],
    duration: "1-2 weeks"
  },
  {
    phase: "Design & Architecture", 
    description: "Create system architecture and user experience design",
    activities: ["System design", "Database schema", "UI/UX design", "Integration planning"],
    duration: "2-3 weeks"
  },
  {
    phase: "Development & Testing",
    description: "Build custom tools with rigorous testing and quality assurance",
    activities: ["Custom development", "Feature implementation", "Testing", "Quality assurance"],
    duration: "4-8 weeks"
  },
  {
    phase: "Deployment & Training",
    description: "Launch tools and train your team for maximum adoption and efficiency",
    activities: ["System deployment", "Team training", "Documentation", "Ongoing support"],
    duration: "1-2 weeks"
  }
];

const caseStudies = [
  {
    client: "Healthcare Network",
    challenge: "Managing patient data across 10 locations with manual processes causing delays",
    solution: "Custom patient management system with automated scheduling and HIPAA-compliant data handling",
    result: "50% reduction in administrative time, 95% improvement in appointment scheduling efficiency"
  },
  {
    client: "Real Estate Brokerage",
    challenge: "Agents struggling to track leads and manage follow-ups across multiple properties",
    solution: "AI-powered CRM with smart lead scoring and automated follow-up sequences",
    result: "40% increase in lead conversion, 60% more efficient agent workflows"
  },
  {
    client: "Travel Agency",
    challenge: "Manual booking processes and disconnected systems causing booking errors",
    solution: "Integrated booking platform with automated confirmations and customer communication",
    result: "75% reduction in booking errors, 50% faster booking process"
  }
];

const technologies = [
  { name: "React/Next.js", description: "Modern web applications" },
  { name: "Node.js/Python", description: "Backend development" },
  { name: "Database Systems", description: "PostgreSQL, MongoDB" },
  { name: "Cloud Platforms", description: "AWS, Google Cloud" },
  { name: "AI/ML Integration", description: "TensorFlow, OpenAI" },
  { name: "API Development", description: "REST, GraphQL" }
];

export default function InternalToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                Internal Tools Development
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom AI-Powered
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent block">
                Business Tools & Systems
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Automate your operations with custom-built tools designed specifically for your business needs
            </p>
            <div className="bg-indigo-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-indigo-300">
                Average 60% reduction in manual tasks through intelligent automation
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-8 py-4 text-lg">
                Get Custom Tool Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                View Tool Portfolio
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
              Custom tools and systems designed to automate and optimize your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 flex-shrink-0" />
                    <p className="font-medium">{category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tool Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for every aspect of your business operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {toolTypes.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className={`mb-4 p-4 bg-gradient-to-r ${tool.color} rounded-2xl w-fit`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-indigo-700">{tool.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology for delivering custom tools that drive results
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {developmentProcess.map((phase, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <div className="text-sm text-indigo-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm">
                          <Code className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
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
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technologies for robust, scalable solutions
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
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom tools that transformed business operations
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
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Business with Custom Tools?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a consultation and discover how custom tools can transform your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Custom Tool Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 