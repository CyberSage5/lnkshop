export interface Link {
  id: string
  url: string
  title: string
  image?: string
  order: number
}

export interface Design {
  layout: "list" | "grid" | "carousel"
  primaryColor: string
}

