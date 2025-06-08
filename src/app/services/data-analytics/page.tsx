import React from 'react';
import { ArrowRight, Database, CheckCircle, BarChart3, TrendingUp, Target, Heart, Building, Plane, Activity, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const analyticsServices = [
  "Custom business intelligence dashboards",
  "Predictive analytics and forecasting", 
  "Multi-touch attribution modeling",
  "Real-time performance monitoring",
  "Data integration and warehouse solutions",
  "Automated reporting and insights generation"
];

const industryAnalytics = [
  {
    title: "Healthcare Analytics",
    description: "HIPAA-compliant patient data analysis and medical practice intelligence systems",
    features: ["Patient lifetime value analysis", "Treatment outcome tracking", "Appointment optimization", "Revenue cycle analytics"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    result: "95% improvement in patient acquisition ROI tracking"
  },
  {
    title: "Real Estate Analytics", 
    description: "Market intelligence and property performance analytics for agents and brokers",
    features: ["Market trend analysis", "Lead scoring optimization", "Property valuation models", "Commission forecasting"],
    icon: Building,
    color: "from-blue-500 to-purple-600",
    result: "78% more accurate lead quality predictions"
  },
  {
    title: "Travel Analytics",
    description: "Booking intelligence and customer journey analytics for travel companies",
    features: ["Seasonal demand forecasting", "Customer lifetime value", "Booking pattern analysis", "Revenue optimization"],
    icon: Plane,
    color: "from-green-500 to-teal-600",
    result: "240% improvement in revenue forecasting accuracy"
  }
];

const analyticsTools = [
  {
    title: "Advanced BI Dashboards",
    description: "Custom-built business intelligence dashboards with real-time data visualization",
    features: ["Real-time KPI tracking", "Interactive data visualization", "Custom report generation", "Mobile-optimized views"],
    result: "85% faster access to critical business insights"
  },
  {
    title: "Predictive Analytics Platform",
    description: "AI-powered forecasting and trend analysis for strategic decision making",
    features: ["Revenue forecasting", "Customer behavior prediction", "Market trend analysis", "Risk assessment modeling"],
    result: "92% improvement in forecasting accuracy"
  },
  {
    title: "Attribution & ROI Tracking",
    description: "Multi-touch attribution models that reveal true marketing performance",
    features: ["Cross-channel attribution", "Customer journey mapping", "ROI calculation", "Campaign performance analysis"],
    result: "95% improvement in marketing ROI visibility"
  },
  {
    title: "Automated Intelligence Reports",
    description: "AI-generated insights and recommendations delivered automatically",
    features: ["Automated anomaly detection", "Performance alerts", "Trend identification", "Actionable recommendations"],
    result: "70% reduction in manual reporting time"
  }
];

const implementationProcess = [
  {
    phase: "Data Assessment & Strategy",
    description: "Analyze current data infrastructure and define analytics strategy",
    activities: ["Data audit", "Source identification", "Quality assessment", "Strategy development"],
    duration: "1-2 weeks"
  },
  {
    phase: "Infrastructure Setup", 
    description: "Build data warehouse and establish secure data pipelines",
    activities: ["Database design", "ETL pipeline setup", "Security implementation", "Integration testing"],
    duration: "2-4 weeks"
  },
  {
    phase: "Dashboard Development",
    description: "Create custom analytics dashboards and reporting systems",
    activities: ["Dashboard design", "Visualization development", "User interface creation", "Performance optimization"],
    duration: "3-4 weeks"
  },
  {
    phase: "Training & Optimization",
    description: "Train your team and continuously optimize based on usage patterns",
    activities: ["User training", "Documentation", "Performance monitoring", "Continuous improvement"],
    duration: "1-2 weeks + ongoing"
  }
];

const caseStudies = [
  {
    client: "Multi-Location Medical Practice",
    challenge: "Unable to track patient acquisition costs and ROI across different marketing channels",
    solution: "Built comprehensive healthcare analytics platform with patient journey tracking and HIPAA-compliant reporting",
    result: "95% improvement in ROI tracking, 40% reduction in patient acquisition costs, 60% faster reporting"
  },
  {
    client: "Luxury Real Estate Agency",
    challenge: "Difficulty predicting which leads would convert and optimizing marketing spend",
    solution: "Implemented predictive lead scoring model and market intelligence dashboard with property analytics",
    result: "78% more accurate lead predictions, 65% better marketing ROI, 3x faster market analysis"
  },
  {
    client: "Adventure Travel Company",
    challenge: "Seasonal booking fluctuations and poor visibility into customer lifetime value",
    solution: "Created travel analytics platform with demand forecasting and customer value optimization",
    result: "240% improvement in revenue forecasting, 55% increase in customer lifetime value, 80% better capacity planning"
  }
];

const analyticsTechnologies = [
  { name: "Data Visualization", description: "Tableau, Power BI, D3.js, Chart.js" },
  { name: "Data Processing", description: "Python, R, SQL, Apache Spark" },
  { name: "Machine Learning", description: "TensorFlow, Scikit-learn, PyTorch" },
  { name: "Data Warehouses", description: "Snowflake, BigQuery, Redshift" },
  { name: "Business Intelligence", description: "Looker, Qlik, Sisense" },
  { name: "Analytics Platforms", description: "Google Analytics 4, Adobe Analytics" }
];

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                Data Analytics & Business Intelligence
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Data Into
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent block">
                Actionable Business Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
              Advanced analytics and AI-powered insights that drive smarter decisions and measurable growth
            </p>
            <div className="bg-emerald-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-emerald-300">
                Average 95% improvement in decision-making speed with data-driven insights
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg">
                Get Analytics Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 text-lg">
                View Dashboard Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics & Intelligence Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data solutions that transform raw information into strategic business advantages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                    <p className="font-medium">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced tools and platforms that provide deep insights into your business performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {analyticsTools.map((tool, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-emerald-700">{tool.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Analytics */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Analytics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized analytics solutions designed for healthcare, real estate, and travel industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryAnalytics.map((analytics, index) => {
              const Icon = analytics.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${analytics.color} rounded-2xl w-fit`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center">{analytics.title}</CardTitle>
                    <CardDescription className="text-center">{analytics.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {analytics.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-emerald-700">{analytics.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Implementation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to building comprehensive analytics and business intelligence solutions
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {implementationProcess.map((phase, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <div className="text-sm text-emerald-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm">
                          <Database className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading platforms and tools for comprehensive data analytics and business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticsTechnologies.map((tech, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our data analytics and business intelligence implementations
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
                    <h4 className="font-semibold text-blue-600 mb-2">Analytics Solution:</h4>
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
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Data Into Business Intelligence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how advanced analytics can provide the insights you need to drive growth and optimization
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Analytics Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg">
              Schedule Analytics Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 