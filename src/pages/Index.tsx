import { Hero } from '@/components/sections/Hero'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { Features } from '@/components/sections/Features'
import { LeadCapture } from '@/components/sections/LeadCapture'
import { SocialProof } from '@/components/sections/SocialProof'

export default function Index() {
  return (
    <div className="w-full">
      <Hero />
      <ProblemSolution />
      <Features />
      <LeadCapture />
      <SocialProof />
    </div>
  )
}
