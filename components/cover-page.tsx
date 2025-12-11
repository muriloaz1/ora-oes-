import { Star, Heart, Cloud } from "lucide-react"

export function CoverPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-100 via-white to-pink-50 flex flex-col items-center justify-center p-8 print:h-screen print:break-after-page overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-yellow-300 animate-pulse">
        <Star className="w-8 h-8 fill-yellow-300" />
      </div>
      <div className="absolute top-20 right-16 text-yellow-200">
        <Star className="w-6 h-6 fill-yellow-200" />
      </div>
      <div className="absolute top-32 left-24 text-yellow-200">
        <Star className="w-5 h-5 fill-yellow-200" />
      </div>
      <div className="absolute bottom-40 right-10 text-pink-200">
        <Heart className="w-10 h-10 fill-pink-200" />
      </div>
      <div className="absolute bottom-60 left-8 text-pink-100">
        <Heart className="w-6 h-6 fill-pink-100" />
      </div>
      <div className="absolute top-16 left-1/3 text-white">
        <Cloud className="w-16 h-16 fill-white drop-shadow-sm" />
      </div>
      <div className="absolute top-28 right-1/4 text-white">
        <Cloud className="w-12 h-12 fill-white drop-shadow-sm" />
      </div>

      {/* Jar illustration */}
      <div className="relative mb-8">
        <div className="w-40 h-48 bg-gradient-to-b from-sky-100/50 to-sky-200/30 rounded-b-3xl rounded-t-lg border-4 border-sky-200/60 relative overflow-hidden">
          {/* Jar lid */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-amber-200 rounded-t-lg border-2 border-amber-300" />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-36 h-3 bg-amber-300 rounded-sm" />

          {/* Hearts inside jar */}
          <div className="absolute bottom-4 left-6 text-pink-300">
            <Heart className="w-6 h-6 fill-pink-300" />
          </div>
          <div className="absolute bottom-8 right-6 text-pink-200">
            <Heart className="w-5 h-5 fill-pink-200" />
          </div>
          <div className="absolute bottom-3 left-1/2 text-pink-400">
            <Heart className="w-7 h-7 fill-pink-400" />
          </div>
          <div className="absolute bottom-12 left-8 text-pink-100">
            <Heart className="w-4 h-4 fill-pink-100" />
          </div>
          <div className="absolute bottom-6 right-10 text-rose-200">
            <Heart className="w-5 h-5 fill-rose-200" />
          </div>

          {/* Paper scrolls */}
          <div className="absolute bottom-16 left-4 w-8 h-3 bg-amber-50 rounded-full border border-amber-200 rotate-12" />
          <div className="absolute bottom-14 right-5 w-7 h-3 bg-amber-50 rounded-full border border-amber-200 -rotate-6" />
          <div className="absolute bottom-20 left-1/2 w-6 h-3 bg-amber-50 rounded-full border border-amber-200 rotate-3" />
        </div>

        {/* Sparkles around jar */}
        <div className="absolute -top-2 -right-4 text-yellow-300">
          <Star className="w-4 h-4 fill-yellow-300" />
        </div>
        <div className="absolute top-1/3 -left-6 text-yellow-200">
          <Star className="w-3 h-3 fill-yellow-200" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-sky-600 text-center mb-4 font-serif tracking-wide">
        36 Orações para Crianças
      </h1>

      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-5 h-5 fill-pink-300 text-pink-300" />
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 font-serif">Potinho da Fé</h2>
        <Heart className="w-5 h-5 fill-pink-300 text-pink-300" />
      </div>

      {/* Subtitle */}
      <p className="text-lg text-sky-500 text-center max-w-md leading-relaxed">
        Imprima, recorte e leve mais fé ao dia a dia dos seus filhos.
      </p>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-pink-100 to-transparent" />

      {/* Small angel silhouette */}
      <div className="absolute bottom-20 right-20 opacity-20">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-sky-400">
          <circle cx="12" cy="6" r="3" />
          <path d="M12 10c-3 0-5 2-5 4v2h10v-2c0-2-2-4-5-4z" />
          <ellipse cx="6" cy="10" rx="3" ry="2" />
          <ellipse cx="18" cy="10" rx="3" ry="2" />
        </svg>
      </div>
    </div>
  )
}
