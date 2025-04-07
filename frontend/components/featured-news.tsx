import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface FeaturedNewsProps {
  title: string
  description: string
  content: string
  image: string
  date: string
}

export function FeaturedNews({ title, description, content, image, date }: FeaturedNewsProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative h-64 md:h-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        </div>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground mb-2">{date}</p>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <p className="text-muted-foreground mb-6">{content}</p>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Ler artigo completo
          </button>
        </CardContent>
      </div>
    </Card>
  )
}

