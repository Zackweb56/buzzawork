"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

interface CTAProps {
  language: string
  onOrderFormToggle: () => void
}

export default function CTA({ language, onOrderFormToggle }: CTAProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {language === "fr" ? "Prêt à Démarrer Votre Projet ?" : "مستعد لبدء مشروعك؟"}
        </h2>
        <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
          {language === "fr"
            ? "Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé."
            : "اتصل بنا اليوم للحصول على عرض أسعار مجاني ومخصص."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            size="default"
            variant="secondary"
            className="px-6 py-2 rounded-full bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
            onClick={onOrderFormToggle}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {language === "fr" ? "Commander Maintenant" : "اطلب الآن"}
          </Button>
          <Button
            size="default"
            variant="outline"
            className="px-6 py-2 rounded-full border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
          >
            <Phone className="w-4 h-4 mr-2" />
            {language === "fr" ? "Appeler" : "اتصل"}
          </Button>
        </div>
      </div>
    </section>
  )
} 