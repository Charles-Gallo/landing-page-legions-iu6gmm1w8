import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down past the hero (approx 500px)
      // Hide it if we are near the bottom to avoid overlapping footer/form
      const scrollY = window.scrollY
      const formSection = document.getElementById('form-section')

      let hideNearForm = false
      if (formSection) {
        const formRect = formSection.getBoundingClientRect()
        // If form is in viewport, hide sticky CTA
        hideNearForm = formRect.top < window.innerHeight && formRect.bottom > 0
      }

      setIsVisible(scrollY > 500 && !hideNearForm)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    const formSection = document.getElementById('form-section')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden animate-fade-in-up">
      <Button
        onClick={scrollToForm}
        className="w-full h-14 text-base font-bold bg-brand-green hover:bg-brand-green/90 text-white shadow-lg shadow-brand-green/20 flex items-center justify-center gap-2 rounded-xl active:scale-95 transition-transform"
      >
        <Download className="w-5 h-5" />
        Baixar Template Agora
      </Button>
    </div>
  )
}
