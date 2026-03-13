import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import LeadCapture from '@/components/sections/LeadCapture'
import ProblemSolution from '@/components/sections/ProblemSolution'

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Features />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  )
}
