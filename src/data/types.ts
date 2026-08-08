export interface BusinessPage {
  slug: string
  name: string
  shortDescription: string
  heroImage: string
  overview: string
  capabilities: string[]
  process: string[]
  relatedSlugs: string[]
}

export interface NewsItem {
  id: string
  date: string
  title: string
  image: string
  summary: string
  body: string[]
}
