"use client"

import { TrendingUp, Users, DollarSign, Award, Sparkles, Star } from "lucide-react"
import { useState, useEffect } from "react"

const stats = [
  {
    icon: TrendingUp,
    value: 250,
    suffix: "+",
    label: "Successful Campaigns",
    description: "Delivered across healthcare, real estate, and travel industries",
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-400"
  },
  {
    icon: DollarSign,
    value: 50,
    suffix: "M+",
    label: "Revenue Generated",
    description: "For our clients using proprietary frameworks and strategies",
    gradient: "from-green-500 to-emerald-500",
    color: "text-green-400"
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Client Retention Rate",
    description: "Long-term partnerships built on consistent results",
    gradient: "from-purple-500 to-pink-500",
    color: "text-purple-400"
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Industries Served",
    description: "With specialized expertise in key growth sectors",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-400"
  }
]

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Deterministic pseudo-random helper to avoid hydration mismatches
const pr = (seed: number) => {
  const x = Math.sin(seed * 8797) * 10000;
  return x - Math.floor(x);
};

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="stats-section"
      className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Stars */}
        <Star className="absolute top-20 left-20 h-4 w-4 text-yellow-400/30 animate-pulse" />
        <Star className="absolute top-40 right-32 h-3 w-3 text-blue-400/40 animate-pulse delay-1000" />
        <Star className="absolute bottom-32 left-32 h-5 w-5 text-purple-400/30 animate-pulse delay-500" />
        <Star className="absolute bottom-20 right-20 h-4 w-4 text-pink-400/40 animate-pulse delay-1500" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm text-white mb-6">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            Our Impact
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Proven Results That
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our track record demonstrates our commitment to driving 
            <span className="text-green-400 font-semibold"> measurable growth</span> for every client.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index} 
                className="group text-center relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card Background */}
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} p-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className="h-full w-full bg-slate-900 rounded-2xl"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`mx-auto mb-6 p-4 bg-gradient-to-r ${stat.gradient} rounded-2xl w-fit group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Animated Number */}
                    <div className="mb-3">
                      <span className={`text-5xl md:text-6xl font-bold text-white block leading-none group-hover:scale-110 transition-transform duration-300`}>
                        {isVisible ? (
                          <AnimatedCounter 
                            value={stat.value} 
                            suffix={stat.suffix}
                            duration={2000 + (index * 200)}
                          />
                        ) : (
                          `0${stat.suffix}`
                        )}
                      </span>
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                      {stat.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-blue-100 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.description}
                    </p>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 text-white">
              <Award className="h-6 w-6 text-yellow-400" />
              <span className="text-xl font-semibold">Trusted by Industry Leaders Worldwide</span>
              <Award className="h-6 w-6 text-yellow-400" />
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {['Google Partner', 'Meta Business Partner', 'HubSpot Certified', 'Salesforce Partner'].map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white hover:bg-white/20 transition-colors duration-300"
                >
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${pr(i) * 100}%`,
              top: `${pr(i + 20) * 100}%`,
              animationDelay: `${pr(i + 40) * 3}s`,
              animationDuration: `${3 + pr(i + 60) * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  )
} 