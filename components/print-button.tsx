"use client"

import { Printer, FileText, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrintButton() {
  const handlePrintAll = () => {
    document.body.classList.remove("print-only-prayers", "print-only-labels")
    window.print()
  }

  const handlePrintPrayers = () => {
    document.body.classList.remove("print-only-labels")
    document.body.classList.add("print-only-prayers")
    window.print()
    setTimeout(() => {
      document.body.classList.remove("print-only-prayers")
    }, 1000)
  }

  const handlePrintLabels = () => {
    document.body.classList.remove("print-only-prayers")
    document.body.classList.add("print-only-labels")
    window.print()
    setTimeout(() => {
      document.body.classList.remove("print-only-labels")
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 print:hidden">
      <Button
        onClick={handlePrintLabels}
        size="lg"
        className="bg-purple-500 hover:bg-purple-600 text-white shadow-lg rounded-full px-6 py-3 flex items-center gap-2 font-semibold"
      >
        <Tag className="w-5 h-5" />
        Rótulos
      </Button>
      <Button
        onClick={handlePrintPrayers}
        size="lg"
        className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg rounded-full px-6 py-3 flex items-center gap-2 font-semibold"
      >
        <FileText className="w-5 h-5" />
        Somente Orações
      </Button>
      <Button
        onClick={handlePrintAll}
        size="lg"
        className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg rounded-full px-6 py-3 flex items-center gap-2 font-semibold"
      >
        <Printer className="w-5 h-5" />
        PDF Completo
      </Button>
    </div>
  )
}
