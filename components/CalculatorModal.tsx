"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalculatorData } from "@/lib/data"

interface CalculatorModalProps {
  isOpen: boolean
  onClose: () => void
  data: CalculatorData
  language: string
}

export default function CalculatorModal({ isOpen, onClose, data, language }: CalculatorModalProps) {
  const [quantity, setQuantity] = useState("")
  const [printType, setPrintType] = useState("")
  const [estimatedPrice, setEstimatedPrice] = useState(0)

  const calculatePrice = () => {
    const basePrice =
      printType === "flyers" ? 0.15 : printType === "business-cards" ? 0.25 : printType === "posters" ? 2.5 : 1
    const qty = Number.parseInt(quantity) || 0
    const total = basePrice * qty
    setEstimatedPrice(total)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <Label>{data.quantity}</Label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="1000"
              />
            </div>

            <div>
              <Label>{data.type}</Label>
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
              {data.calculate}
            </Button>

            {estimatedPrice > 0 && (
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-600">{data.estimate}</p>
                <p className="text-2xl font-bold text-blue-600">{estimatedPrice.toFixed(2)} €</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 