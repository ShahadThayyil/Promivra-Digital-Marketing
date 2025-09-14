"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center mt-16 justify-center overflow-hidden "
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/04/88/97/77/360_F_488977723_TxnJAl6jcX3tWdgHphJTdNhrFytlNMyJ.jpg')", // <-- replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">
            Promivra Builds Your{" "}
            <span className="block text-purple-400">
              Future Digital World
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Step into innovation with AI-powered tools, marketplaces, and global
            connections designed to make every student and entrepreneur
            unstoppable.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-5 rounded-xl bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-transform shadow-lg"
              onClick={scrollToContact}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-5 rounded-xl border-purple-400 text-purple-300 hover:bg-purple-900/40 hover:scale-105 transition-transform shadow-lg"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
