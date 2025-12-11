import { Heart, Star, Cloud } from "lucide-react"

interface Prayer {
  id: number
  title: string
  text: string
  theme: string
}

const themeStyles: Record<string, { bg: string; border: string; title: string; accent: string }> = {
  sky: {
    bg: "bg-gradient-to-br from-sky-50 to-blue-50",
    border: "border-sky-200",
    title: "text-sky-600",
    accent: "text-sky-300",
  },
  pink: {
    bg: "bg-gradient-to-br from-pink-50 to-rose-50",
    border: "border-pink-200",
    title: "text-pink-500",
    accent: "text-pink-300",
  },
  yellow: {
    bg: "bg-gradient-to-br from-yellow-50 to-amber-50",
    border: "border-yellow-200",
    title: "text-yellow-600",
    accent: "text-yellow-400",
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-violet-50",
    border: "border-purple-200",
    title: "text-purple-500",
    accent: "text-purple-300",
  },
}

export function PrayerCard({ prayer }: { prayer: Prayer }) {
  const styles = themeStyles[prayer.theme] || themeStyles.sky

  return (
    <div
      className={`${styles.bg} ${styles.border} border-2 border-dashed rounded-2xl p-5 relative overflow-hidden flex flex-col`}
    >
      {/* Decorative corner elements */}
      <div className={`absolute top-2 right-2 ${styles.accent}`}>
        <Star className="w-4 h-4 fill-current" />
      </div>
      <div className={`absolute bottom-2 left-2 ${styles.accent}`}>
        <Heart className="w-4 h-4 fill-current" />
      </div>
      <div className={`absolute top-2 left-2 opacity-30 ${styles.accent}`}>
        <Cloud className="w-6 h-6 fill-current" />
      </div>

      {/* Prayer number */}
      <div className={`text-xs font-medium ${styles.accent} mb-1`}>Oração #{prayer.id}</div>

      {/* Title */}
      <h3 className={`text-lg font-bold ${styles.title} mb-3 font-serif`}>{prayer.title}</h3>

      {/* Prayer text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{prayer.text}</p>

      {/* Bottom decoration */}
      <div className="flex justify-center gap-1 mt-3">
        <div className={`w-1.5 h-1.5 rounded-full ${styles.accent} bg-current`} />
        <div className={`w-1.5 h-1.5 rounded-full ${styles.accent} bg-current opacity-60`} />
        <div className={`w-1.5 h-1.5 rounded-full ${styles.accent} bg-current opacity-30`} />
      </div>
    </div>
  )
}
