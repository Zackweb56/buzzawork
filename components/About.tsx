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
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
              {data.subtitle}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">{data.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {data.values.map((value, index) => {
                const Icon = icons[index]
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1 text-sm">{value.title}</h4>
                      <p className="text-slate-600 text-xs">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/about-placeholder.svg"
              alt="BUZZWORK About"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 