import { NewsCard } from "@/components/news-card"
import { FeaturedNews } from "@/components/featured-news"
import { NewsHeader } from "@/components/news-header"

export default function NewsPage() {
  // Este é um exemplo de dados - você pode substituir por dados do seu backend depois
  const newsArticles = [
    {
      id: 1,
      title: "Nova tecnologia revoluciona o mercado",
      description:
        "Uma nova tecnologia está transformando a maneira como as empresas operam, oferecendo soluções inovadoras para problemas antigos.",
      image: "/placeholder.svg?height=400&width=600",
      date: "12 de Abril, 2025",
    },
    {
      id: 2,
      title: "Descoberta científica promissora",
      description:
        "Cientistas anunciam uma descoberta que pode mudar o tratamento de várias doenças, trazendo esperança para milhões de pacientes.",
      image: "/placeholder.svg?height=400&width=600",
      date: "10 de Abril, 2025",
    },
    {
      id: 3,
      title: "Avanços na inteligência artificial",
      description:
        "Novos modelos de IA estão sendo desenvolvidos com capacidades surpreendentes, levantando questões sobre o futuro da tecnologia.",
      image: "/placeholder.svg?height=400&width=600",
      date: "8 de Abril, 2025",
    },
  ]

  const featuredNews = {
    title: "Inovação sustentável transforma indústria global",
    description:
      "Uma nova abordagem para produção sustentável está ganhando força em todo o mundo, com empresas adotando práticas ecológicas sem comprometer a eficiência ou a lucratividade.",
    content:
      'Especialistas acreditam que esta tendência representa uma mudança fundamental na forma como os negócios operam no século XXI. "Estamos vendo uma convergência de tecnologia, consciência ambiental e demanda do consumidor que está impulsionando esta transformação", explica a Dra. Maria Silva, especialista em sustentabilidade empresarial.',
    image: "/placeholder.svg?height=600&width=800",
    date: "14 de Abril, 2025",
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <NewsHeader title="Últimas Notícias" subtitle="Fique por dentro das novidades mais recentes" />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <NewsCard
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
            date={article.date}
          />
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Notícia em Destaque</h2>
        <FeaturedNews {...featuredNews} />
      </section>
    </main>
  )
}

