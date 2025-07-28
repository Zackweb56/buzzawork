"use client"

import { Badge } from "@/components/ui/badge"
import { ProcessData } from "@/lib/data"

interface ProcessProps {
  data: ProcessData
  language: string
}

export default function Process({ data, language }: ProcessProps) {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200 bg-blue-50">
            {language === "fr" ? "Notre Méthodologie" : "منهجيتنا"}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">{data.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{data.subtitle}</p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {data.steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Circle */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-slate-100">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-slate-800 mb-3">{step.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Process Flow */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {data.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line for Mobile */}
                {index < data.steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-6 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                )}
                
                <div className="flex items-start space-x-4 group">
                  {/* Step Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 