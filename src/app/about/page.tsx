import React from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Users, Award, TrendingUp, Heart, Shield, Lightbulb, Handshake, Zap, MapPin, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const companyStats = [
  { value: '$50M+', label: 'Revenue Generated for Clients', icon: TrendingUp },
  { value: '250+', label: 'Successful Campaigns', icon: Target },
  { value: '98%', label: 'Client Retention Rate', icon: Users },
  { value: '15+', label: 'Industries Served', icon: Award }
];

const coreValues = [
  {
    title: 'Results-Driven',
    description: 'Every strategy is built for measurable outcomes and ROI',
    icon: Target,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Industry Expertise',
    description: 'Deep specialization in healthcare, real estate, and travel',
    icon: Heart,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Transparency',
    description: 'Clear reporting and honest communication in everything we do',
    icon: Shield,
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Innovation',
    description: 'Cutting-edge tools and methodologies for modern marketing',
    icon: Lightbulb,
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'Partnership',
    description: 'Long-term relationships, not just one-time projects',
    icon: Handshake,
    color: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'Excellence',
    description: 'Continuous learning and development for outstanding results',
    icon: Zap,
    color: 'from-teal-500 to-green-600'
  }
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    bio: 'Former healthcare marketing director with 12+ years of experience building patient acquisition systems. Led marketing teams at 3 Fortune 500 medical companies.',
    image: '/team/sarah-johnson.jpg',
    linkedin: 'https://linkedin.com/in/sarah-johnson',
    twitter: 'https://twitter.com/sarahjohnson',
    expertise: ['Healthcare Marketing', 'Strategy', 'Leadership']
  },
  {
    name: 'Michael Rodriguez',
    position: 'Director of Real Estate Marketing',
    bio: 'Real estate marketing specialist who has generated over $100M in property sales. Expert in luxury market positioning and lead generation systems.',
    image: '/team/michael-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/michael-rodriguez',
    twitter: 'https://twitter.com/mrodriguez',
    expertise: ['Real Estate', 'Lead Generation', 'Luxury Marketing']
  },
  {
    name: 'Emma Thompson',
    position: 'Head of Travel & Tourism',
    bio: 'Travel industry veteran with experience at major tourism boards and hospitality brands. Specializes in destination marketing and seasonal optimization.',
    image: '/team/emma-thompson.jpg',
    linkedin: 'https://linkedin.com/in/emma-thompson',
    twitter: 'https://twitter.com/emmathompson',
    expertise: ['Travel Marketing', 'Tourism', 'Content Strategy']
  },
  {
    name: 'David Chen',
    position: 'VP of Technology & Analytics',
    bio: 'Former Google product manager and data scientist. Builds custom marketing tools and analytics systems that drive our proprietary frameworks.',
    image: '/team/david-chen.jpg',
    linkedin: 'https://linkedin.com/in/david-chen',
    twitter: 'https://twitter.com/davidchen',
    expertise: ['Marketing Technology', 'Analytics', 'Automation']
  },
  {
    name: 'Lisa Martinez',
    position: 'Creative Director',
    bio: 'Award-winning creative director with expertise in healthcare, real estate, and travel brand development. Led creative teams at top advertising agencies.',
    image: '/team/lisa-martinez.jpg',
    linkedin: 'https://linkedin.com/in/lisa-martinez',
    twitter: 'https://twitter.com/lisamartinez',
    expertise: ['Creative Strategy', 'Brand Development', 'Design']
  },
  {
    name: 'Robert Kim',
    position: 'Senior Content Strategist',
    bio: 'Medical writer and content strategist with deep healthcare knowledge. Creates HIPAA-compliant content that educates and converts patients.',
    image: '/team/robert-kim.jpg',
    linkedin: 'https://linkedin.com/in/robert-kim',
    twitter: 'https://twitter.com/robertkim',
    expertise: ['Content Marketing', 'Medical Writing', 'SEO']
  }
];

const achievements = [
  { year: '2019', milestone: 'MonkMantra Founded', description: 'Started with healthcare marketing specialization' },
  { year: '2020', milestone: 'First $10M Generated', description: 'Reached major revenue milestone for clients' },
  { year: '2021', milestone: 'Expanded to Real Estate', description: 'Added real estate marketing vertical' },
  { year: '2022', milestone: 'Travel & Tourism Launch', description: 'Entered travel and tourism market' },
  { year: '2023', milestone: '$50M Revenue Generated', description: 'Achieved major client success milestone' },
  { year: '2024', milestone: 'Industry Recognition', description: 'Named Top Digital Marketing Agency' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Built by Marketers,
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent block">
                for Marketers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We&apos;re a team of industry specialists who understand the unique challenges of healthcare, real estate, and travel marketing
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  MonkMantra was born from frustration with generic, one-size-fits-all marketing approaches. As experienced digital marketers working in healthcare, real estate, and travel, we saw firsthand how industry-specific knowledge makes all the difference.
                </p>
                <p>
                  Healthcare requires HIPAA compliance and medical expertise. Real estate demands local market knowledge and lead nurturing systems. Travel needs seasonal optimization and destination marketing skills. Generic agencies simply can&apos;t deliver these specialized requirements.
                </p>
                <p>
                  That&apos;s why we built MonkMantra - to democratize enterprise-level, industry-specific marketing strategies for businesses of all sizes. Our proprietary frameworks have now generated over $50M in revenue for our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg mb-6">
                  To empower businesses in healthcare, real estate, and travel with marketing strategies that drive measurable growth and meaningful impact.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg">
                  To become the go-to strategic partner for industry-leading companies seeking exponential growth through innovative digital marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardHeader>
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${value.color} rounded-2xl w-fit`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry experts with proven track records in their specialized fields
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link 
                        href={member.linkedin} 
                        target="_blank"
                        aria-label={`Visit ${member.name}'s LinkedIn profile`}
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link 
                        href={member.twitter} 
                        target="_blank"
                        aria-label={`Visit ${member.name}'s Twitter profile`}
                      >
                        <TwitterIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth and success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

              {achievements.map((achievement, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                  <div className={`bg-white rounded-lg shadow-lg p-6 max-w-sm ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-blue-600 text-white">{achievement.year}</Badge>
                      <h3 className="font-bold text-lg">{achievement.milestone}</h3>
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Remote Work */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture & Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Remote-First Team</h3>
                    <p className="text-muted-foreground">Our distributed team spans multiple time zones, bringing diverse perspectives and 24/7 client support capabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground">We invest heavily in our team&apos;s development, staying current with industry changes and emerging technologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Client-Centric Focus</h3>
                    <p className="text-muted-foreground">Every decision we make is guided by what will deliver the best results for our clients&apos; businesses.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Want to Join Our Team?</h3>
              <p className="text-lg mb-6">
                We&apos;re always looking for talented marketers who are passionate about driving real results in healthcare, real estate, and travel industries.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Industry Experts?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our specialized knowledge can drive growth for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Schedule a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 