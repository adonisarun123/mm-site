import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Industries } from '@/components/sections/Industries'
import { Stats } from '@/components/sections/Stats'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <CTA />
    </main>
  )
} 