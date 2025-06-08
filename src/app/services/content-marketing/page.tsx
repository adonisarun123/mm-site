import React from 'react';
import Link from 'next/link';
import { ArrowRight, PenTool, CheckCircle, FileText, Video, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const contentTypes = [
  "Blog writing and optimization",
  "Video content creation", 
  "Infographic and visual content",
  "Email marketing content",
  "Social media content",
  "Whitepapers and case studies"
];

const industryContent = [
  {
    title: "Healthcare Content",
    description: "HIPAA-compliant content that educates and builds trust",
    features: ["Patient education materials", "Treatment explanations", "Health tips and preventive care"],
    result: "400% increase in organic traffic"
  },
  {
    title: "Real Estate Content", 
    description: "Market insights and property expertise content",
    features: ["Market reports and trends", "Home buying/selling guides", "Neighborhood spotlights"],
    result: "150% more qualified inquiries"
  },
  {
    title: "Travel Content",
    description: "Destination content that inspires and converts",
    features: ["Destination guides", "Travel tips and advice", "Local experience highlights"],
    result: "275% boost in engagement rates"
  }
];

const contentCategories = [
  {
    category: "Educational Content",
    description: "Build authority through valuable information",
    icon: FileText,
    examples: ["How-to guides", "Industry insights", "Best practices", "FAQ content"]
  },
  {
    category: "Trust-Building Content",
    description: "Establish credibility and social proof", 
    icon: CheckCircle,
    examples: ["Case studies", "Client testimonials", "Behind-the-scenes", "Team expertise"]
  },
  {
    category: "Conversion Content",
    description: "Drive action and generate leads",
    icon: ArrowRight,
    examples: ["Landing page copy", "Email sequences", "Product descriptions", "Free resource offers"]
  }
];

export default function ContentMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                Content Marketing
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Authority Through
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Strategic Content
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Industry-specific content that educates, engages, and converts your ideal customers
            </p>
            <div className="bg-purple-500/20 rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-purple-300">
                2.5x increase in qualified leads through content marketing
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg">
                Get Content Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                View Content Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Content That Converts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic content categories designed to move prospects through your funnel
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contentCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl w-fit">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                    <CardDescription className="text-center">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry-Specific Content */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Content</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored content strategies for your industry&apos;s unique needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryContent.map((content, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{content.title}</CardTitle>
                  <CardDescription>{content.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {content.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-purple-700">{content.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Create</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive content creation across all formats and channels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <PenTool className="h-6 w-6 text-purple-500 flex-shrink-0" />
                    <p className="font-medium">{type}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Distribution */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Content Distribution Strategy</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Creating great content is just the beginning. Our distribution strategy ensures maximum reach and engagement.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">SEO-Optimized Blogs</h3>
                <p className="text-sm text-muted-foreground">Ranking content that drives organic traffic</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="h-8 w-8 text-white" />
                </div>
                               <h3 className="font-semibold mb-2">Social Media</h3>
               <p className="text-sm text-muted-foreground">Platform-specific content amplification</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Email Marketing</h3>
                <p className="text-sm text-muted-foreground">Nurture sequences and newsletters</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Guest Publishing</h3>
                <p className="text-sm text-muted-foreground">Authority building through industry publications</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Performance Tracking</h3>
                <p className="text-sm text-muted-foreground">Data-driven optimization and reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Authority Through Content?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a comprehensive content strategy that drives engagement and conversions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Content Strategy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
              View Content Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 