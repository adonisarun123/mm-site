import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, CheckCircle, Target, Users, BarChart3, Heart, Building, Plane, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const aiMarketingServices = [
  "AI-powered audience targeting and segmentation",
  "Machine learning campaign optimization", 
  "Predictive analytics and forecasting",
  "Dynamic ad creative generation",
  "Intelligent bidding and budget allocation",
  "Real-time performance optimization"
];

const industryAIStrategies = [
  {
    title: "Healthcare AI Marketing",
    description: "HIPAA-compliant AI systems that predict patient needs and optimize appointment bookings",
    features: ["Patient behavior prediction", "Appointment optimization", "Treatment recommendation engines", "Compliance automation"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    result: "312% increase in patient acquisition"
  },
  {
    title: "Real Estate AI Marketing", 
    description: "Intelligent property matching and predictive lead scoring for maximum conversions",
    features: ["Property recommendation AI", "Lead quality scoring", "Price prediction models", "Market trend analysis"],
    icon: Building,
    color: "from-blue-500 to-purple-600",
    result: "285% more qualified property leads"
  },
  {
    title: "Travel AI Marketing",
    description: "Personalized travel recommendations and dynamic pricing optimization",
    features: ["Destination recommendations", "Dynamic pricing models", "Seasonal demand prediction", "Experience personalization"],
    icon: Plane,
    color: "from-green-500 to-teal-600",
    result: "425% increase in booking conversions"
  }
];

const aiTools = [
  {
    title: "Smart Audience Targeting",
    description: "AI algorithms that identify and target your ideal customers with 90% accuracy",
    features: ["Behavioral pattern analysis", "Lookalike audience creation", "Intent prediction", "Cross-platform targeting"],
    result: "87% improvement in audience quality"
  },
  {
    title: "Predictive Campaign Analytics",
    description: "Machine learning models that forecast campaign performance and optimize in real-time",
    features: ["Performance forecasting", "Budget optimization", "Trend prediction", "ROI maximization"],
    result: "145% increase in campaign ROI"
  },
  {
    title: "Dynamic Content Generation",
    description: "AI-powered creative optimization that generates and tests thousands of ad variations",
    features: ["Auto-generated ad copy", "Dynamic image optimization", "A/B testing automation", "Creative performance analysis"],
    result: "78% higher engagement rates"
  },
  {
    title: "Intelligent Automation",
    description: "Automated campaign management that optimizes bids, budgets, and targeting 24/7",
    features: ["Automated bid management", "Smart budget allocation", "Performance monitoring", "Real-time adjustments"],
    result: "92% reduction in manual optimization time"
  }
];

const aiImplementationProcess = [
  {
    phase: "Data Assessment & Setup",
    description: "Analyze your current data and implement AI tracking infrastructure",
    activities: ["Data audit", "Tracking implementation", "AI tool setup", "Baseline establishment"],
    duration: "1-2 weeks"
  },
  {
    phase: "AI Model Training", 
    description: "Train machine learning models on your specific industry and customer data",
    activities: ["Model development", "Data training", "Algorithm optimization", "Performance testing"],
    duration: "2-3 weeks"
  },
  {
    phase: "Campaign Deployment",
    description: "Launch AI-powered campaigns with intelligent automation and optimization",
    activities: ["Campaign launch", "AI automation setup", "Performance monitoring", "Initial optimization"],
    duration: "1 week"
  },
  {
    phase: "Continuous Learning & Optimization",
    description: "AI systems continuously learn and improve campaign performance automatically",
    activities: ["Performance analysis", "Model refinement", "Strategy adjustment", "Scaling optimization"],
    duration: "Ongoing"
  }
];

const caseStudies = [
  {
    client: "Multi-Specialty Medical Center",
    challenge: "Struggling to efficiently target patients for different specialties with traditional advertising",
    solution: "Implemented AI-powered patient targeting system with specialty-specific prediction models",
    result: "312% increase in specialist appointments, 65% reduction in cost per acquisition"
  },
  {
    client: "Luxury Real Estate Group",
    challenge: "High advertising costs with low-quality leads and poor conversion rates",
    solution: "Deployed AI lead scoring and property recommendation engine with predictive analytics",
    result: "285% more qualified leads, 180% increase in property showings, 45% higher closing rate"
  },
  {
    client: "Adventure Travel Company",
    challenge: "Seasonal demand fluctuations and difficulty predicting customer preferences",
    solution: "Built AI-powered demand forecasting and personalized experience recommendation system",
    result: "425% increase in booking conversions, 60% improvement in customer lifetime value"
  }
];

const aiTechnologies = [
  { name: "Machine Learning", description: "TensorFlow, PyTorch, Scikit-learn" },
  { name: "Predictive Analytics", description: "Statistical modeling, forecasting" },
  { name: "Natural Language Processing", description: "GPT, BERT, sentiment analysis" },
  { name: "Computer Vision", description: "Image recognition, visual optimization" },
  { name: "Automation Platforms", description: "Google AI, Facebook AI, custom APIs" },
  { name: "Data Processing", description: "Big data analytics, real-time processing" }
];

export default function AIMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30">
                AI Marketing
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Artificial Intelligence
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent block">
                Marketing That Learns & Optimizes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-violet-100 mb-8 leading-relaxed">
              Harness the power of machine learning and AI to create campaigns that continuously improve performance
            </p>
            <div className="bg-violet-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-violet-300">
                Average 312% improvement in conversion rates with AI optimization
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-4 text-lg">
                Get AI Marketing Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-900 px-8 py-4 text-lg">
                See AI in Action
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Marketing Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced artificial intelligence solutions that transform your marketing performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiMarketingServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-violet-500 flex-shrink-0" />
                    <p className="font-medium">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Marketing Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI solutions that revolutionize campaign performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {aiTools.map((tool, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-violet-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-violet-700">{tool.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific AI */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific AI Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI marketing systems tailored for healthcare, real estate, and travel industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryAIStrategies.map((strategy, index) => {
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
                          <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-violet-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-violet-700">{strategy.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Implementation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to implementing AI marketing solutions
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {aiImplementationProcess.map((phase, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <div className="text-sm text-violet-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm">
                          <Brain className="w-4 h-4 text-violet-500 mr-3 flex-shrink-0" />
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

      {/* AI Technologies */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge artificial intelligence and machine learning technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTechnologies.map((tech, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Marketing Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our AI-powered marketing campaigns
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
                    <h4 className="font-semibold text-blue-600 mb-2">AI Solution:</h4>
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
      <section className="py-24 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Marketing with AI?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how artificial intelligence can revolutionize your marketing performance and ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get AI Marketing Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 text-lg">
              Schedule AI Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 