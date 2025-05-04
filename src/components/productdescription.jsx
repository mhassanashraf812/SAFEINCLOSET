"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Info, Check, Truck } from "lucide-react"

export default function ProductDescriptionSection() {
  const [expanded, setExpanded] = useState(true)
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    {
      id: 1,
      title: "Premium Quality",
      description: "Made with high-quality fabric that's both comfortable and durable for everyday wear.",
      icon: <Check className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Fast Shipping",
      description: "Free shipping on all orders over $50. Orders ship within 1-2 business days.",
      icon: <Truck className="w-5 h-5" />,
    },
  ]

  // Helper function to conditionally join class names
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <div>
      <div
        className="flex justify-between items-center border px-5 py-3 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <b className="text-sm">Description</b>
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </div>

      {expanded && (
        <div className="border border-t-0 px-6 py-6 animate-in fade-in duration-300">
          <div className="space-y-6">
            {/* Main description */}
            <div className="text-sm text-gray-700 space-y-4">
              <p>
                At Safein Closet, we believe that fashion should be accessible, sustainable, and expressive. Our
                carefully curated collection features timeless pieces that blend comfort with style, ensuring you look
                and feel your best for any occasion.
              </p>
              <p>
                Each piece in our collection is designed with attention to detail, ensuring that you not only look
                stylish but also feel confident in what you wear. Our products are ethically manufactured with
                sustainable practices.
              </p>
            </div>

            {/* Interactive features section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={cn(
                    "border rounded-lg p-4 cursor-pointer transition-all",
                    activeFeature === feature.id ? "border-black bg-gray-50 shadow-sm" : "hover:border-gray-400",
                  )}
                  onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-gray-700">{feature.icon}</div>
                    <h3 className="font-medium text-sm">{feature.title}</h3>
                  </div>
                  {activeFeature === feature.id && <p className="text-sm text-gray-600 mt-2">{feature.description}</p>}
                </div>
              ))}
            </div>

            {/* Color disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-sm text-amber-800">Please Note:</h4>
                  <p className="text-sm text-amber-700 mt-1">
                    The original color may appear slightly different due to lighting conditions, display settings, and
                    photography. We strive to represent colors as accurately as possible, but slight variations may
                    occur.
                  </p>
                </div>
              </div>
            </div>

            {/* Care instructions */}
            <div className="border-t pt-4 mt-4">
              <h4 className="font-medium text-sm mb-2">Care Instructions:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Machine wash cold with similar colors</li>
                <li>Gentle cycle recommended</li>
                <li>Do not bleach</li>
                <li>Tumble dry low</li>
                <li>Iron on low heat if needed</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
