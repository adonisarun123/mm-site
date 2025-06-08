"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, TrendingUp, Play, Pause } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleVideo = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          {/* Fallback gradient background if video doesn't load */}
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>
        
        {/* Video Control Button */}
        <button
          onClick={toggleVideo}
          className="absolute top-6 right-6 z-20 p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all duration-300 group"
          aria-label={isVideoPlaying ? "Pause video" : "Play video"}
        >
          {isVideoPlaying ? (
            <Pause className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Fallback Gradient Background (shown when video is loading or failed) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 -z-10" />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      
      {/* Parallax Mouse Effect */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      >
        {/* Floating Icons */}
        <Star className="absolute top-20 left-20 h-6 w-6 text-yellow-400 animate-pulse" />
        <Zap className="absolute top-32 right-32 h-8 w-8 text-blue-400 animate-bounce" />
        <TrendingUp className="absolute bottom-32 left-32 h-10 w-10 text-green-400 animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm text-white mb-8 animate-fade-in">
          <Star className="h-4 w-4 text-yellow-400" />
          <span>Trusted by 250+ Growing Businesses</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* Main Headline with Gradient Text */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Drive Exponential Growth in
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Healthcare, Real Estate & Travel
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed animate-slide-up delay-300">
          We&apos;ve generated <span className="text-green-400 font-bold text-3xl">$50M+</span> in revenue for clients using our 
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold"> proprietary frameworks</span> and data-driven strategies
        </p>

        {/* Video CTA Section */}
        <div className="mb-8 animate-slide-up delay-400">
          <div className="inline-flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 group" onClick={toggleVideo}>
                <Play className="h-6 w-6 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur opacity-50 animate-pulse"></div>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Watch Our Success Story</p>
              <p className="text-blue-200 text-sm">See how we transformed 250+ businesses</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up delay-500">
          <div className="text-center group">
            <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">250+</div>
            <div className="text-sm text-blue-200">Campaigns</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">98%</div>
            <div className="text-sm text-blue-200">Retention</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-sm text-blue-200">Industries</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-700">
          <Button 
            size="lg" 
            className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 border-0"
          >
            <span className="relative z-10">Get Your Free Marketing Audit</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-md blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <span>View Our Results</span>
            <TrendingUp className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-slide-up delay-1000">
          <p className="text-blue-200 text-sm mb-4">Trusted by industry leaders:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Healthcare Leaders', 'Real Estate Pros', 'Travel Giants', 'Fortune 500'].map((company, index) => (
              <div key={index} className="px-6 py-2 bg-white/5 rounded-full text-white text-sm hover:bg-white/10 transition-colors duration-300">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 