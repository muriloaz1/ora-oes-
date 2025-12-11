import { PrayerCard } from "./prayer-card"

const prayers = [
  {
    id: 1,
    title: "Oração da Manhã",
    text: "Querido Deus, obrigado por este novo dia. Ajuda-me a ser gentil e a espalhar alegria por onde eu passar. Amém.",
    theme: "sky",
  },
  {
    id: 2,
    title: "Oração de Proteção",
    text: "Senhor, protege-me hoje em tudo que eu fizer. Guarda meus passos e me livra de todo mal. Amém.",
    theme: "pink",
  },
  {
    id: 3,
    title: "Oração da Gratidão",
    text: "Obrigado, Deus, pela minha família, meus amigos e por tudo de bom na minha vida. Eu Te amo! Amém.",
    theme: "yellow",
  },
  {
    id: 4,
    title: "Oração do Sono Tranquilo",
    text: "Deus querido, abençoa meu sono esta noite. Manda Teus anjos me guardarem e me dá lindos sonhos. Amém.",
    theme: "purple",
  },
  {
    id: 5,
    title: "Oração da Coragem",
    text: "Senhor, quando eu tiver medo, lembra-me que Tu estás comigo. Dá-me coragem para enfrentar tudo! Amém.",
    theme: "sky",
  },
  {
    id: 6,
    title: "Oração da Sabedoria",
    text: "Pai do Céu, ajuda-me a aprender coisas novas na escola e a usar o que aprendo para fazer o bem. Amém.",
    theme: "pink",
  },
  {
    id: 7,
    title: "Oração da Paz",
    text: "Deus de paz, enche meu coração de calma. Ajuda-me a não brigar e a resolver tudo com amor. Amém.",
    theme: "yellow",
  },
  {
    id: 8,
    title: "Oração do Amor",
    text: "Senhor, ensina-me a amar como Tu me amas. Que eu possa demonstrar amor a todos ao meu redor. Amém.",
    theme: "purple",
  },
  {
    id: 9,
    title: "Oração da Bondade",
    text: "Querido Deus, faz de mim uma criança bondosa. Ajuda-me a ajudar os outros sempre que puder. Amém.",
    theme: "sky",
  },
  {
    id: 10,
    title: "Oração da Fé",
    text: "Pai, aumenta minha fé! Ajuda-me a confiar em Ti mesmo quando não entendo as coisas. Amém.",
    theme: "pink",
  },
  {
    id: 11,
    title: "Oração da Alegria",
    text: "Deus, obrigado pela alegria! Que meu sorriso possa iluminar o dia de alguém hoje. Amém.",
    theme: "yellow",
  },
  {
    id: 12,
    title: "Oração pela Família",
    text: "Senhor, abençoa minha mamãe, meu papai e toda minha família. Protege cada um deles, por favor. Amém.",
    theme: "purple",
  },
  {
    id: 13,
    title: "Oração da Paciência",
    text: "Querido Deus, quando eu ficar com pressa, ajuda-me a ter paciência e esperar com calma. Amém.",
    theme: "sky",
  },
  {
    id: 14,
    title: "Oração da Honestidade",
    text: "Pai do Céu, ajuda-me a sempre falar a verdade, mesmo quando for difícil. Amém.",
    theme: "pink",
  },
  {
    id: 15,
    title: "Oração do Perdão",
    text: "Senhor, ensina-me a perdoar quem me magoou, assim como Tu me perdoas sempre. Amém.",
    theme: "yellow",
  },
  {
    id: 16,
    title: "Oração da Humildade",
    text: "Deus, ajuda-me a não me achar melhor que os outros. Quero ser humilde como Jesus. Amém.",
    theme: "purple",
  },
  {
    id: 17,
    title: "Oração pelos Amigos",
    text: "Querido Deus, abençoa meus amigos. Ajuda-nos a brincar juntos com amor e respeito. Amém.",
    theme: "sky",
  },
  {
    id: 18,
    title: "Oração da Obediência",
    text: "Pai, ajuda-me a obedecer meus pais e professores, pois sei que eles querem meu bem. Amém.",
    theme: "pink",
  },
  {
    id: 19,
    title: "Oração de Confiança",
    text: "Senhor, eu confio em Ti com todo meu coração. Sei que Tu cuidas de mim sempre! Amém.",
    theme: "yellow",
  },
  {
    id: 20,
    title: "Oração da Generosidade",
    text: "Deus querido, ensina-me a compartilhar o que tenho com alegria no coração. Amém.",
    theme: "purple",
  },
  {
    id: 21,
    title: "Oração pelos Doentes",
    text: "Senhor, cura as pessoas que estão doentes. Traz conforto e saúde para todos que precisam. Amém.",
    theme: "sky",
  },
  {
    id: 22,
    title: "Oração da Noite",
    text: "Obrigado, Deus, por este dia que passou. Perdoa meus erros e me ajuda a ser melhor amanhã. Amém.",
    theme: "pink",
  },
  {
    id: 23,
    title: "Oração do Respeito",
    text: "Pai do Céu, ensina-me a respeitar todas as pessoas, sejam grandes ou pequenas. Amém.",
    theme: "yellow",
  },
  {
    id: 24,
    title: "Oração da Esperança",
    text: "Querido Deus, mesmo nos dias difíceis, enche meu coração de esperança e luz. Amém.",
    theme: "purple",
  },
  {
    id: 25,
    title: "Oração pela Natureza",
    text: "Senhor, obrigado pelas flores, animais e toda a natureza linda que Tu criaste. Amém.",
    theme: "sky",
  },
  {
    id: 26,
    title: "Oração da Força",
    text: "Deus, quando eu me sentir fraco, lembra-me que Tua força está em mim. Tu és meu herói! Amém.",
    theme: "pink",
  },
  {
    id: 27,
    title: "Oração do Anjo da Guarda",
    text: "Anjo do Senhor, meu guardião querido, me acompanha e me protege em todos os momentos. Amém.",
    theme: "yellow",
  },
  {
    id: 28,
    title: "Oração da Simplicidade",
    text: "Pai, ajuda-me a me alegrar com as coisas simples da vida e agradecer por cada uma. Amém.",
    theme: "purple",
  },
  {
    id: 29,
    title: "Oração pelo Mundo",
    text: "Querido Deus, abençoa todas as crianças do mundo. Dá paz e amor a cada uma delas. Amém.",
    theme: "sky",
  },
  {
    id: 30,
    title: "Oração da Criatividade",
    text: "Senhor, obrigado pelos meus talentos. Ajuda-me a usá-los para fazer coisas bonitas. Amém.",
    theme: "pink",
  },
  {
    id: 31,
    title: "Oração do Coração Limpo",
    text: "Deus, limpa meu coração de toda maldade. Quero ter pensamentos bons e puros. Amém.",
    theme: "yellow",
  },
  {
    id: 32,
    title: "Oração pelos Avós",
    text: "Pai do Céu, abençoa meus avós. Obrigado pelo amor e carinho que eles me dão. Amém.",
    theme: "purple",
  },
  {
    id: 33,
    title: "Oração da Escola",
    text: "Senhor, abençoa minha escola, meus professores e colegas. Ajuda-me a estudar com dedicação. Amém.",
    theme: "sky",
  },
  {
    id: 34,
    title: "Oração da Comida",
    text: "Obrigado, Deus, pelo alimento. Abençoa quem preparou e ajuda quem não tem o que comer. Amém.",
    theme: "pink",
  },
  {
    id: 35,
    title: "Oração do Bom Exemplo",
    text: "Querido Deus, ajuda-me a ser um bom exemplo para outras crianças, mostrando Teu amor. Amém.",
    theme: "yellow",
  },
  {
    id: 36,
    title: "Oração de Encerramento",
    text: "Pai amado, obrigado por ouvir minhas orações. Sei que Tu me amas e sempre cuidas de mim. Amém.",
    theme: "purple",
  },
]

export function PrayerCards() {
  // Group prayers into pages (6 per page for cutting)
  const prayersPerPage = 6
  const pages = []

  for (let i = 0; i < prayers.length; i += prayersPerPage) {
    pages.push(prayers.slice(i, i + prayersPerPage))
  }

  return (
    <>
      {pages.map((pagePrayers, pageIndex) => (
        <div key={pageIndex} className="min-h-screen bg-white p-4 md:p-6 print:h-screen print:break-after-page">
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 h-full">
            {pagePrayers.map((prayer) => (
              <PrayerCard key={prayer.id} prayer={prayer} />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
