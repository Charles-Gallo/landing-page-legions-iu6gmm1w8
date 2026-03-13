import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StickyCTA } from '@/components/StickyCTA'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}
