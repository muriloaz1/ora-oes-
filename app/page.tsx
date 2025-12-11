import { CoverPage } from "@/components/cover-page"
import { IntroductionPage } from "@/components/introduction-page"
import { InstructionsPage } from "@/components/instructions-page"
import { PrayerCards } from "@/components/prayer-cards"
import { FinalPage } from "@/components/final-page"
import { PrintButton } from "@/components/print-button"
import { AssemblyManual } from "@/components/assembly-manual"
import { DecorativeLabels } from "@/components/decorative-labels"

export default function Home() {
  return (
    <main className="bg-white">
      <PrintButton />
      <div className="print-hide-on-prayers print-hide-on-labels">
        <CoverPage />
        <IntroductionPage />
        <InstructionsPage />
        <AssemblyManual />
      </div>
      <div className="print-hide-on-labels">
        <PrayerCards />
      </div>
      <div className="print-hide-on-prayers">
        <DecorativeLabels />
      </div>
      <div className="print-hide-on-prayers print-hide-on-labels">
        <FinalPage />
      </div>
    </main>
  )
}
