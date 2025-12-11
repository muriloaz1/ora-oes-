export function AssemblyManual() {
  const steps = [
    {
      number: 1,
      title: "Escolha o Potinho",
      description: "Pegue um vidro limpo e seco. Pode ser de geleia, papinha ou qualquer vidro com tampa!",
      icon: "🫙",
      color: "bg-sky-100 border-sky-300",
    },
    {
      number: 2,
      title: "Imprima as Orações",
      description: "Imprima os cartões de oração em papel firme. Use papel colorido para ficar ainda mais bonito!",
      icon: "🖨️",
      color: "bg-pink-100 border-pink-300",
    },
    {
      number: 3,
      title: "Recorte com Carinho",
      description: "Recorte cada cartão de oração com cuidado, seguindo as linhas pontilhadas.",
      icon: "✂️",
      color: "bg-yellow-100 border-yellow-300",
    },
    {
      number: 4,
      title: "Dobre os Cartões",
      description: "Dobre cada cartão ao meio e coloque dentro do potinho. Quanto mais dobrado, mais surpresa!",
      icon: "📄",
      color: "bg-purple-100 border-purple-300",
    },
    {
      number: 5,
      title: "Decore o Potinho",
      description: "Cole os rótulos decorativos no vidro. Use fitas, adesivos e sua criatividade!",
      icon: "🎨",
      color: "bg-green-100 border-green-300",
    },
    {
      number: 6,
      title: "Pronto para Usar!",
      description: "Coloque em um lugar especial. Todo dia, sorteie uma oração e reze com fé!",
      icon: "✨",
      color: "bg-orange-100 border-orange-300",
    },
  ]

  return (
    <section className="w-[210mm] min-h-[297mm] mx-auto bg-gradient-to-b from-sky-50 to-white p-8 print:p-6 print-hide-on-prayers print-hide-on-labels">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-sky-700 mb-2 font-serif">Manual de Montagem</h2>
        <p className="text-lg text-sky-600">Passo a passo fácil para montar seu Potinho da Fé</p>
        <div className="flex justify-center gap-2 mt-3">
          <span className="text-2xl">🌟</span>
          <span className="text-2xl">💖</span>
          <span className="text-2xl">🌟</span>
        </div>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-2 gap-4">
        {steps.map((step) => (
          <div key={step.number} className={`${step.color} border-2 rounded-2xl p-5 relative`}>
            {/* Step Number Badge */}
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-white border-2 border-sky-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-sky-600 font-bold text-lg">{step.number}</span>
            </div>

            {/* Icon */}
            <div className="text-4xl text-center mb-3">{step.icon}</div>

            {/* Content */}
            <h3 className="text-lg font-bold text-gray-700 text-center mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 text-center leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-5">
        <h3 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-2">
          <span>💡</span> Dicas Especiais
        </h3>
        <ul className="space-y-2 text-sm text-yellow-800">
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">•</span>
            Use papel de gramatura maior (120g) para os cartões durarem mais!
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">•</span>
            Decore a tampa com tecido, feltro ou papel colorido.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">•</span>
            Convide as crianças para participar da montagem - elas vão amar!
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">•</span>
            Crie um momento especial do dia para sortear a oração.
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="text-sky-600 text-sm">Feito com amor para abençoar sua família!</p>
        <div className="flex justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-pink-400 text-lg">
              ♥
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
