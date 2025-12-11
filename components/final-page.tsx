import { Heart, Star, Sparkles } from "lucide-react"

export function FinalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-sky-50 flex flex-col items-center justify-center p-8 print:h-screen print:break-after-page relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-yellow-300">
        <Star className="w-8 h-8 fill-yellow-300" />
      </div>
      <div className="absolute top-20 right-16 text-pink-200">
        <Heart className="w-6 h-6 fill-pink-200" />
      </div>
      <div className="absolute bottom-20 left-16 text-sky-200">
        <Star className="w-6 h-6 fill-sky-200" />
      </div>
      <div className="absolute bottom-32 right-10 text-yellow-200">
        <Star className="w-5 h-5 fill-yellow-200" />
      </div>

      {/* Main content */}
      <div className="max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="w-20 h-20 fill-pink-300 text-pink-300" />
            <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-sky-600 font-serif mb-6">Obrigado!</h2>

        <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-pink-100 mb-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            Que bênção ter você aqui! Esperamos que este material traga momentos preciosos de fé e conexão com seus
            filhos.
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent mb-6" />

          <p className="text-sky-600 font-medium italic">
            "Use este potinho para criar momentos de paz e conexão com seus filhos."
          </p>
        </div>

        <div className="bg-gradient-to-r from-sky-50 to-pink-50 rounded-2xl p-6 border border-sky-100">
          <p className="text-gray-500 text-sm">
            Cada oração é uma semente de amor plantada no coração das crianças. Continue cultivando a fé na sua família!
            🌱
          </p>
        </div>

        {/* Hearts decoration */}
        <div className="flex justify-center gap-2 mt-8">
          <Heart className="w-4 h-4 fill-pink-200 text-pink-200" />
          <Heart className="w-5 h-5 fill-pink-300 text-pink-300" />
          <Heart className="w-6 h-6 fill-pink-400 text-pink-400" />
          <Heart className="w-5 h-5 fill-pink-300 text-pink-300" />
          <Heart className="w-4 h-4 fill-pink-200 text-pink-200" />
        </div>

        <p className="text-xs text-gray-400 mt-8">Potinho da Fé © 2025 • Feito com amor para sua família</p>
      </div>
    </div>
  )
}
