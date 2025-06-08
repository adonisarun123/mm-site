"use client"

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, TrendingUp, Play, Pause, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";

// Deterministic pseudo-random helper to avoid hydration mismatches
const pr = (seed: number) => {
  const x = Math.sin(seed * 7919) * 10000;
  return x - Math.floor(x);
};

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const toggleVideo = () => {
    if (videoRef.current && videoLoaded) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          poster="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1500&q=70"
          // @ts-ignore - fetchPriority valid for modern browsers, not in TS typings
          fetchPriority="high"
        >
          <source src="https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-blue-900/60 to-indigo-900/75"></div>
        
        {/* Video Controls - Only show if video loaded */}
        {videoLoaded && (
          <div className="absolute top-6 right-6 z-20 flex gap-3">
            <button
              onClick={toggleVideo}
              className="p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all duration-300 group"
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? (
                <Pause className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
            
            <button
              onClick={toggleMute}
              className="p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all duration-300 group"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Volume2 className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Stunning Fallback Background (shown when video is loading/failed) */}
      {(!videoLoaded || videoError) && (
        <div className="absolute inset-0">
          {/* Advanced Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
          
          {/* Moving Mesh Gradient */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-blue-600/40 to-cyan-600/40 animate-gradient-x"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-orange-600/30 via-red-600/30 to-pink-600/30 animate-gradient-x" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Animated Network Lines */}
          <div className="absolute inset-0">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <g className="animate-pulse">
                <line x1="0" y1="20%" x2="100%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1"/>
                <line x1="0" y1="60%" x2="100%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1"/>
                <line x1="0" y1="80%" x2="100%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1"/>
              </g>
            </svg>
          </div>

          {/* Floating Data Points */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-float"
                style={{
                  left: `${pr(i) * 100}%`,
                  top: `${pr(i + 30) * 100}%`,
                  animationDelay: `${pr(i + 60) * 5}s`,
                  animationDuration: `${4 + pr(i + 90) * 6}s`
                }}
              />
            ))}
          </div>

          {/* Geometric Shapes */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-purple-400/30 rounded-full animate-spin-reverse"></div>
            <div className="absolute top-3/4 left-3/4 w-48 h-48 border border-cyan-400/30 rounded-full animate-bounce"></div>
          </div>

          {/* Binary Rain Effect */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="absolute text-green-400 text-xs font-mono animate-binary-rain"
                style={{
                  left: `${pr(i) * 100}%`,
                  animationDelay: `${pr(i + 20) * 5}s`,
                  animationDuration: `${8 + pr(i + 40) * 4}s`
                }}
              >
                {pr(i + 60) > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        </div>
      )}
      
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
            AI-Powered Marketing That Drives
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Exponential Growth & Automation
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-blue-100 max-w-5xl mx-auto mb-8 leading-relaxed animate-slide-up delay-300">
          We&apos;ve generated <span className="text-green-400 font-bold text-3xl">$50M+</span> in revenue for healthcare, real estate & travel clients using our 
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold"> AI marketing systems</span> and 
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">automated growth frameworks</span>
        </p>

        {/* New AI/Automation Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up delay-350">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-sm text-purple-200">
            🤖 AI-Powered Campaigns
          </div>
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-200">
            ⚡ Marketing Automation
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 text-sm text-green-200">
            📊 Predictive Analytics
          </div>
        </div>

        {/* Video CTA Section */}
        <div className="mb-8 animate-slide-up delay-400">
          <div className="inline-flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-black/30 transition-all duration-300 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="h-6 w-6 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-ping opacity-50"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur opacity-50 animate-pulse"></div>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Watch Our AI Marketing in Action</p>
              <p className="text-blue-200 text-sm">See how AI automation transformed 250+ businesses</p>
            </div>
            <div className="ml-4">
              <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Enhanced Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up delay-500">
          <div className="text-center group">
            <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">250+</div>
            <div className="text-sm text-blue-200">AI Campaigns</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">98%</div>
            <div className="text-sm text-blue-200">Retention</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">85%</div>
            <div className="text-sm text-blue-200">Automated</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-sm text-blue-200">Industries</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-700">
          <Link href="/contact">
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 border-0"
            >
              <span className="relative z-10">Get Free AI Marketing Audit</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-md blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <span>View Automation Results</span>
              <TrendingUp className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-slide-up delay-1000">
          <p className="text-blue-200 text-sm mb-4">Powering AI-driven growth for industry leaders:</p>
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