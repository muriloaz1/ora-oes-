import { Printer, Scissors, FileText, Star } from "lucide-react"

export function InstructionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-pink-50 p-8 md:p-12 print:h-screen print:break-after-page">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-sky-600 font-serif mb-2">Instruções de Impressão</h2>
          <p className="text-gray-500">Siga os passos para criar seu Potinho da Fé</p>
        </div>

        {/* Visual steps */}
        <div className="grid gap-6">
          {/* Step 1 - Print */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-sky-100 flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center flex-shrink-0">
              <Printer className="w-10 h-10 text-sky-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-sky-600 mb-1">1. Imprima em A4</h3>
              <p className="text-gray-500 text-sm">
                Configure sua impressora para papel A4. Recomendamos papel mais grosso (120g) para maior durabilidade.
              </p>
            </div>
          </div>

          {/* Step 2 - Cut */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-pink-100 flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0">
              <Scissors className="w-10 h-10 text-pink-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-500 mb-1">2. Recorte com Cuidado</h3>
              <p className="text-gray-500 text-sm">
                Corte cada cartão de oração seguindo as linhas pontilhadas. Use tesoura sem ponta se as crianças forem
                ajudar!
              </p>
            </div>
          </div>

          {/* Step 3 - Fold */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-yellow-100 flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center flex-shrink-0">
              <FileText className="w-10 h-10 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-600 mb-1">3. Dobre ou Enrole</h3>
              <p className="text-gray-500 text-sm">
                Dobre cada oração ao meio ou enrole como um pequeno pergaminho. As crianças adoram essa parte!
              </p>
            </div>
          </div>

          {/* Step 4 - Jar */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-100 flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-12 bg-purple-200/50 rounded-b-xl rounded-t-sm border-2 border-purple-300" />
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-purple-300 rounded-t" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-500 mb-1">4. Coloque no Potinho</h3>
              <p className="text-gray-500 text-sm">
                Use um potinho de vidro bonito, uma caixinha decorada ou qualquer recipiente especial que vocês
                escolherem juntos.
              </p>
            </div>
          </div>
        </div>

        {/* Tip box */}
        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
          <div className="flex items-start gap-3">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-700 mb-1">Dica Especial</h4>
              <p className="text-yellow-800 text-sm">
                Crie um momento especial do dia para sortear a oração – pode ser antes de dormir, ao acordar ou antes
                das refeições. A consistência ajuda a criar o hábito!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
