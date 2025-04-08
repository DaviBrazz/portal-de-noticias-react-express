import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  description: string
  image: string
  date: string
  id: number
}

export function NewsCard({ title, description, image, date, id }: NewsCardProps) {
  return (
    <Card key={id} className="overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority={id < 3} // Prioriza o carregamento das primeiras imagens
        />
      </div>
      <CardContent className="p-4 flex-grow flex flex-col">
        <p className="text-sm text-muted-foreground mb-2">{date}</p>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-muted-foreground flex-grow">{description}</p>
        <button className="mt-4 text-primary font-medium hover:underline self-start">Ler mais</button>
      </CardContent>
    </Card>
  )
}

