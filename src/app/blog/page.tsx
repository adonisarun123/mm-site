import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, TrendingUp, Heart, Building, Plane, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 'healthcare-seo-guide-2024',
    title: 'The Complete Guide to Healthcare SEO in 2024: HIPAA-Compliant Strategies That Work',
    excerpt: 'Learn how to optimize your medical practice website for search engines while maintaining HIPAA compliance and building patient trust.',
    content: 'healthcare-seo-guide',
    author: 'Dr. Sarah Martinez',
    authorRole: 'Healthcare Marketing Specialist',
    category: 'Healthcare Marketing',
    tags: ['SEO', 'Healthcare', 'HIPAA', 'Medical Marketing'],
    featuredImage: '/blog/healthcare-seo-2024.jpg',
    published: true,
    publishedAt: '2024-01-15',
    readTime: 8,
    featured: true,
    icon: Heart
  },
  {
    id: 'real-estate-lead-generation',
    title: 'Real Estate Lead Generation: 7 Proven Strategies That Generated 10,000+ Leads',
    excerpt: 'Discover the exact lead generation tactics we used to help real estate clients generate over 10,000 qualified leads in 12 months.',
    content: 'real-estate-lead-generation',
    author: 'Michael Rodriguez',
    authorRole: 'Real Estate Marketing Expert',
    category: 'Real Estate Marketing',
    tags: ['Lead Generation', 'Real Estate', 'Google Ads', 'Facebook Ads'],
    featuredImage: '/blog/real-estate-leads-2024.jpg',
    published: true,
    publishedAt: '2024-01-10',
    readTime: 12,
    featured: true,
    icon: Building
  },
  {
    id: 'travel-marketing-seasonal-strategies',
    title: 'Travel Marketing: How to Overcome Seasonal Booking Challenges',
    excerpt: 'Master the art of year-round travel marketing with strategies that turn off-seasons into profitable periods.',
    content: 'travel-marketing-seasonal',
    author: 'Emma Thompson',
    authorRole: 'Travel Industry Specialist',
    category: 'Travel Marketing',
    tags: ['Travel Marketing', 'Seasonal Marketing', 'Tourism', 'Booking Optimization'],
    featuredImage: '/blog/travel-seasonal-marketing.jpg',
    published: true,
    publishedAt: '2024-01-05',
    readTime: 6,
    featured: true,
    icon: Plane
  },
  {
    id: 'content-marketing-roi-measurement',
    title: 'Measuring Content Marketing ROI: A Data-Driven Approach',
    excerpt: 'Learn how to track and measure the true impact of your content marketing efforts with actionable metrics and KPIs.',
    content: 'content-marketing-roi',
    author: 'David Chen',
    authorRole: 'Content Strategy Director',
    category: 'Content Marketing',
    tags: ['Content Marketing', 'ROI', 'Analytics', 'KPIs'],
    featuredImage: '/blog/content-marketing-roi.jpg',
    published: true,
    publishedAt: '2024-01-02',
    readTime: 10,
    featured: false,
    icon: TrendingUp
  },
  {
    id: 'google-ads-medical-practices',
    title: 'Google Ads for Medical Practices: Compliance and Performance Guide',
    excerpt: 'Navigate Google Ads regulations for healthcare while maximizing patient acquisition and maintaining ethical marketing practices.',
    content: 'google-ads-medical',
    author: 'Dr. Jennifer Park',
    authorRole: 'Medical Marketing Consultant',
    category: 'Healthcare Marketing',
    tags: ['Google Ads', 'Healthcare', 'Medical Marketing', 'PPC'],
    featuredImage: '/blog/google-ads-medical.jpg',
    published: true,
    publishedAt: '2023-12-28',
    readTime: 9,
    featured: false,
    icon: Heart
  },
  {
    id: 'real-estate-social-media-strategy',
    title: 'Social Media Marketing for Real Estate: Platform-Specific Strategies',
    excerpt: 'Discover which social media platforms drive the best results for real estate professionals and how to optimize each channel.',
    content: 'real-estate-social-media',
    author: 'Lisa Johnson',
    authorRole: 'Social Media Strategist',
    category: 'Real Estate Marketing',
    tags: ['Social Media', 'Real Estate', 'Instagram', 'LinkedIn'],
    featuredImage: '/blog/real-estate-social-media.jpg',
    published: true,
    publishedAt: '2023-12-25',
    readTime: 7,
    featured: false,
    icon: Building
  },
  {
    id: 'travel-influencer-marketing',
    title: 'Travel Influencer Marketing: Finding the Right Partners for Your Destination',
    excerpt: 'Learn how to identify, partner with, and measure the success of travel influencer collaborations for maximum destination exposure.',
    content: 'travel-influencer-marketing',
    author: 'Alex Rivera',
    authorRole: 'Influencer Marketing Manager',
    category: 'Travel Marketing',
    tags: ['Influencer Marketing', 'Travel', 'Tourism', 'Brand Partnerships'],
    featuredImage: '/blog/travel-influencer-marketing.jpg',
    published: true,
    publishedAt: '2023-12-20',
    readTime: 8,
    featured: false,
    icon: Plane
  },
  {
    id: 'marketing-automation-healthcare',
    title: 'Marketing Automation for Healthcare: Patient Journey Optimization',
    excerpt: 'Implement HIPAA-compliant marketing automation to nurture patient relationships and improve appointment booking rates.',
    content: 'marketing-automation-healthcare',
    author: 'Dr. Robert Kim',
    authorRole: 'Healthcare Technology Specialist',
    category: 'Healthcare Marketing',
    tags: ['Marketing Automation', 'Healthcare', 'Patient Journey', 'CRM'],
    featuredImage: '/blog/healthcare-automation.jpg',
    published: true,
    publishedAt: '2023-12-15',
    readTime: 11,
    featured: false,
    icon: Heart
  },
  {
    id: 'real-estate-video-marketing',
    title: 'Video Marketing for Real Estate: From Virtual Tours to Social Content',
    excerpt: 'Master video marketing techniques that showcase properties effectively and build trust with potential buyers and sellers.',
    content: 'real-estate-video-marketing',
    author: 'Tom Wilson',
    authorRole: 'Video Marketing Specialist',
    category: 'Real Estate Marketing',
    tags: ['Video Marketing', 'Real Estate', 'Virtual Tours', 'YouTube'],
    featuredImage: '/blog/real-estate-video.jpg',
    published: true,
    publishedAt: '2023-12-10',
    readTime: 6,
    featured: false,
    icon: Building
  }
];

