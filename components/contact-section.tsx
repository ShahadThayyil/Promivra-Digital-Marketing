"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 bg-black relative overflow-hidden"
    >
      {/* Decorative gradient blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Section Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold font-playfair mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let’s collaborate and bring your ideas to
              life with creativity and innovation.
            </p>
          </div>

          {/* Layout */}
          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Contact Info (left side) */}
            <div className="space-y-8 lg:col-span-1">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["hello@promivra.com", "support@promivra.com"],
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["+91 (555) 123-4567", "+91 (555) 987-6543"],
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  lines: [
                    "123 Digital Avenue",
                    "Tech District, CA 90210",
                    "United States",
                  ],
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="rounded-xl border border-purple-900/40 bg-black/70 backdrop-blur-md shadow-lg shadow-purple-900/30 hover:shadow-purple-500/40 transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <item.icon className="h-6 w-6 text-purple-400 mr-3" />
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    {item.lines.map((line, idx) => (
                      <p key={idx} className="text-gray-400">
                        {line}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form (right side) */}
            <Card className="lg:col-span-2 rounded-xl border border-purple-900/40 bg-black/70 backdrop-blur-md shadow-lg shadow-purple-900/30">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white/5 border-purple-900/40 text-white placeholder-gray-400"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white/5 border-purple-900/40 text-white placeholder-gray-400"
                    />
                  </div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none bg-white/5 border-purple-900/40 text-white placeholder-gray-400"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
