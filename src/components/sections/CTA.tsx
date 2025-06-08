"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Sparkles, Star, Clock, Award, Users } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const benefits = [
  "Free comprehensive marketing audit",
  "Custom strategy recommendations", 
  "Industry-specific insights",
  "No obligation consultation"
]

const testimonialQuotes = [
  {
    quote: "MonkMantra transformed our patient acquisition completely!",
    author: "Dr. Sarah Johnson",
    role: "Healthcare Director"
  },
  {
    quote: "Best ROI we've ever seen from a marketing agency.",
    author: "Michael Chen",
    role: "Real Estate CEO"
  },
  {
    quote: "Our bookings increased 300% in just 6 months.",
    author: "Lisa Thompson",
    role: "Tourism Manager"
  }
]

// Deterministic pseudo-random helper to avoid hydration mismatches
const pr = (seed: number) => {
  const x = Math.sin(seed * 9973) * 10000;
  return x - Math.floor(x);
};

export function CTA() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialQuotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let last = 0;
    const throttle = 60; // ms
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last > throttle) {
        last = now;
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Moving Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Stars */}
        {[...Array(8)].map((_, i) => (
          <Star
            key={i}
            className="absolute animate-pulse text-white/20"
            style={{
              left: `${pr(i) * 100}%`,
              top: `${pr(i + 20) * 100}%`,
              animationDelay: `${pr(i + 40) * 3}s`,
              transform: `scale(${0.5 + pr(i + 60) * 0.5})`
            }}
          />
        ))}
      </div>

      {/* Parallax Mouse Effect */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out opacity-10"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm text-white mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span>Ready to Transform Your Business?</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Ready to Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              Marketing Results?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get a comprehensive audit of your current marketing and discover 
            <span className="text-green-400 font-semibold"> untapped growth opportunities</span> in your industry.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center text-left p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-200 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Rotating Testimonials */}
          <div className="mb-12 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current mx-1" />
              ))}
            </div>
            <p className="text-lg text-white italic mb-4 min-h-[60px] flex items-center justify-center">
              &ldquo;{testimonialQuotes[currentTestimonial].quote}&rdquo;
            </p>
            <div className="text-blue-200">
              <p className="font-semibold">{testimonialQuotes[currentTestimonial].author}</p>
              <p className="text-sm opacity-80">{testimonialQuotes[currentTestimonial].role}</p>
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-4 space-x-3">
              {testimonialQuotes.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`w-4 h-4 p-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-white scale-110' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 border-0 rounded-2xl"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                  Get My Free Marketing Audit
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-10 py-6 text-xl backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-2xl"
              >
                <Clock className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Schedule Strategy Call</span>
              </Button>
            </Link>
          </div>

          {/* Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: "24 Hours", subtitle: "Response Time", color: "from-blue-500 to-cyan-500" },
              { icon: Users, title: "30 Minutes", subtitle: "Strategy Call", color: "from-purple-500 to-pink-500" },
              { icon: Award, title: "100% Free", subtitle: "No Commitment", color: "from-green-500 to-emerald-500" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${item.color} rounded-2xl w-fit group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.title}
                  </div>
                  <div className="text-blue-200">
                    {item.subtitle}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-blue-200 text-sm mb-6">
              Join 500+ businesses already growing with MonkMantra
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Fortune 500 Companies', 'Healthcare Leaders', 'Real Estate Pros', 'Travel Giants'].map((company, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full text-white text-sm hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
                >
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${pr(i) * 100}%`,
              top: `${pr(i + 30) * 100}%`,
              animationDelay: `${pr(i + 60) * 5}s`,
              animationDuration: `${2 + pr(i + 90) * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  )
} 