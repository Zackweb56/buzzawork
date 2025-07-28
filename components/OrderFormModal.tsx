"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { OrderData } from "@/lib/data"

interface OrderFormModalProps {
  isOpen: boolean
  onClose: () => void
  data: OrderData
  language: string
  orderCategory?: string
  contactData: {
    whatsapp: string
  }
}

export default function OrderFormModal({ isOpen, onClose, data, language, orderCategory, contactData }: OrderFormModalProps) {
  const [clientName, setClientName] = useState("")
  const [clientPhone, setClientPhone] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(orderCategory || "")
  const [orderDetails, setOrderDetails] = useState("")

  const sendWhatsAppOrder = () => {
    const message = `Bonjour BUZZWORK! 
    
Nom: ${clientName}
Téléphone: ${clientPhone}
Catégorie: ${selectedCategory}
Détails: ${orderDetails}

Je souhaite passer une commande. Merci de me contacter.`

    const whatsappUrl = `https://wa.me/${contactData.whatsapp.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">{data.title}</h3>
              <p className="text-sm text-slate-600">{data.subtitle}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <Label>{data.name}</Label>
              <Input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Jean Dupont" />
            </div>

            <div>
              <Label>{data.phone}</Label>
              <Input
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="+212-645875120"
              />
            </div>

            <div>
              <Label>{data.category}</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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
              <Label>{data.details}</Label>
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
              disabled={!clientName || !clientPhone || !selectedCategory}
            >
              <Send className="w-4 h-4 mr-2" />
              {data.send}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 