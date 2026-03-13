import { Button } from '@/components/ui/button'

export function Header() {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mockup Logo using generic icon, styled to look like a brand */}
          <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">
            Agência <span className="text-brand-blue">Legions</span>
          </span>
        </div>

        <Button
          onClick={scrollToForm}
          className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium px-6 hidden sm:flex transition-transform active:scale-95"
        >
          Download Gratuito
        </Button>
      </div>
    </header>
  )
}
