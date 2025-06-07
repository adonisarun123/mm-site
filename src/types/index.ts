export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface Service {
  id: string
  slug: string
  title: string
  description: string
  content?: string
  icon_url?: string
  category: string
  industry_focus: string[]
  featured: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface CaseStudy {
  id: string
  title: string
  slug: string
  client_name: string
  industry: string
  challenge: string
  solution: string
  results: Record<string, any>
  metrics: Record<string, any>
  image_url: string
  featured: boolean
  order_index: number
  created_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author_name: string
  author_image: string
  category: string
  tags: string[]
  featured_image: string
  published: boolean
  published_at: string
  read_time: number
  created_at: string
  updated_at: string
} 