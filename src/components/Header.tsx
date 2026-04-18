import { Button } from '@/components/ui/button'
import logoTransp from '@/assets/agencia-legions-transp-5718a.png'

export default function Header() {
  const handleScrollToForm = () => {
    document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={logoTransp} alt="Agência Legions" className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() =>
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="text-sm font-medium hover:text-brand-blue transition-colors"
          >
            Template
          </button>
          <button
            onClick={() =>
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="text-sm font-medium hover:text-brand-blue transition-colors"
          >
            Benefícios
          </button>
        </nav>
        <Button
          onClick={handleScrollToForm}
          className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold"
        >
          Baixar Planilha
        </Button>
      </div>
    </header>
  )
}
