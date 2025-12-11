export function DecorativeLabels() {
  const labels = [
    {
      type: "main",
      title: "Potinho da Fé",
      subtitle: "Orações Infantis",
      colors: "from-pink-200 via-purple-200 to-sky-200",
      borderColor: "border-pink-300",
    },
    {
      type: "main",
      title: "Potinho da Fé",
      subtitle: "Para rezar todo dia",
      colors: "from-yellow-200 via-orange-200 to-pink-200",
      borderColor: "border-yellow-300",
    },
    {
      type: "main",
      title: "Potinho da Fé",
      subtitle: "Bençãos para o dia",
      colors: "from-sky-200 via-teal-200 to-green-200",
      borderColor: "border-sky-300",
    },
    {
      type: "main",
      title: "Potinho da Fé",
      subtitle: "Com amor de Jesus",
      colors: "from-purple-200 via-pink-200 to-rose-200",
      borderColor: "border-purple-300",
    },
  ]

  const smallLabels = [
    { text: "Reze com Fé", color: "bg-pink-100 border-pink-300 text-pink-700" },
    { text: "Deus te ama", color: "bg-sky-100 border-sky-300 text-sky-700" },
    { text: "Fé & Amor", color: "bg-purple-100 border-purple-300 text-purple-700" },
    { text: "Oração do dia", color: "bg-yellow-100 border-yellow-300 text-yellow-700" },
    { text: "Sorteie uma!", color: "bg-green-100 border-green-300 text-green-700" },
    { text: "Com carinho", color: "bg-orange-100 border-orange-300 text-orange-700" },
    { text: "Para você", color: "bg-rose-100 border-rose-300 text-rose-700" },
    { text: "Abençoado", color: "bg-teal-100 border-teal-300 text-teal-700" },
  ]

  const circleLabels = [
    { icon: "✝️", color: "bg-sky-100 border-sky-300" },
    { icon: "💖", color: "bg-pink-100 border-pink-300" },
    { icon: "🙏", color: "bg-purple-100 border-purple-300" },
    { icon: "⭐", color: "bg-yellow-100 border-yellow-300" },
    { icon: "🕊️", color: "bg-white border-gray-300" },
    { icon: "🌸", color: "bg-rose-100 border-rose-300" },
    { icon: "☁️", color: "bg-sky-50 border-sky-200" },
    { icon: "🌈", color: "bg-gradient-to-r from-pink-100 to-sky-100 border-purple-200" },
  ]

  return (
    <section className="w-[210mm] min-h-[297mm] mx-auto bg-white p-8 print:p-6 print-hide-on-prayers">
      {/* Header */}
      <div className="text-center mb-6 print-hide-on-labels">
        <h2 className="text-3xl font-bold text-purple-700 mb-2 font-serif">Rótulos Decorativos</h2>
        <p className="text-lg text-purple-600">Recorte e cole no seu potinho!</p>
        <div className="flex justify-center gap-2 mt-2">
          <span className="text-xl">✂️</span>
          <span className="text-xl">🎨</span>
          <span className="text-xl">✨</span>
        </div>
      </div>

      {/* Main Labels - Large oval labels for jar body */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide print-hide-on-labels">
          Rótulos Grandes (para o corpo do vidro)
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {labels.map((label, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${label.colors} ${label.borderColor} border-2 border-dashed rounded-[40px] p-6 text-center relative overflow-hidden`}
            >
              {/* Decorative elements */}
              <div className="absolute top-2 left-3 text-lg opacity-60">✨</div>
              <div className="absolute top-2 right-3 text-lg opacity-60">✨</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-lg opacity-60">💖</div>

              <h4 className="text-xl font-bold text-gray-700 mb-1 font-serif">{label.title}</h4>
              <p className="text-sm text-gray-600">{label.subtitle}</p>

              {/* Small decorative icons */}
              <div className="flex justify-center gap-2 mt-2">
                <span className="text-xs">🙏</span>
                <span className="text-xs">⭐</span>
                <span className="text-xs">🙏</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Small Rectangle Labels */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide print-hide-on-labels">
          Etiquetas Pequenas
        </h3>
        <div className="grid grid-cols-4 gap-3">
          {smallLabels.map((label, index) => (
            <div key={index} className={`${label.color} border-2 border-dashed rounded-xl py-3 px-4 text-center`}>
              <span className="text-sm font-bold">{label.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Circle Labels for Lid */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide print-hide-on-labels">
          Círculos para Tampa
        </h3>
        <div className="grid grid-cols-8 gap-3">
          {circleLabels.map((label, index) => (
            <div
              key={index}
              className={`${label.color} border-2 border-dashed rounded-full w-16 h-16 flex items-center justify-center`}
            >
              <span className="text-2xl">{label.icon}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Strips */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide print-hide-on-labels">
          Faixas Decorativas (para enrolar no vidro)
        </h3>
        <div className="space-y-3">
          <div className="h-12 bg-gradient-to-r from-pink-200 via-purple-200 to-sky-200 border-2 border-dashed border-pink-300 rounded-lg flex items-center justify-center gap-4">
            <span>✨</span>
            <span>💖</span>
            <span>🙏</span>
            <span>⭐</span>
            <span>💖</span>
            <span>✨</span>
            <span>🌸</span>
            <span>💖</span>
            <span>✨</span>
          </div>
          <div className="h-12 bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200 border-2 border-dashed border-yellow-300 rounded-lg flex items-center justify-center gap-4">
            <span>🌟</span>
            <span>🕊️</span>
            <span>☁️</span>
            <span>🌟</span>
            <span>🕊️</span>
            <span>☁️</span>
            <span>🌟</span>
            <span>🕊️</span>
            <span>☁️</span>
          </div>
          <div className="h-12 bg-gradient-to-r from-sky-200 via-teal-200 to-green-200 border-2 border-dashed border-sky-300 rounded-lg flex items-center justify-center gap-4">
            <span>🌈</span>
            <span>☀️</span>
            <span>🌸</span>
            <span>🌈</span>
            <span>☀️</span>
            <span>🌸</span>
            <span>🌈</span>
            <span>☀️</span>
            <span>🌸</span>
          </div>
        </div>
      </div>

      {/* Tag Labels */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide print-hide-on-labels">
          Tags para Pendurar
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { text: "Com amor", color: "bg-pink-100 border-pink-300" },
            { text: "Para você", color: "bg-sky-100 border-sky-300" },
            { text: "De: _____", color: "bg-yellow-100 border-yellow-300" },
            { text: "Presente", color: "bg-purple-100 border-purple-300" },
          ].map((tag, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`${tag.color} border-2 border-dashed rounded-lg w-full pt-4 pb-6 px-3 text-center relative`}
              >
                {/* Hole for ribbon */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
                <span className="text-sm font-bold text-gray-700 mt-2 block">{tag.text}</span>
                <span className="text-lg mt-1 block">💖</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions Footer */}
      <div className="mt-6 text-center text-sm text-gray-500 print-hide-on-labels">
        <p>Recorte seguindo as linhas pontilhadas e cole com cola branca ou fita dupla face.</p>
      </div>
    </section>
  )
}
