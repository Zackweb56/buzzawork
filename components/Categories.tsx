"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Printer, Megaphone, Package, Target, Briefcase, Camera } from "lucide-react"
import { CategoriesData } from "@/lib/data"

interface CategoriesProps {
  data: CategoriesData
  language: string
  onOrderFormToggle: () => void
  onSetOrderCategory: (category: string) => void
}

export default function Categories({ data, language, onOrderFormToggle, onSetOrderCategory }: CategoriesProps) {
  const iconMap = {
    printer: Printer,
    megaphone: Megaphone,
    package: Package,
    target: Target,
    briefcase: Briefcase,
    camera: Camera,
  }

  const handleCategoryClick = (categoryTitle: string) => {
    onSetOrderCategory(categoryTitle)
    onOrderFormToggle()
  }

  return (
    <section id="categories" className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">{data.title}</h2>
          <p className="text-lg text-slate-600">{data.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap]

            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{category.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{category.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 bg-transparent"
                    onClick={() => handleCategoryClick(category.title)}
                  >
                    {language === "fr" ? "Commander" : "اطلب"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 