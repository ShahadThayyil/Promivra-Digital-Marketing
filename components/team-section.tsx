"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Adhinath K",
    role: "CEO & Founder",
    image: "/logo.jpeg",
    initials: "SJ",
    bio: "Visionary leader with 15+ years in digital marketing and business strategy.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Abinav A",
    role: "COO",
    image: "/logo.jpeg",
    initials: "MC",
    bio: "Operations expert ensuring seamless project delivery and client satisfaction.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Adhil Chandra",
    role: "Creative Director",
    image: "/logo.jpeg",
    initials: "ER",
    bio: "Award-winning designer crafting compelling visual stories for brands.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sudeep",
    role: "Marketing Head",
    image: "/logo.jpeg",
    initials: "DK",
    bio: "Strategic marketer with expertise in multi-channel campaign optimization.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Advaith",
    role: "Marketing Head",
    image: "/logo.jpeg",
    initials: "DK",
    bio: "Strategic marketer with expertise in multi-channel campaign optimization.",
    social: { linkedin: "#", twitter: "#" },
  },
]

export function TeamSection() {
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
      id="team"
      ref={sectionRef}
      className="py-24 bg-black relative"
    >
      <div className="container mx-auto px-6 relative">
        {/* Heading */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold font-playfair mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Talented professionals shaping the future with creativity,
              strategy, and innovation.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className={`relative group rounded-xl bg-black border border-purple-900/40 shadow-lg shadow-purple-900/30 hover:shadow-purple-500/50 transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center flex flex-col items-center">
                  {/* Avatar */}
                  <Avatar className="w-28 h-28 mb-6 ring-4 ring-purple-500/30">
                    <AvatarImage
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                    />
                    <AvatarFallback className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>

                  {/* Info */}
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Socials */}
                  <div className="flex justify-center gap-4">
                    <a
                      href={member.social.linkedin}
                      className="p-2 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
