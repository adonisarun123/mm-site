# MonkMantra.com - Technical Implementation Guide

## 🚀 Project Setup

### Prerequisites
- Node.js 18+ 
- bun package manager
- Supabase account
- ImageKit account
- Vercel account (for deployment)

### Tech Stack
- **Frontend**: Next.js 14 with App Router
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS + ShadCN UI
- **Images**: ImageKit for optimization
- **Deployment**: Vercel
- **Package Manager**: bun

## 📦 Initial Setup

### 1. Create Next.js Project
```bash
npx create-next-app@latest monkmantra-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd monkmantra-website
bun install
```

### 2. Install Additional Dependencies
```bash
# UI Components
bun add @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu
bun add @radix-ui/react-navigation-menu @radix-ui/react-scroll-area @radix-ui/react-tabs
bun add @radix-ui/react-toast class-variance-authority clsx tailwind-merge
bun add lucide-react framer-motion

# Database & Auth
bun add @supabase/supabase-js @supabase/auth-helpers-nextjs

# Forms & Validation
bun add react-hook-form @hookform/resolvers zod

# Image Optimization
bun add imagekitio-next

# Analytics & SEO
bun add @vercel/analytics @vercel/speed-insights next-sitemap

# Development
bun add -D @types/node eslint-config-next
```

### 3. Environment Variables
Create `.env.local`:
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_url_endpoint
IMAGEKIT_PRIVATE_KEY=your_private_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://monkmantra.com
NEXT_PUBLIC_COMPANY_EMAIL=hello@monkmantra.com

# Analytics (Optional)
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_id
```

## 🗄️ Supabase Database Setup

### 1. Create Tables
```sql
-- Enable RLS
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Services Table
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  content TEXT,
  icon_url VARCHAR(500),
  category VARCHAR(100),
  industry_focus TEXT[],
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Case Studies Table
CREATE TABLE case_studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(300) NOT NULL,
  slug VARCHAR(150) UNIQUE NOT NULL,
  client_name VARCHAR(200),
  industry VARCHAR(100),
  challenge TEXT,
  solution TEXT,
  results JSONB,
  metrics JSONB,
  image_url VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Blog Posts Table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(300) NOT NULL,
  slug VARCHAR(150) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  author_name VARCHAR(200),
  author_image VARCHAR(500),
  category VARCHAR(100),
  tags TEXT[],
  featured_image VARCHAR(500),
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP,
  read_time INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Contact Submissions Table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(200) NOT NULL,
  email VARCHAR(300) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(200),
  industry VARCHAR(100),
  service_interest VARCHAR(100),
  budget_range VARCHAR(100),
  message TEXT,
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  ip_address INET,
  user_agent TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Newsletter Subscribers Table
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(300) UNIQUE NOT NULL,
  source VARCHAR(100),
  status VARCHAR(20) DEFAULT 'active',
  tags TEXT[],
  subscribed_at TIMESTAMP DEFAULT NOW(),
  unsubscribed_at TIMESTAMP
);

-- Team Members Table
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(200) NOT NULL,
  position VARCHAR(200),
  bio TEXT,
  image_url VARCHAR(500),
  linkedin_url VARCHAR(300),
  twitter_url VARCHAR(300),
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- FAQ Table
CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(100),
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Create Indexes for Performance
```sql
CREATE INDEX idx_services_slug ON services(slug);
CREATE INDEX idx_services_category ON services(category);
CREATE INDEX idx_case_studies_slug ON case_studies(slug);
CREATE INDEX idx_case_studies_industry ON case_studies(industry);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_created ON contact_submissions(created_at);
```

### 3. Row Level Security (RLS)
```sql
-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public read access for services" ON services FOR SELECT USING (true);
CREATE POLICY "Public read access for case studies" ON case_studies FOR SELECT USING (true);
CREATE POLICY "Public read access for published blog posts" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Public read access for active team members" ON team_members FOR SELECT USING (active = true);
CREATE POLICY "Public read access for active FAQs" ON faqs FOR SELECT USING (active = true);

-- Contact submissions - insert only
CREATE POLICY "Anyone can insert contact submissions" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert newsletter subscriptions" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
```

## 🎨 Frontend Architecture

### 1. Project Structure
```
src/
├── app/
│   ├── (pages)/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── organic-growth/
│   │   │   ├── media-buying/
│   │   │   ├── content-marketing/
│   │   │   ├── marketing-strategy/
│   │   │   ├── internal-tools/
│   │   │   └── web-development/
│   │   ├── industries/
│   │   │   ├── page.tsx
│   │   │   ├── healthcare/
│   │   │   ├── real-estate/
│   │   │   └── travel-tourism/
│   │   ├── case-studies/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── careers/
│   │   │   └── page.tsx
│   │   └── resources/
│   ├── api/
│   │   ├── contact/
│   │   ├── newsletter/
│   │   ├── imagekit-auth/
│   │   └── sitemap/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/ (ShadCN components)
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   └── NewsletterForm.tsx
│   └── shared/
│       ├── OptimizedImage.tsx
│       ├── AnimatedSection.tsx
│       └── SEOHead.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── types.ts
│   ├── imagekit/
│   │   ├── config.ts
│   │   └── helpers.ts
│   ├── utils/
│   │   ├── seo.ts
│   │   ├── analytics.ts
│   │   └── helpers.ts
│   └── schemas/
│       ├── contact.ts
│       └── newsletter.ts
├── hooks/
│   ├── useSupabase.ts
│   ├── useAnalytics.ts
│   └── useIntersectionObserver.ts
└── types/
    ├── database.ts
    └── global.ts
```

