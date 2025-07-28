"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Printer, Palette, Zap, Users } from "lucide-react"
import { ServicesData } from "@/lib/data"

interface ServicesProps {
  data: ServicesData
  language: string
}

export default function Services({ data, language }: ServicesProps) {
  const icons = [Printer, Palette, Zap, Users]

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">{data.title}</h2>
          <p className="text-lg text-slate-600">{data.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((service, index) => {
            const Icon = icons[index]

            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 