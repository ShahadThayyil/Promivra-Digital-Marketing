"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Share2, Palette, Megaphone, BarChart3, Globe } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Boost your search rankings with our comprehensive SEO strategies and technical optimization.",
    color: "bg-blue-500/20 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Engage your audience across all platforms with compelling content and strategic campaigns.",
    color: "bg-pink-500/20 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.5)]",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description:
      "Create a memorable brand identity that resonates with your target audience.",
    color: "bg-purple-500/20 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.5)]",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description:
      "Maximize ROI with targeted ad campaigns across Google, Facebook, and other platforms.",
    color: "bg-orange-500/20 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.5)]",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Track performance and optimize campaigns with detailed analytics and insights.",
    color: "bg-green-500/20 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.5)]",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Build fast, responsive websites that convert visitors into customers.",
    color: "bg-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-black"
      style={{
        backgroundImage: "url('/services-bg.jpg')", // replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              Our <span className="text-purple-400">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Powerful solutions designed to elevate your brand, connect with
              your audience, and accelerate business growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`bg-black/60 border border-purple-500/30 rounded-2xl shadow-lg shadow-purple-900/40 transition-all duration-1000 hover:scale-105 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center flex flex-col items-center">
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 ${service.color}`}
                  >
                    <service.icon className="h-8 w-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
