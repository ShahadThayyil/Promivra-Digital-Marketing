"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, Users } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-black"
      style={{
        backgroundImage: "url('/about-bg.jpg')", // replace with your bg image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="container mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              About <span className="text-purple-400">Promivra</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We’re shaping the future of digital growth with AI-powered
              solutions, innovation-driven strategies, and a commitment to help
              businesses, students, and entrepreneurs unlock their true
              potential.
            </p>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Our Mission
              </h3>
              <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                To empower people and businesses with tools that fuel growth,
                boost visibility, and create long-lasting impact in the digital
                world.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Since our journey began, we’ve partnered with{" "}
                <span className="font-semibold text-purple-400">500+</span>{" "}
                projects globally, delivering measurable results through smart
                strategies and cutting-edge innovation.
              </p>
            </div>

            {/* Right Cards */}
            <div className="grid gap-6">
              <Card className="bg-black/60 border border-purple-500/30 hover:scale-105 transition-transform duration-500 rounded-2xl shadow-lg shadow-purple-900/40">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-purple-400 mr-3" />
                    <h4 className="text-xl font-semibold text-white">
                      Strategic Focus
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">
                    Every step is backed by research, insights, and a clear
                    focus on your unique goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border border-purple-500/30 hover:scale-105 transition-transform duration-500 rounded-2xl shadow-lg shadow-purple-900/40">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-yellow-400 mr-3" />
                    <h4 className="text-xl font-semibold text-white">
                      Innovation First
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">
                    Staying ahead of trends ensures your brand doesn’t just
                    adapt—it leads the way.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border border-purple-500/30 hover:scale-105 transition-transform duration-500 rounded-2xl shadow-lg shadow-purple-900/40">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-purple-400 mr-3" />
                    <h4 className="text-xl font-semibold text-white">
                      Partnerships
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">
                    We collaborate closely with you, becoming an extension of
                    your team to ensure success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
