"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Play, Sparkles, Award, Palette, Zap, Printer } from "lucide-react"
import Image from "next/image"
import { HeroData } from "@/lib/data"

interface HeroProps {
  data: HeroData
  language: string
}

export default function Hero({ data, language }: HeroProps) {
  const [heroImageIndex, setHeroImageIndex] = useState(0)

  const heroImages = [
    "/hero-simple.svg",
    "/hero-image.svg", 
    "/placeholder.jpg",
  ]

  // Hero image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-24 sm:pt-32 md:pt-40 pb-8 sm:pb-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      <div className="absolute top-16 left-4 sm:left-8 w-32 h-32 sm:w-56 sm:h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-32 right-4 sm:right-8 w-32 h-32 sm:w-56 sm:h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 left-1/2 w-32 h-32 sm:w-56 sm:h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <Badge
                variant="outline"
                className="text-blue-600 border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                {data.subtitle}
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {data.title}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-6 max-w-xl leading-relaxed">{data.description}</p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start items-center mb-6 sm:mb-8">
              <Button
                size="default"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                {data.cta}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="default"
                className="px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
              >
                <Play className="w-4 h-4 mr-2" />
                {data.cta2}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1">{stat.number}</div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-4 sm:p-6 shadow-2xl transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/hero-simple.svg"
                alt="BUZZAWORK Print Shop"
                width={500}
                height={350}
                className="rounded-xl mx-auto shadow-lg w-full h-auto"
                priority
                onError={(error) => console.error('Error loading image:', error)}
              />

              {/* Floating Elements */}
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 bg-white rounded-full p-1.5 sm:p-2 shadow-lg animate-bounce">
                <Printer className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-white rounded-full p-1.5 sm:p-2 shadow-lg animate-bounce delay-500">
                <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 bg-white rounded-full p-1.5 sm:p-2 shadow-lg animate-bounce delay-1000">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 bg-white rounded-full p-1.5 sm:p-2 shadow-lg animate-bounce delay-1500">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-4 -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 