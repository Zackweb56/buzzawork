"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Palette, Printer, Zap, Users, Star, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Calculator, Globe, ChevronRight, Quote, Award, Clock, Shield, Target, Briefcase, Camera, Package, Megaphone, ArrowRight, Play, TrendingUp, Heart, MessageCircle, Send, Eye, Download, Sparkles, Navigation, Building, Calendar } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function BuzzworkLanding() {
  const [language, setLanguage] = useState("fr")
  const [showCalculator, setShowCalculator] = useState(false)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [quantity, setQuantity] = useState("")
  const [printType, setPrintType] = useState("")
  const [estimatedPrice, setEstimatedPrice] = useState(0)
  const [orderCategory, setOrderCategory] = useState("")
  const [orderDetails, setOrderDetails] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientPhone, setClientPhone] = useState("")
  const [heroImageIndex, setHeroImageIndex] = useState(0)

  // Hero image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const calculatePrice = () => {
    const basePrice =
      printType === "flyers" ? 0.15 : printType === "business-cards" ? 0.25 : printType === "posters" ? 2.5 : 1
    const qty = Number.parseInt(quantity) || 0
    const total = basePrice * qty
    setEstimatedPrice(total)
  }

  const sendWhatsAppOrder = () => {
    const message = `Bonjour BUZZWORK! 
    
Nom: ${clientName}
Téléphone: ${clientPhone}
Catégorie: ${orderCategory}
Détails: ${orderDetails}

Je souhaite passer une commande. Merci de me contacter.`

    const whatsappUrl = `https://wa.me/33123456789?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setShowOrderForm(false)
  }

  const content = {
    fr: {
      hero: {
        title: "NOUS SOMMES CRÉATIFS",
        subtitle: "MARKETING AGENCE • IMPRIMERIE",
        description:
          "Transformez vos idées en réalité avec notre expertise en impression et marketing. Plus de 10 ans d'expérience au service de votre créativité.",
        cta: "Demander un Devis",
        cta2: "Voir Notre Travail",
        stats: [
          { number: "500+", label: "Clients Satisfaits" },
          { number: "10+", label: "Années d'Expérience" },
          { number: "24h", label: "Livraison Express" },
          { number: "99%", label: "Qualité Garantie" },
        ],
      },
      about: {
        title: "À Propos de BUZZWORK",
        subtitle: "Votre Partenaire Créatif de Confiance",
        description:
          "Depuis plus de 10 ans, BUZZWORK révolutionne l'industrie de l'impression et du marketing. Notre équipe passionnée combine expertise technique et créativité pour donner vie à vos projets les plus ambitieux.",
        values: [
          {
            title: "Innovation",
            description: "Technologies de pointe et solutions créatives",
          },
          {
            title: "Qualité",
            description: "Standards élevés dans chaque projet",
          },
          {
            title: "Rapidité",
            description: "Livraison dans les délais promis",
          },
          {
            title: "Service",
            description: "Accompagnement personnalisé 24/7",
          },
        ],
      },
      categories: {
        title: "Nos Catégories",
        subtitle: "Solutions Complètes pour Tous Vos Besoins",
        items: [
          {
            title: "Impression Commerciale",
            description: "Flyers, brochures, catalogues, cartes de visite",
            icon: "printer",
          },
          {
            title: "Signalétique",
            description: "Enseignes, panneaux, adhésifs, bâches",
            icon: "megaphone",
          },
          {
            title: "Packaging",
            description: "Emballages personnalisés, boîtes, étiquettes",
            icon: "package",
          },
          {
            title: "Marketing Digital",
            description: "Design web, réseaux sociaux, campagnes",
            icon: "target",
          },
          {
            title: "Événementiel",
            description: "Stands, roll-ups, kakémonos, PLV",
            icon: "briefcase",
          },
          {
            title: "Photographie",
            description: "Photos produits, corporate, événements",
            icon: "camera",
          },
        ],
      },
      services: {
        title: "Nos Services",
        subtitle: "Excellence dans chaque projet",
        items: [
          {
            title: "Qualité d'impression exceptionnelle",
            description: "Technologies de pointe pour des résultats parfaits",
          },
          {
            title: "Équipe créative",
            description: "Designers expérimentés à votre service",
          },
          {
            title: "Livraison rapide",
            description: "Respect des délais garantis",
          },
          {
            title: "Prix compétitifs",
            description: "Le meilleur rapport qualité-prix du marché",
          },
        ],
      },
      whyChoose: {
        title: "Pourquoi Choisir BUZZWORK ?",
        subtitle: "Les Raisons de Notre Succès",
        reasons: [
          {
            title: "Expertise Reconnue",
            description: "Plus de 10 ans d'expérience dans l'impression et le marketing",
          },
          {
            title: "Équipements Modernes",
            description: "Machines dernière génération pour une qualité optimale",
          },
          {
            title: "Service Client 24/7",
            description: "Support technique et commercial disponible en permanence",
          },
          {
            title: "Livraison Express",
            description: "Service de livraison rapide partout en France",
          },
        ],
      },
      process: {
        title: "Notre Processus",
        subtitle: "De l'Idée à la Réalisation",
        steps: [
          {
            step: "01",
            title: "Consultation",
            description: "Analyse de vos besoins et conseils personnalisés",
          },
          {
            step: "02",
            title: "Création",
            description: "Design et maquettage par nos experts créatifs",
          },
          {
            step: "03",
            title: "Production",
            description: "Impression haute qualité avec nos équipements modernes",
          },
          {
            step: "04",
            title: "Livraison",
            description: "Livraison rapide et sécurisée à votre adresse",
          },
        ],
      },
      portfolio: {
        title: "Notre Portfolio",
        subtitle: "Découvrez nos réalisations",
      },
      testimonials: {
        title: "Témoignages Clients",
        items: [
          {
            text: "Service exceptionnel et qualité irréprochable. BUZZWORK a dépassé nos attentes.",
            author: "Marie Dubois",
            company: "Restaurant Le Gourmet",
          },
          {
            text: "Équipe professionnelle et créative. Nos supports marketing n'ont jamais été aussi beaux.",
            author: "Ahmed Benali",
            company: "Boutique Mode",
          },
          {
            text: "Livraison ultra-rapide et prix très compétitifs. Je recommande vivement !",
            author: "Sophie Martin",
            company: "Startup Tech",
          },
        ],
      },
      calculator: {
        title: "Calculateur de Prix",
        quantity: "Quantité",
        type: "Type d'impression",
        calculate: "Calculer",
        estimate: "Estimation",
      },
      order: {
        title: "Passer une Commande",
        subtitle: "Contactez-nous via WhatsApp",
        name: "Nom complet",
        phone: "Téléphone",
        category: "Catégorie",
        details: "Détails de votre projet",
        send: "Envoyer sur WhatsApp",
      },
      contact: {
        title: "Contactez-Nous",
        subtitle: "Nous Sommes Là Pour Vous Aider",
        address: "123 Rue de la Créativité, 75001 Paris, France",
        phone: "+33 1 23 45 67 89",
        whatsapp: "+33 6 12 34 56 78",
        email: "contact@buzzawork.com",
        hours: {
          title: "Horaires d'Ouverture",
          weekdays: "Lundi - Vendredi: 8h00 - 18h00",
          saturday: "Samedi: 9h00 - 16h00",
          sunday: "Dimanche: Fermé",
        },
      },
    },
    ar: {
      hero: {
        title: "نحن مبدعون",
        subtitle: "وكالة تسويق • مطبعة",
        description: "حوّل أفكارك إلى واقع مع خبرتنا في الطباعة والتسويق. أكثر من 10 سنوات من الخبرة في خدمة إبداعك.",
        cta: "طلب عرض سعر",
        cta2: "شاهد أعمالنا",
        stats: [
          { number: "500+", label: "عميل راضٍ" },
          { number: "10+", label: "سنوات خبرة" },
          { number: "24ساعة", label: "تسليم سريع" },
          { number: "99%", label: "جودة مضمونة" },
        ],
      },
      about: {
        title: "حول BUZZWORK",
        subtitle: "شريكك الإبداعي الموثوق",
        description:
          "منذ أكثر من 10 سنوات، تُحدث BUZZWORK ثورة في صناعة الطباعة والتسويق. فريقنا المتحمس يجمع بين الخبرة التقنية والإبداع لإحياء مشاريعك الأكثر طموحاً.",
        values: [
          {
            title: "الابتكار",
            description: "تقنيات متطورة وحلول إبداعية",
          },
          {
            title: "الجودة",
            description: "معايير عالية في كل مشروع",
          },
          {
            title: "السرعة",
            description: "التسليم في المواعيد المحددة",
          },
          {
            title: "الخدمة",
            description: "مرافقة شخصية 24/7",
          },
        ],
      },
      categories: {
        title: "فئاتنا",
        subtitle: "حلول شاملة لجميع احتياجاتك",
        items: [
          {
            title: "الطباعة التجارية",
            description: "منشورات، كتيبات، كتالوجات، بطاقات عمل",
            icon: "printer",
          },
          {
            title: "اللافتات",
            description: "لافتات، لوحات، ملصقات، أقمشة",
            icon: "megaphone",
          },
          {
            title: "التغليف",
            description: "عبوات مخصصة، صناديق، ملصقات",
            icon: "package",
          },
          {
            title: "التسويق الرقمي",
            description: "تصميم ويب، وسائل التواصل، حملات",
            icon: "target",
          },
          {
            title: "الفعاليات",
            description: "أكشاك، رول أب، كاكيمونو، PLV",
            icon: "briefcase",
          },
          {
            title: "التصوير",
            description: "صور منتجات، شركات، فعاليات",
            icon: "camera",
          },
        ],
      },
      services: {
        title: "خدماتنا",
        subtitle: "التميز في كل مشروع",
        items: [
          {
            title: "جودة طباعة استثنائية",
            description: "تقنيات متطورة لنتائج مثالية",
          },
          {
            title: "فريق إبداعي",
            description: "مصممون ذوو خبرة في خدمتكم",
          },
          {
            title: "تسليم سريع",
            description: "احترام المواعيد مضمون",
          },
          {
            title: "أسعار تنافسية",
            description: "أفضل نسبة جودة سعر في السوق",
          },
        ],
      },
      whyChoose: {
        title: "لماذا تختار BUZZWORK؟",
        subtitle: "أسباب نجاحنا",
        reasons: [
          {
            title: "خبرة معترف بها",
            description: "أكثر من 10 سنوات من الخبرة في الطباعة والتسويق",
          },
          {
            title: "معدات حديثة",
            description: "آلات من الجيل الأخير لجودة مثلى",
          },
          {
            title: "خدمة عملاء 24/7",
            description: "دعم تقني وتجاري متاح بشكل دائم",
          },
          {
            title: "تسليم سريع",
            description: "خدمة توصيل سريعة في جميع أنحاء فرنسا",
          },
        ],
      },
      process: {
        title: "عمليتنا",
        subtitle: "من الفكرة إلى التحقيق",
        steps: [
          {
            step: "01",
            title: "الاستشارة",
            description: "تحليل احتياجاتك ونصائح شخصية",
          },
          {
            step: "02",
            title: "الإبداع",
            description: "التصميم والمخططات من قبل خبرائنا المبدعين",
          },
          {
            step: "03",
            title: "الإنتاج",
            description: "طباعة عالية الجودة بمعداتنا الحديثة",
          },
          {
            step: "04",
            title: "التسليم",
            description: "توصيل سريع وآمن إلى عنوانك",
          },
        ],
      },
      portfolio: {
        title: "معرض أعمالنا",
        subtitle: "اكتشف إنجازاتنا",
      },
      testimonials: {
        title: "شهادات العملاء",
        items: [
          {
            text: "خدمة استثنائية وجودة لا تشوبها شائبة. تجاوزت BUZZWORK توقعاتنا.",
            author: "مريم دوبوا",
            company: "مطعم الذواقة",
          },
          {
            text: "فريق محترف ومبدع. لم تكن مواد التسويق لدينا جميلة كما هي الآن.",
            author: "أحمد بن علي",
            company: "بوتيك الموضة",
          },
          {
            text: "تسليم سريع جداً وأسعار تنافسية جداً. أنصح بشدة!",
            author: "صوفيا مارتن",
            company: "شركة تقنية ناشئة",
          },
        ],
      },
      calculator: {
        title: "حاسبة الأسعار",
        quantity: "الكمية",
        type: "نوع الطباعة",
        calculate: "احسب",
        estimate: "التقدير",
      },
      order: {
        title: "تقديم طلب",
        subtitle: "تواصل معنا عبر واتساب",
        name: "الاسم الكامل",
        phone: "الهاتف",
        category: "الفئة",
        details: "تفاصيل مشروعك",
        send: "إرسال عبر واتساب",
      },
      contact: {
        title: "اتصل بنا",
        subtitle: "نحن هنا لمساعدتك",
        address: "123 شارع الإبداع، 75001 باريس، فرنسا",
        phone: "+33 1 23 45 67 89",
        whatsapp: "+33 6 12 34 56 78",
        email: "contact@buzzawork.com",
        hours: {
          title: "ساعات العمل",
          weekdays: "الإثنين - الجمعة: 8:00 - 18:00",
          saturday: "السبت: 9:00 - 16:00",
          sunday: "الأحد: مغلق",
        },
      },
    },
  }

  const currentContent = content[language as keyof typeof content]

  const heroImages = [
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Printer className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BUZZWORK
              </h1>
              <p className="text-xs text-slate-600 font-medium">مطبعة • PRINT STUDIO</p>
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

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "fr" ? "ar" : "fr")}
              className="flex items-center space-x-2 hover:bg-blue-50"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "fr" ? "العربية" : "Français"}</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCalculator(!showCalculator)}
              className="flex items-center space-x-2 hover:bg-purple-50"
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">{currentContent.calculator.title}</span>
            </Button>
            <Button
              size="sm"
              onClick={() => setShowOrderForm(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">{language === "fr" ? "Commander" : "اطلب"}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Price Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{currentContent.calculator.title}</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowCalculator(false)}>
                  ×
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>{currentContent.calculator.quantity}</Label>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="1000"
                  />
                </div>

                <div>
                  <Label>{currentContent.calculator.type}</Label>
                  <Select value={printType} onValueChange={setPrintType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flyers">Flyers</SelectItem>
                      <SelectItem value="business-cards">Cartes de visite</SelectItem>
                      <SelectItem value="posters">Affiches</SelectItem>
                      <SelectItem value="brochures">Brochures</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculatePrice} className="w-full">
                  {currentContent.calculator.calculate}
                </Button>

                {estimatedPrice > 0 && (
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-slate-600">{currentContent.calculator.estimate}</p>
                    <p className="text-2xl font-bold text-blue-600">{estimatedPrice.toFixed(2)} €</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{currentContent.order.title}</h3>
                  <p className="text-sm text-slate-600">{currentContent.order.subtitle}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowOrderForm(false)}>
                  ×
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>{currentContent.order.name}</Label>
                  <Input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Jean Dupont" />
                </div>

                <div>
                  <Label>{currentContent.order.phone}</Label>
                  <Input
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div>
                  <Label>{currentContent.order.category}</Label>
                  <Select value={orderCategory} onValueChange={setOrderCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une catégorie..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="impression-commerciale">Impression Commerciale</SelectItem>
                      <SelectItem value="signaletique">Signalétique</SelectItem>
                      <SelectItem value="packaging">Packaging</SelectItem>
                      <SelectItem value="marketing-digital">Marketing Digital</SelectItem>
                      <SelectItem value="evenementiel">Événementiel</SelectItem>
                      <SelectItem value="photographie">Photographie</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>{currentContent.order.details}</Label>
                  <Textarea
                    value={orderDetails}
                    onChange={(e) => setOrderDetails(e.target.value)}
                    placeholder="Décrivez votre projet en détail..."
                    rows={4}
                  />
                </div>

                <Button
                  onClick={sendWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  disabled={!clientName || !clientPhone || !orderCategory}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {currentContent.order.send}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Badge
                  variant="outline"
                  className="text-blue-600 border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {currentContent.hero.subtitle}
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {currentContent.hero.title}
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">{currentContent.hero.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {currentContent.hero.cta}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {currentContent.hero.cta2}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {currentContent.hero.stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={heroImages[heroImageIndex] || "/placeholder.svg"}
                  alt="BUZZWORK Print Shop"
                  width={600}
                  height={400}
                  className="rounded-2xl mx-auto shadow-lg"
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                  <Printer className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce delay-500">
                  <Palette className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce delay-1000">
                  <Zap className="w-6 h-6 text-pink-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce delay-1500">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-6 -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200">
                {currentContent.about.subtitle}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">{currentContent.about.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{currentContent.about.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {currentContent.about.values.map((value, index) => {
                  const icons = [Sparkles, Award, Clock, Heart]
                  const Icon = icons[index]
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">{value.title}</h4>
                        <p className="text-slate-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="About BUZZWORK"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{currentContent.categories.title}</h2>
            <p className="text-xl text-slate-600">{currentContent.categories.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.categories.items.map((category, index) => {
              const iconMap = {
                printer: Printer,
                megaphone: Megaphone,
                package: Package,
                target: Target,
                briefcase: Briefcase,
                camera: Camera,
              }
              const Icon = iconMap[category.icon as keyof typeof iconMap]

              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-0 shadow-lg bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{category.title}</h3>
                    <p className="text-slate-600 mb-6">{category.description}</p>
                    <Button
                      variant="outline"
                      className="group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 bg-transparent"
                      onClick={() => {
                        setOrderCategory(category.title)
                        setShowOrderForm(true)
                      }}
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

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{currentContent.whyChoose.title}</h2>
            <p className="text-xl text-slate-600">{currentContent.whyChoose.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.whyChoose.reasons.map((reason, index) => {
              const icons = [Award, Shield, Clock, TrendingUp]
              const Icon = icons[index]

              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{reason.title}</h3>
                  <p className="text-slate-600">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{currentContent.process.title}</h2>
            <p className="text-xl text-slate-600">{currentContent.process.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                {index < currentContent.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{currentContent.services.title}</h2>
            <p className="text-xl text-slate-600">{currentContent.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.services.items.map((service, index) => {
              const icons = [Printer, Palette, Zap, Users]
              const Icon = icons[index]

              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{currentContent.portfolio.title}</h2>
            <p className="text-xl text-slate-600">{currentContent.portfolio.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=500&query=professional print design ${item} creative marketing material`}
                  alt={`Portfolio item ${item}`}
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-lg font-semibold mb-2">Projet Créatif {item}</h4>
                    <p className="text-sm opacity-90">Design & Impression Premium</p>
                    <div className="flex items-center mt-3 space-x-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Voir
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300 bg-transparent"
            >
              {language === "fr" ? "Voir Plus de Projets" : "عرض المزيد من المشاريع"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{currentContent.testimonials.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentContent.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-blue-500 mb-6" />
                  <p className="text-slate-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{currentContent.contact.title}</h2>
            <p className="text-xl text-slate-600">{currentContent.contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {/* Address Card */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {language === "fr" ? "Adresse" : "العنوان"}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{currentContent.contact.address}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 hover:bg-blue-50"
                        onClick={() => window.open("https://maps.google.com", "_blank")}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        {language === "fr" ? "Itinéraire" : "الاتجاهات"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {language === "fr" ? "Téléphone" : "الهاتف"}
                      </h3>
                      <p className="text-slate-600 mb-2">{currentContent.contact.phone}</p>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-600">WhatsApp: {currentContent.contact.whatsapp}</span>
                      </div>
                      <div className="flex space-x-2 mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-blue-50"
                          onClick={() => window.open(`tel:${currentContent.contact.phone}`, "_self")}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {language === "fr" ? "Appeler" : "اتصل"}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-green-50"
                          onClick={() =>
                            window.open(`https://wa.me/${currentContent.contact.whatsapp.replace(/\s/g, "")}`, "_blank")
                          }
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Email</h3>
                      <p className="text-slate-600 mb-3">{currentContent.contact.email}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-purple-50"
                        onClick={() => window.open(`mailto:${currentContent.contact.email}`, "_self")}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        {language === "fr" ? "Envoyer un email" : "إرسال بريد إلكتروني"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours Card */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">{currentContent.contact.hours.title}</h3>
                      <div className="space-y-2 text-slate-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">{currentContent.contact.hours.weekdays}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{currentContent.contact.hours.saturday}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-red-500" />
                          <span className="text-sm">{currentContent.contact.hours.sunday}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div className="relative">
              <Card className="border-0 shadow-2xl overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full min-h-[600px]">
                    {/* Placeholder Map */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=600&width=600"
                        alt="BUZZWORK Location Map"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Map Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Location Pin */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Location Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                              <Building className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800">BUZZWORK</h4>
                              <p className="text-sm text-slate-600">
                                {language === "fr" ? "Imprimerie & Marketing" : "مطبعة وتسويق"}
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 flex space-x-2">
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                              onClick={() => window.open("https://maps.google.com", "_blank")}
                            >
                              <Navigation className="w-4 h-4 mr-2" />
                              {language === "fr" ? "Itinéraire" : "الاتجاهات"}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="hover:bg-gray-50"
                              onClick={() => setShowOrderForm(true)}
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              {language === "fr" ? "Commander" : "اطلب"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === "fr" ? "Prêt à Démarrer Votre Projet ?" : "مستعد لبدء مشروعك؟"}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {language === "fr"
              ? "Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé."
              : "اتصل بنا اليوم للحصول على عرض أسعار مجاني ومخصص."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-4 rounded-full bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
              onClick={() => setShowOrderForm(true)}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {language === "fr" ? "Commander Maintenant" : "اطلب الآن"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 rounded-full border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              {language === "fr" ? "Appeler" : "اتصل"}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <Printer className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">BUZZWORK</h3>
                  <p className="text-sm text-slate-400">مطبعة • PRINT STUDIO</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                {language === "fr"
                  ? "Votre partenaire créatif pour tous vos projets d'impression et de marketing. Excellence, innovation et service client au cœur de notre mission."
                  : "شريكك الإبداعي لجميع مشاريع الطباعة والتسويق. التميز والابتكار وخدمة العملاء في قلب مهمتنا."}
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-blue-400 font-bold text-lg">www.buzzawork.com</div>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  {language === "fr" ? "En ligne" : "متصل"}
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">{language === "fr" ? "Contact" : "اتصل بنا"}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span>WhatsApp: +33 6 12 34 56 78</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>contact@buzzawork.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">{language === "fr" ? "Suivez-nous" : "تابعنا"}</h4>
              <div className="flex space-x-4 mb-6">
                <Link
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium">{language === "fr" ? "Horaires" : "ساعات العمل"}</h5>
                <div className="text-sm text-slate-400">
                  <p>{language === "fr" ? "Lun - Ven: 8h - 18h" : "الإثنين - الجمعة: 8ص - 6م"}</p>
                  <p>{language === "fr" ? "Sam: 9h - 16h" : "السبت: 9ص - 4م"}</p>
                  <p>{language === "fr" ? "Dim: Fermé" : "الأحد: مغلق"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 mb-4 md:mb-0">
                &copy; 2024 BUZZWORK. {language === "fr" ? "Tous droits réservés." : "جميع الحقوق محفوظة."}
              </p>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
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
    </div>
  )
}
