import React from 'react';
import { ArrowRight, Video, CheckCircle, Play, Camera, Film, Heart, Building, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const videoServices = [
  "Commercial video production and advertising",
  "Social media video content creation", 
  "Customer testimonial and case study videos",
  "Animated explainer videos and motion graphics",
  "Live event filming and documentation",
  "Video marketing strategy and distribution"
];

const videoTools = [
  {
    title: "Commercial Production Suite",
    description: "Full-service video production for marketing, advertising, and brand campaigns",
    features: ["4K/8K filming", "Professional lighting", "Multi-camera setups", "Post-production editing"],
    result: "Average 350% increase in engagement rates"
  },
  {
    title: "Social Media Video Creator",
    description: "Platform-optimized video content for social media marketing and advertising",
    features: ["Platform-specific formats", "Quick turnaround", "Trending content", "Viral optimization"],
    result: "65% improvement in social media reach"
  },
  {
    title: "Testimonial Video System",
    description: "Professional customer testimonial and case study video production",
    features: ["Interview setup", "Story development", "Trust-building elements", "Conversion optimization"],
    result: "280% increase in conversion rates"
  },
  {
    title: "Animation Studio",
    description: "Custom animated explainer videos and motion graphics for complex concepts",
    features: ["2D/3D animation", "Explainer videos", "Motion graphics", "Brand animations"],
    result: "75% improvement in concept understanding"
  }
];

const industryVideo = [
  {
    title: "Healthcare Video Production",
    description: "HIPAA-compliant medical video content for practices and health organizations",
    features: ["Patient testimonials", "Treatment explanations", "Medical procedure videos", "Health education content"],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    result: "350% increase in patient engagement"
  },
  {
    title: "Real Estate Video Production", 
    description: "Property-focused video content for agents, brokers, and real estate marketing",
    features: ["Property tours", "Agent introductions", "Market updates", "Client testimonials"],
    icon: Building,
    color: "from-blue-500 to-purple-600",
    result: "400% more property inquiries"
  },
  {
    title: "Travel Video Production",
    description: "Tourism and travel video content for agencies and hospitality businesses",
    features: ["Destination showcases", "Travel experiences", "Guest testimonials", "Adventure documentation"],
    icon: Plane,
    color: "from-green-500 to-teal-600",
    result: "450% increase in booking conversions"
  }
];

const videoProcess = [
  {
    phase: "Concept & Planning",
    description: "Develop video strategy, concepts, and detailed production planning",
    activities: ["Strategy development", "Concept creation", "Script writing", "Production planning"],
    duration: "1-2 weeks"
  },
  {
    phase: "Pre-Production", 
    description: "Prepare all elements needed for successful video production",
    activities: ["Location scouting", "Talent casting", "Equipment setup", "Timeline coordination"],
    duration: "1 week"
  },
  {
    phase: "Production & Filming",
    description: "Professional video production with high-quality equipment and expertise",
    activities: ["Video filming", "Audio recording", "Multiple takes", "Quality control"],
    duration: "1-3 days"
  },
  {
    phase: "Post-Production & Distribution",
    description: "Professional editing and strategic distribution across marketing channels",
    activities: ["Video editing", "Color correction", "Audio mixing", "Distribution strategy"],
    duration: "1-2 weeks"
  }
];

const caseStudies = [
  {
    client: "Specialty Healthcare Network",
    challenge: "Complex medical procedures difficult to explain to patients, leading to low treatment acceptance",
    solution: "Created animated explainer videos and patient testimonials for each treatment with before/after documentation",
    result: "350% increase in patient engagement, 85% improvement in treatment acceptance, 90% reduction in consultation time"
  },
  {
    client: "Luxury Real Estate Group",
    challenge: "High-end properties difficult to showcase effectively online, resulting in fewer qualified showings",
    solution: "Produced cinematic property tours with drone footage and agent-hosted walkthroughs for premium listings",
    result: "400% more property inquiries, 250% increase in qualified showings, 60% faster sales cycles"
  },
  {
    client: "Adventure Travel Company",
    challenge: "Difficulty conveying the excitement and experience of adventure packages online",
    solution: "Created immersive destination videos with guest testimonials and adventure documentation",
    result: "450% increase in booking conversions, 200% growth in social media following, 75% higher package values"
  }
];

const videoTechnologies = [
  { name: "Filming Equipment", description: "4K/8K cameras, professional lighting, drones" },
  { name: "Audio Systems", description: "Professional microphones, audio recording, mixing" },
  { name: "Editing Software", description: "Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve" },
  { name: "Animation Tools", description: "After Effects, Cinema 4D, Blender" },
  { name: "Distribution Platforms", description: "YouTube, Vimeo, social media optimization" },
  { name: "Analytics Tracking", description: "Video engagement metrics, conversion tracking" }
];

export default function VideoProductionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-red-900 to-pink-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                Video Production & Marketing
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Create Engaging Videos
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent block">
                That Drive Results
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              Professional video content that engages audiences and converts viewers into customers
            </p>
            <div className="bg-red-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-red-300">
                Average 350% increase in engagement rates through strategic video content
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 text-lg">
                Start Video Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 text-lg">
                View Video Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Services */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Production Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete video production solutions from concept to distribution and marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <p className="font-medium">{service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tools */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Production Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional video production tools and expertise for maximum impact and engagement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {videoTools.map((tool, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-red-700">{tool.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Video */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Video Production</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized video content strategies for healthcare, real estate, and travel industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryVideo.map((industry, index) => {
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
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-red-700">{industry.result}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Process */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Production Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to creating high-quality video content that delivers results
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {videoProcess.map((phase, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <div className="text-sm text-red-600 font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <CardDescription>{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center text-sm">
                          <Video className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Production Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional equipment and software for creating exceptional video content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTechnologies.map((tech, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Production Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from our video production and marketing campaigns
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
                    <h4 className="font-semibold text-blue-600 mb-2">Video Solution:</h4>
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
      <section className="py-24 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Compelling Video Content?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how professional video production can transform your marketing and drive exceptional results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Video Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg">
              Schedule Video Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 