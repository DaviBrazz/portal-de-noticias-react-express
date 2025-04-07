interface NewsHeaderProps {
  title: string
  subtitle: string
}

export function NewsHeader({ title, subtitle }: NewsHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground">{subtitle}</p>
    </header>
  )
}

