"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Download } from "lucide-react"
import Image from "next/image"
import { PortfolioData } from "@/lib/data"

interface PortfolioProps {
  data: PortfolioData
  language: string
}

export default function Portfolio({ data, language }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">{data.title}</h2>
          <p className="text-lg text-slate-600">{data.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/portfolio-image.svg"
                alt={`${item} - BUZZAWORK Portfolio`}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-base font-semibold mb-1">Projet Créatif {item}</h4>
                  <p className="text-xs opacity-90">Design & Impression Premium</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      Voir
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs"
                    >
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            size="default"
            variant="outline"
            className="px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300 bg-transparent"
          >
            {language === "fr" ? "Voir Plus de Projets" : "عرض المزيد من المشاريع"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
} 