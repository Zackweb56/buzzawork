export interface HeroData {
  title: string
  subtitle: string
  description: string
  cta: string
  cta2: string
  stats: Array<{ number: string; label: string }>
}

export interface AboutData {
  title: string
  subtitle: string
  description: string
  values: Array<{ title: string; description: string }>
}

export interface CategoryData {
  title: string
  description: string
  icon: string
}

export interface CategoriesData {
  title: string
  subtitle: string
  items: CategoryData[]
}

export interface ServiceData {
  title: string
  description: string
}

export interface ServicesData {
  title: string
  subtitle: string
  items: ServiceData[]
}

export interface WhyChooseData {
  title: string
  subtitle: string
  reasons: Array<{ title: string; description: string }>
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface ProcessData {
  title: string
  subtitle: string
  steps: ProcessStep[]
}

export interface PortfolioData {
  title: string
  subtitle: string
}

export interface TestimonialData {
  text: string
  author: string
  company: string
}

export interface TestimonialsData {
  title: string
  items: TestimonialData[]
}

export interface CalculatorData {
  title: string
  quantity: string
  type: string
  calculate: string
  estimate: string
}

export interface OrderData {
  title: string
  subtitle: string
  name: string
  phone: string
  category: string
  details: string
  send: string
}

export interface ContactHours {
  title: string
  weekdays: string
  saturday: string
  sunday: string
}

export interface ContactData {
  title: string
  subtitle: string
  address: string
  phone: string
  whatsapp: string
  email: string
  hours: ContactHours
}

export interface ContentData {
  hero: HeroData
  about: AboutData
  categories: CategoriesData
  services: ServicesData
  whyChoose: WhyChooseData
  process: ProcessData
  portfolio: PortfolioData
  testimonials: TestimonialsData
  calculator: CalculatorData
  order: OrderData
  contact: ContactData
}

export const content: Record<string, ContentData> = {
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
      address: "123 Rue de la Créativité, 75001 Béni Mellal, Maroc",
      phone: "+212-612542032",
      whatsapp: "+212-645875120",
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
      phone: "+212-612542032",
      whatsapp: "+212-645875120",
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