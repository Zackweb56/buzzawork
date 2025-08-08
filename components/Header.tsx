"use client"

import { Button } from "@/components/ui/button"
import { Calculator, Globe, MessageCircle, Printer } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  language: string
  onLanguageChange: (lang: string) => void
  onCalculatorToggle: () => void
  onOrderFormToggle: () => void
}

export default function Header({ language, onLanguageChange, onCalculatorToggle, onOrderFormToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <Printer className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
          </div>
          <div>
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BUZZWORK
            </h1>
            <p className="text-xs text-slate-600 font-medium hidden sm:block">مطبعة • IMPRIMERIE</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            {language === "fr" ? "À Propos" : "حولنا"}
          </Link>
          <Link href="#categories" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            {language === "fr" ? "Catégories" : "الفئات"}
          </Link>
          <Link href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            {language === "fr" ? "Services" : "الخدمات"}
          </Link>
          <Link href="#portfolio" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            {language === "fr" ? "Portfolio" : "المعرض"}
          </Link>
          <Link href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            {language === "fr" ? "Contact" : "اتصل بنا"}
          </Link>
        </nav>

        <div className="flex items-center space-x-1 sm:space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onLanguageChange(language === "fr" ? "ar" : "fr")}
            className="flex items-center space-x-1 hover:bg-blue-50 px-2 sm:px-3"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs sm:text-sm">{language === "fr" ? "عربية" : "Fr"}</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onCalculatorToggle}
            className="flex items-center space-x-1 hover:bg-purple-50 px-2 sm:px-3"
          >
            <Calculator className="w-4 h-4" />
            <span className="hidden sm:inline text-xs sm:text-sm">
              {language === "fr" ? "Calculateur" : "الحاسبة"}
            </span>
          </Button>
          <Button
            size="sm"
            onClick={onOrderFormToggle}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-2 sm:px-3"
          >
            <MessageCircle className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline text-xs sm:text-sm">{language === "fr" ? "Commander" : "اطلب"}</span>
          </Button>
        </div>
      </div>
    </header>
  )
} 