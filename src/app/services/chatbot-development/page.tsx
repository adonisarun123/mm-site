import React from 'react';
import { ArrowRight, Bot, CheckCircle, MessageCircle, Zap, Settings, Heart, Building, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const chatbotServices = [
  "AI-powered conversational interfaces and chatbots",
  "Lead qualification and customer support automation", 
  "Multi-platform integration (website, social, messaging)",
  "Natural language processing and understanding",
  "24/7 customer service and instant response systems",
  "Custom chatbot training and optimization"
];

const chatbotTools = [
  {
    title: "AI Chatbot Platform",
    description: "Intelligent conversational AI that understands and responds like a human agent",
    features: ["Natural language processing", "Machine learning algorithms", "Context awareness", "Multilingual support"],
    result: "Average 75% reduction in response time"
  },
  {
    title: "Lead Qualification Bot",
    description: "Automated lead scoring and qualification through intelligent conversations",
    features: ["Lead scoring algorithms", "Qualification workflows", "CRM integration", "Follow-up automation"],
    result: "85% improvement in lead quality"
  },
  {
    title: "Customer Support Engine",
    description: "24/7 automated customer service with escalation to human agents when needed",
    features: ["Ticket management", "Knowledge base integration", "Escalation protocols", "Performance analytics"],
    result: "90% of inquiries resolved automatically"
  },
  {
    title: "Multi-Platform Integrator",
    description: "Seamless chatbot deployment across all digital touchpoints and platforms",
    features: ["Website integration", "Social media bots", "Messaging apps", "Mobile apps"],
    result: "180% increase in customer engagement"
  }
];

const industryChatbots = [
  {
    title: "Healthcare Chatbots",
    description: "HIPAA-compliant medical chatbots for patient engagement and support",
    features: ["Appointment scheduling", "Symptom checking", "Treatment information", "Patient follow-up"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    result: "75% reduction in appointment scheduling time"
  },
  {
    title: "Real Estate Chatbots", 
    description: "Property-focused chatbots for lead qualification and customer service",
    features: ["Property search assistance", "Market information", "Viewing scheduling", "Mortgage guidance"],
    icon: Building,
    color: "from-blue-500 to-purple-600",
    result: "60% more qualified property leads"
  },
  {
    title: "Travel Chatbots",
    description: "Tourism and travel chatbots for booking assistance and customer support",
    features: ["Trip planning assistance", "Booking support", "Travel recommendations", "Customer service"],
    icon: Plane,
    color: "from-green-500 to-teal-600",
    result: "85% improvement in booking conversion"
  }
];

const chatbotProcess = [
  {
    phase: "Discovery & Planning",
    description: "Analyze requirements and design chatbot strategy and conversation flows",
    activities: ["Requirement analysis", "Use case definition", "Conversation design", "Integration planning"],
    duration: "1-2 weeks"
  },
  {
    phase: "Development & Training", 
    description: "Build and train the chatbot with industry-specific knowledge and responses",
    activities: ["Bot development", "AI training", "Knowledge base creation", "Testing protocols"],
    duration: "2-4 weeks"
  },
  {
    phase: "Integration & Deployment",
    description: "Deploy chatbot across platforms and integrate with existing systems",
    activities: ["Platform integration", "System connections", "User acceptance testing", "Go-live preparation"],
    duration: "1-2 weeks"
  },
  {
    phase: "Optimization & Support",
    description: "Continuously improve chatbot performance and provide ongoing support",
    activities: ["Performance monitoring", "Conversation optimization", "AI retraining", "Feature updates"],
    duration: "Ongoing"
  }
];

const caseStudies = [
  {
    client: "Multi-Specialty Medical Center",
    challenge: "High volume of patient inquiries overwhelming staff and delayed appointment scheduling",
    solution: "Deployed HIPAA-compliant chatbot for appointment scheduling, symptom checking, and patient education",
    result: "75% reduction in response time, 90% of appointments scheduled automatically, 60% improvement in patient satisfaction"
  },
  {
    client: "Premium Real Estate Agency",
    challenge: "Agents spending too much time on unqualified leads and basic property inquiries",
    solution: "Created intelligent chatbot for lead qualification, property search, and initial customer screening",
    result: "60% more qualified leads, 50% reduction in agent time on basic inquiries, 85% faster lead response"
  },
  {
    client: "Adventure Travel Company",
    challenge: "24/7 customer support needed for global travelers across different time zones",
    solution: "Implemented multilingual travel chatbot for booking support, travel assistance, and customer service",
    result: "85% improvement in booking conversion, 24/7 global support, 70% reduction in support tickets"
  }
];

const chatbotTechnologies = [
  { name: "AI Frameworks", description: "TensorFlow, PyTorch, Dialogflow, Rasa" },
  { name: "NLP Platforms", description: "OpenAI GPT, Google Cloud NLP, IBM Watson" },
  { name: "Messaging APIs", description: "WhatsApp, Facebook Messenger, Telegram" },
  { name: "Integration Tools", description: "Zapier, Webhooks, REST APIs" },
  { name: "Analytics Platforms", description: "Chatbot analytics, conversation insights" },
  { name: "Deployment Options", description: "Cloud hosting, on-premise, hybrid" }
];

export default function ChatbotDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                Chatbot Development
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Chatbots
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent block">
                That Enhance Customer Experience
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
              Intelligent conversational interfaces that provide 24/7 support and drive business growth
            </p>
            <div className="bg-indigo-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-indigo-300">
                Average 75% reduction in response time with intelligent chatbot automation
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-8 py-4 text-lg">
                Build Your Chatbot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 text-lg">
                See Chatbot Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Services */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chatbot Development Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete chatbot solutions that automate customer interactions and drive business results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatbotServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 flex-shrink-0" />
                    <p className="font-medium">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Tools */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chatbot Development Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI-powered chatbot systems for superior customer experience and automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {chatbotTools.map((tool, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
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
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Chatbots */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Chatbots</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized chatbot solutions for healthcare, real estate, and travel industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryChatbots.map((industry, index) => {
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
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-indigo-700">{industry.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chatbot Process */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chatbot Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to building intelligent chatbots that deliver exceptional results
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {chatbotProcess.map((phase, index) => (
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
                          <Bot className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chatbot Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI and natural language processing technologies for intelligent chatbots
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chatbotTechnologies.map((tech, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chatbot Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our chatbot development and implementation projects
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
                    <h4 className="font-semibold text-blue-600 mb-2">Chatbot Solution:</h4>
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
            Ready to Build Your Intelligent Chatbot?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how AI-powered chatbots can transform your customer experience and business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Build Your Chatbot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg">
              Schedule Chatbot Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
