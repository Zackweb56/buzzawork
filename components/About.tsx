"use client"

import { Badge } from "@/components/ui/badge"
import { Sparkles, Award, Clock, Heart } from "lucide-react"
import Image from "next/image"
import { AboutData } from "@/lib/data"

interface AboutProps {
  data: AboutData
  language: string
}

export default function About({ data, language }: AboutProps) {
  const icons = [Sparkles, Award, Clock, Heart]

  return (
    <section id="about" className="py-8 sm:py-16 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="max-w-full">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
              {data.subtitle}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 break-words">{data.title}</h2>
            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed break-words max-w-full">{data.description}</p>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-full">
              {data.values.map((value, index) => {
                const Icon = icons[index]
                return (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3 max-w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-800 mb-1 text-xs sm:text-sm break-words">{value.title}</h4>
                      <p className="text-slate-600 text-xs break-words">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <Image
              src="/about-image.svg"
              alt="BUZZAWORK About"
              width={500}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto max-w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 