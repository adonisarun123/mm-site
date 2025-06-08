"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Mail, Phone, MapPin, Clock, Sparkles, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 24 hours",
      contact: "hello@monkmantra.com",
      action: "Send Email",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Schedule an in-person meeting",
      contact: "123 Innovation St, Tech City, TC 12345",
      action: "Get Directions",
      gradient: "from-emerald-500 to-teal-500"
    }
  ]

  const services = [
    "AI Marketing Systems",
    "Marketing Automation", 
    "Organic Growth & SEO",
    "Strategic Media Buying",
    "Content Marketing",
    "Marketing Strategy",
    "Internal Tools Development",
    "World-Class Websites",
    "Data Analytics & BI",
    "Conversion Rate Optimization",
    "Lead Generation Services",
    "Reputation Management",
    "Video Production & Marketing",
    "Chatbot Development",
    "Other"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm text-white mb-8">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span>Let&apos;s Transform Your Business Together</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Ready to Start Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Marketing Journey?
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get your free marketing audit and discover how our AI-powered solutions can 
              <span className="text-green-400 font-semibold"> 10x your growth</span> in the next 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 relative">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to connect with our AI marketing experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${method.gradient} rounded-2xl w-fit group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-lg font-semibold text-gray-800 mb-6">
                      {method.contact}
                    </p>
                    <Button 
                      className={`w-full group-hover:bg-gradient-to-r ${method.gradient} group-hover:text-white transition-all duration-300`}
                      variant="outline"
                    >
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6">
                Get Your Free AI Marketing Audit
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we&apos;ll analyze your current marketing setup for free
              </p>
            </div>

            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-gray-900">
                  Start Your Transformation
                </CardTitle>
                <CardDescription className="text-center text-lg">
                  Tell us about your business and marketing goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit">
                      <CheckCircle className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-lg text-gray-600">
                      We&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interest *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your current marketing challenges and goals..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          Get My Free Marketing Audit
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Office Hours & Response Times
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-blue-200">Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
              </div>
              <div className="text-center">
                <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Response</h3>
                <p className="text-blue-200">Within 24 hours<br />Usually within 4 hours</p>
              </div>
              <div className="text-center">
                <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-blue-200">Same day callback<br />Emergency support available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 