## 🖼️ ImageKit Configuration

### 1. ImageKit Setup
```typescript
// lib/imagekit/config.ts
export const imageKitConfig = {
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
  authenticationEndpoint: '/api/imagekit-auth'
};

// lib/imagekit/helpers.ts
export const getOptimizedImage = (
  src: string,
  width: number,
  height?: number,
  quality = 80
) => {
  const transformations = [
    `w-${width}`,
    height ? `h-${height}` : '',
    `q-${quality}`,
    'f-webp',
    'c-maintain_ratio'
  ].filter(Boolean).join(',');
  
  return `${imageKitConfig.urlEndpoint}/tr:${transformations}/${src}`;
};

export const getResponsiveImageSet = (src: string, sizes: number[]) => {
  return sizes.map(size => ({
    src: getOptimizedImage(src, size),
    width: size
  }));
};
```

### 2. ImageKit API Route
```typescript
// app/api/imagekit-auth/route.ts
import { NextRequest, NextResponse } from 'next/server';
import ImageKit from 'imagekit';

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!
});

export async function GET(request: NextRequest) {
  const authenticationParameters = imagekit.getAuthenticationParameters();
  return NextResponse.json(authenticationParameters);
}
```

## ⚡ Performance Optimization

### 1. Next.js Configuration
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ],
}

module.exports = nextConfig
```

### 2. Optimized Image Component
```typescript
// components/shared/OptimizedImage.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getOptimizedImage } from '@/lib/imagekit/helpers';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  quality?: number;
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className = '',
  quality = 80
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const optimizedSrc = getOptimizedImage(src, width, height, quality);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {hasError ? (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Image unavailable</span>
        </div>
      ) : (
        <Image
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
    </div>
  );
}
```

## 🔍 SEO Implementation

### 1. Global SEO Configuration
```typescript
// lib/utils/seo.ts
export const siteConfig = {
  name: 'MonkMantra',
  title: 'MonkMantra - Digital Marketing Excellence for Healthcare, Real Estate & Travel',
  description: 'Specialized digital marketing agency driving exponential growth for healthcare, real estate, and travel businesses worldwide with proprietary frameworks.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://monkmantra.com',
  ogImage: '/images/og-default.jpg',
  links: {
    twitter: 'https://twitter.com/monkmantra',
    linkedin: 'https://linkedin.com/company/monkmantra',
  },
};

export const generateMetadata = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website'
}) => ({
  title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
  description: description || siteConfig.description,
  keywords: keywords.join(', '),
  authors: [{ name: 'MonkMantra Team' }],
  creator: 'MonkMantra',
  publisher: 'MonkMantra',
  openGraph: {
    type,
    locale: 'en_US',
    url: url || siteConfig.url,
    title,
    description,
    siteName: siteConfig.name,
    images: [{
      url: image || siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: title || siteConfig.name
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image || siteConfig.ogImage],
    creator: '@monkmantra'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
});
```

### 2. Schema Markup Components
```typescript
// components/shared/JsonLd.tsx
interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// lib/utils/schema.ts
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MonkMantra",
  "description": "Digital Marketing Agency specializing in Healthcare, Real Estate, and Travel industries",
  "url": "https://monkmantra.com",
  "logo": "https://monkmantra.com/images/logo.png",
  "sameAs": [
    "https://linkedin.com/company/monkmantra",
    "https://twitter.com/monkmantra",
    "https://facebook.com/monkmantra"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service",
    "email": "hello@monkmantra.com"
  }
};
```

## 🚀 Deployment

### 1. Vercel Deployment
```json
// vercel.json
{
  "buildCommand": "bun run build",
  "outputDirectory": ".next",
  "installCommand": "bun install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

### 2. Build Optimization
```json
// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "prebuild": "bun run type-check && bun run lint",
    "analyze": "ANALYZE=true bun run build"
  }
}
```

## 📊 Analytics & Monitoring

### 1. Setup Analytics
```typescript
// lib/utils/analytics.ts
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export function AnalyticsProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  );
}

// Track custom events
export const trackEvent = (name: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, properties);
  }
};
```

## 🔧 Development Commands

```bash
# Development
bun dev

# Type checking
bun run type-check

# Linting
bun run lint

# Build for production
bun run build

# Start production server
bun start

# Database migrations (if using Supabase CLI)
npx supabase db push

# Generate types from Supabase
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/database.ts
```

This technical guide provides a comprehensive foundation for building a world-class, high-performance website using Next.js, Supabase, and ImageKit with all the modern optimizations and best practices.