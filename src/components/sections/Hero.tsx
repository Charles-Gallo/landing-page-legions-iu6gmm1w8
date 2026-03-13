import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3 } from 'lucide-react'

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-brand-blue to-[#0b4275]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-blue/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left animate-fade-in-up space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-blue-100 text-sm font-medium backdrop-blur-sm border border-white/10">
              <BarChart3 className="w-4 h-4 text-brand-green" />
              <span>Template Gratuito de Vendas</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Domine seu Funil de Vendas com nosso Template de Pipeline e Forecast
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A ferramenta essencial para gestores comerciais que buscam previsibilidade,
              organização e crescimento real. Chega de planilhas confusas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-brand-green hover:bg-brand-green/90 text-white border-0 shadow-lg shadow-brand-green/20 transition-all hover:scale-105 active:scale-95 group"
              >
                Quero o Template Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-[500px] lg:max-w-none animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2 aspect-[4/3] transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <img
                src="https://img.usecurling.com/p/800/600?q=dashboard%20spreadsheet%20charts"
                alt="Mockup do Template de Pipeline e Forecast"
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Subtle overlay gradient to make it look like a screen */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl mix-blend-overlay"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-float border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center">
                <span className="text-brand-green font-bold text-xl">✓</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight">100% Gratuito</p>
                <p className="text-xs text-gray-500">Pronto para uso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
