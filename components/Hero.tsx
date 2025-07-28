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
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
  ]

  // Hero image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-20 pb-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      <div className="absolute top-16 left-8 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-32 right-8 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 left-1/2 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {data.title}
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-6 max-w-xl leading-relaxed">{data.description}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mb-8">
              <Button
                size="default"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {data.cta}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="default"
                className="px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-2" />
                {data.cta2}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-xl md:text-2xl font-bold text-slate-800 mb-1">{stat.number}</div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src={heroImages[heroImageIndex] || "/placeholder.svg"}
                alt="BUZZWORK Print Shop"
                width={500}
                height={350}
                className="rounded-xl mx-auto shadow-lg"
              />

              {/* Floating Elements */}
              <div className="absolute -top-3 -left-3 bg-white rounded-full p-2 shadow-lg animate-bounce">
                <Printer className="w-5 h-5 text-blue-600" />
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg animate-bounce delay-500">
                <Palette className="w-5 h-5 text-purple-600" />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-full p-2 shadow-lg animate-bounce delay-1000">
                <Zap className="w-5 h-5 text-pink-600" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-lg animate-bounce delay-1500">
                <Award className="w-5 h-5 text-green-600" />
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