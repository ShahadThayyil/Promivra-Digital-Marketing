import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-extrabold font-playfair mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Promivra
            </div>
            <p className="mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative digital marketing
              strategies. Your success is our mission.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "#" },
                { icon: Linkedin, link: "#" },
                { icon: Mail, link: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="p-2 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all group"
                >
                  <item.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "SEO Optimization",
                "Social Media",
                "Brand Design",
                "Digital Ads",
                "Web Development",
              ].map((service) => (
                <li key={service} className="hover:text-purple-400 transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Promivra. All rights reserved. Built with passion for digital excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
