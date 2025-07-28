"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageCircle, Navigation, Building, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import { ContactData } from "@/lib/data"

interface ContactProps {
  data: ContactData
  language: string
  onOrderFormToggle: () => void
}

export default function Contact({ data, language, onOrderFormToggle }: ContactProps) {
  return (
    <section id="contact" className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">{data.title}</h2>
          <p className="text-lg text-slate-600">{data.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-4">
            {/* Address Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-1">
                      {language === "fr" ? "Adresse" : "العنوان"}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{data.address}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 hover:bg-blue-50 text-xs"
                      onClick={() => window.open("https://maps.google.com", "_blank")}
                    >
                      <Navigation className="w-3 h-3 mr-1" />
                      {language === "fr" ? "Itinéraire" : "الاتجاهات"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-1">
                      {language === "fr" ? "Téléphone" : "الهاتف"}
                    </h3>
                    <p className="text-slate-600 mb-1 text-sm">{data.phone}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-slate-600">WhatsApp: {data.whatsapp}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-blue-50 text-xs"
                        onClick={() => window.open(`tel:${data.phone}`, "_self")}
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        {language === "fr" ? "Appeler" : "اتصل"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-green-50 text-xs"
                        onClick={() =>
                          window.open(`https://wa.me/${data.whatsapp.replace(/\s/g, "")}`, "_blank")
                        }
                      >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600 mb-2 text-sm">{data.email}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-purple-50 text-xs"
                      onClick={() => window.open(`mailto:${data.email}`, "_self")}
                    >
                      <Mail className="w-3 h-3 mr-1" />
                      {language === "fr" ? "Envoyer un email" : "إرسال بريد إلكتروني"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">{data.hours.title}</h3>
                    <div className="space-y-1 text-slate-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 text-blue-500" />
                        <span className="text-xs">{data.hours.weekdays}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 text-green-500" />
                        <span className="text-xs">{data.hours.saturday}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 text-red-500" />
                        <span className="text-xs">{data.hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="relative">
            <Card className="border-0 shadow-xl overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-full min-h-[500px]">
                  {/* Placeholder Map */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="BUZZWORK Location Map"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Map Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Location Pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Location Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Building className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 text-sm">BUZZWORK</h4>
                            <p className="text-xs text-slate-600">
                              {language === "fr" ? "Imprimerie & Marketing" : "مطبعة وتسويق"}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
                            onClick={() => window.open("https://maps.google.com", "_blank")}
                          >
                            <Navigation className="w-3 h-3 mr-1" />
                            {language === "fr" ? "Itinéraire" : "الاتجاهات"}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:bg-gray-50 text-xs"
                            onClick={onOrderFormToggle}
                          >
                            <MessageCircle className="w-3 h-3 mr-1" />
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
  )
} 