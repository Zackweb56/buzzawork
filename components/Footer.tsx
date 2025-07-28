"use client"

import { Badge } from "@/components/ui/badge"
import { Printer, Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  language: string
  contactData: {
    phone: string
    whatsapp: string
    email: string
    address: string
  }
}

export default function Footer({ language, contactData }: FooterProps) {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">BUZZWORK</h3>
                <p className="text-xs text-slate-400">مطبعة • IMPRIMERIE</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 max-w-md leading-relaxed text-sm">
              {language === "fr"
                ? "Votre partenaire créatif pour tous vos projets d'impression et de marketing. Excellence, innovation et service client au cœur de notre mission."
                : "شريكك الإبداعي لجميع مشاريع الطباعة والتسويق. التميز والابتكار وخدمة العملاء في قلب مهمتنا."}
            </p>
            <div className="flex items-center space-x-3">
              <div className="text-blue-400 font-bold text-base">www.buzzawork.com</div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                {language === "fr" ? "En ligne" : "متصل"}
              </Badge>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">{language === "fr" ? "Contact" : "اتصل بنا"}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{contactData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">WhatsApp: {contactData.whatsapp}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{contactData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Béni Mellal, Maroc</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">{language === "fr" ? "Suivez-nous" : "تابعنا"}</h4>
            <div className="flex space-x-3 mb-4">
              <Link
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>

            <div className="space-y-2">
              <h5 className="font-medium text-sm">{language === "fr" ? "Horaires" : "ساعات العمل"}</h5>
              <div className="text-xs text-slate-400">
                <p>{language === "fr" ? "Lun - Ven: 8h - 18h" : "الإثنين - الجمعة: 8ص - 6م"}</p>
                <p>{language === "fr" ? "Sam: 9h - 16h" : "السبت: 9ص - 4م"}</p>
                <p>{language === "fr" ? "Dim: Fermé" : "الأحد: مغلق"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-3 md:mb-0 text-sm">
              &copy; 2024 BUZZWORK. {language === "fr" ? "Tous droits réservés." : "جميع الحقوق محفوظة."}
            </p>
            <div className="flex items-center space-x-4 text-xs text-slate-400">
              <Link href="#" className="hover:text-white transition-colors">
                {language === "fr" ? "Politique de confidentialité" : "سياسة الخصوصية"}
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                {language === "fr" ? "Conditions d'utilisation" : "شروط الاستخدام"}
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                {language === "fr" ? "Mentions légales" : "الإشعارات القانونية"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 