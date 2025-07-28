"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import { TestimonialsData } from "@/lib/data"

interface TestimonialsProps {
  data: TestimonialsData
  language: string
}

export default function Testimonials({ data, language }: TestimonialsProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">{data.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.items.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-slate-700 mb-4 italic leading-relaxed text-sm">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-base">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{testimonial.author}</p>
                    <p className="text-xs text-slate-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mt-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 