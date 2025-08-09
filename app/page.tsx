"use client"

import { useState } from "react"
import { content } from "@/lib/data"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Categories from "@/components/Categories"
import Services from "@/components/Services"
import WhyChoose from "@/components/WhyChoose"
import Process from "@/components/Process"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import CalculatorModal from "@/components/CalculatorModal"
import OrderFormModal from "@/components/OrderFormModal"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function BUZZAWORKLanding() {
  const [language, setLanguage] = useState("fr")
  const [showCalculator, setShowCalculator] = useState(false)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [orderCategory, setOrderCategory] = useState("")

  const currentContent = content[language as keyof typeof content]

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
  }

  const handleCalculatorToggle = () => {
    setShowCalculator(!showCalculator)
  }

  const handleOrderFormToggle = () => {
    setShowOrderForm(!showOrderForm)
  }

  const handleSetOrderCategory = (category: string) => {
    setOrderCategory(category)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 prevent-overflow" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        onCalculatorToggle={handleCalculatorToggle}
        onOrderFormToggle={handleOrderFormToggle}
      />

      {/* Calculator Modal */}
      <CalculatorModal
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
        data={currentContent.calculator}
        language={language}
      />

      {/* Order Form Modal */}
      <OrderFormModal
        isOpen={showOrderForm}
        onClose={() => setShowOrderForm(false)}
        data={currentContent.order}
        language={language}
        orderCategory={orderCategory}
        contactData={{ whatsapp: currentContent.contact.whatsapp }}
      />

      {/* Hero Section */}
      <Hero data={currentContent.hero} language={language} />

      {/* About Section */}
      <About data={currentContent.about} language={language} />

      {/* Categories Section */}
      <Categories
        data={currentContent.categories}
        language={language}
        onOrderFormToggle={handleOrderFormToggle}
        onSetOrderCategory={handleSetOrderCategory}
      />

      {/* Why Choose Us Section */}
      <WhyChoose data={currentContent.whyChoose} language={language} />

      {/* Process Section */}
      <Process data={currentContent.process} language={language} />

      {/* Services Section */}
      <Services data={currentContent.services} language={language} />

      {/* Portfolio Section */}
      <Portfolio data={currentContent.portfolio} language={language} />

      {/* Testimonials Section */}
      <Testimonials data={currentContent.testimonials} language={language} />

      {/* Contact Section */}
      <Contact
        data={currentContent.contact}
        language={language}
        onOrderFormToggle={handleOrderFormToggle}
      />

      {/* CTA Section */}
      <CTA language={language} onOrderFormToggle={handleOrderFormToggle} />

      {/* WhatsApp Button */}
      <WhatsAppButton
        language={language}
        whatsappNumber={currentContent.contact.whatsapp}
      />

      {/* Footer */}
      <Footer
        language={language}
        contactData={{
          phone: currentContent.contact.phone,
          whatsapp: currentContent.contact.whatsapp,
          email: currentContent.contact.email,
          address: currentContent.contact.address,
        }}
      />
    </div>
  )
}