const categories = [
  { name: 'All Posts', count: blogPosts.length, active: true },
  { name: 'Healthcare Marketing', count: blogPosts.filter(post => post.category === 'Healthcare Marketing').length, active: false },
  { name: 'Real Estate Marketing', count: blogPosts.filter(post => post.category === 'Real Estate Marketing').length, active: false },
  { name: 'Travel Marketing', count: blogPosts.filter(post => post.category === 'Travel Marketing').length, active: false },
  { name: 'Content Marketing', count: blogPosts.filter(post => post.category === 'Content Marketing').length, active: false }
];

const featuredTopics = [
  { title: 'Healthcare SEO', description: 'HIPAA-compliant search optimization strategies' },
  { title: 'Real Estate Leads', description: 'Proven lead generation techniques' },
  { title: 'Travel Marketing', description: 'Seasonal and destination marketing' },
  { title: 'Content Strategy', description: 'ROI-focused content approaches' }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Marketing Insights &
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent block">
                Industry Expertise
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Stay ahead with actionable strategies, case studies, and insights from healthcare, real estate, and travel marketing experts
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${category.active ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most popular and impactful marketing insights
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => {
              const Icon = post.icon;
              return (
                <Card key={post.id} className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Icon className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-gray-900">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} min read
                      </div>
                    </div>
                    <CardTitle className={`group-hover:text-blue-600 transition-colors ${index === 0 ? 'text-xl' : 'text-lg'}`}>
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <Button asChild className="w-full group-hover:bg-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fresh insights and strategies from our marketing experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => {
              const Icon = post.icon;
              return (
                <Card key={post.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{post.excerpt.substring(0, 120)}...</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Topics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most discussed marketing topics and strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTopics.map((topic, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Explore Topic
                    <Search className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Marketing Insights
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get weekly marketing tips, case studies, and industry insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <div className="flex-1 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            Join 5,000+ marketing professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
} 