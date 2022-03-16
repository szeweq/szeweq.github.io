export type License = {
  name: string
}

export type Repo = {
  id: number
  name: string
  description: string
  stargazers_count: number
  watchers_count: number
  html_url: string
  language: string
  license: License
  created_at: string
  updated_at: string
}