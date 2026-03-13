import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3 } from 'lucide-react'

export default function Hero() {
  const handleScrollToForm = () => {
    document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
            <BarChart3 className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold tracking-tight">
              Material Gratuito Exclusivo
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Assuma o controle de suas vendas com o{' '}
            <span className="text-brand-blue">Template de Pipeline e Forecast</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Organize suas oportunidades, tenha previsibilidade de receita e pare de perder negócios
            por falta de acompanhamento com a planilha oficial da Agência Legions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleScrollToForm}
              className="w-full sm:w-auto text-lg h-14 px-8 bg-brand-red hover:bg-brand-red/90 text-white shadow-lg shadow-brand-red/20 font-semibold"
            >
              Quero Baixar a Planilha
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-slate-500 sm:ml-4 mt-4 sm:mt-0 font-medium">
              100% gratuito. Acesso imediato.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
    </section>
  )
}
