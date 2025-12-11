import { Heart, Star, Sparkles } from "lucide-react"

export function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 p-8 md:p-12 print:h-screen print:break-after-page">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Star className="w-6 h-6 fill-yellow-300 text-yellow-300" />
          <h2 className="text-3xl font-bold text-sky-600 font-serif">Bem-vindos!</h2>
          <Star className="w-6 h-6 fill-yellow-300 text-yellow-300" />
        </div>

        {/* Introduction card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-pink-100 mb-8">
          <div className="flex items-start gap-3 mb-6">
            <Heart className="w-8 h-8 fill-pink-300 text-pink-300 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-sky-600 mb-3">O Propósito deste Material</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Este material foi criado com muito amor para ajudar você a construir momentos especiais de conexão com
                seus filhos através da fé.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-pink-300 mt-2 flex-shrink-0" />
              <p>
                <strong className="text-sky-600">Criar conexão</strong> entre pais e filhos através de momentos de
                oração e reflexão.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-sky-300 mt-2 flex-shrink-0" />
              <p>
                <strong className="text-sky-600">Incentivar a fé</strong> e valores cristãos de forma leve e acessível
                para crianças.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-300 mt-2 flex-shrink-0" />
              <p>
                <strong className="text-sky-600">Ensinar gratidão</strong> e a importância da proteção divina no dia a
                dia.
              </p>
            </div>
          </div>
        </div>

        {/* How to use */}
        <div className="bg-gradient-to-r from-pink-50 to-sky-50 rounded-3xl p-8 border-2 border-sky-100">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <h3 className="text-xl font-semibold text-sky-600">Como Usar o Potinho da Fé</h3>
          </div>

          <div className="grid gap-4">
            {[
              { num: "1", text: "Imprima o PDF em papel A4" },
              { num: "2", text: "Recorte as orações com cuidado" },
              { num: "3", text: "Dobre ou enrole cada oração" },
              { num: "4", text: "Coloque todas em um potinho bonito" },
              { num: "5", text: "Tire 1 oração por dia com seu filho" },
            ].map((step) => (
              <div key={step.num} className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-sky-300 flex items-center justify-center text-white font-bold text-lg">
                  {step.num}
                </div>
                <p className="text-gray-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center gap-2 mt-8">
          <Heart className="w-4 h-4 fill-pink-200 text-pink-200" />
          <Heart className="w-5 h-5 fill-pink-300 text-pink-300" />
          <Heart className="w-4 h-4 fill-pink-200 text-pink-200" />
        </div>
      </div>
    </div>
  )
}
