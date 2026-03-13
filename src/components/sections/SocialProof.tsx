import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'

export function SocialProof() {
  const { ref, isVisible } = useScrollReveal()

  const logos = ['microsoft', 'google', 'ibm', 'amazon', 'oracle']

  return (
    <section className="py-20 bg-white border-t border-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Trust Bar */}
        <div
          className={cn(
            'text-center mb-20 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          )}
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
            Metodologias aplicadas em empresas de alta performance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, idx) => (
              <img
                key={idx}
                src={`https://img.usecurling.com/i?q=${logo}&color=gray`}
                alt={`${logo} logo`}
                className="h-8 md:h-10 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div
          className={cn(
            'max-w-4xl mx-auto transition-all duration-1000 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
          )}
        >
          <div className="bg-brand-blue/5 rounded-3xl p-8 md:p-12 relative">
            <Quote className="w-16 h-16 text-brand-blue/20 absolute top-8 left-8 -rotate-12" />
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-8 italic">
                "Antes do template da Legions, nosso processo era baseado em 'achismos'. Hoje, no
                dia 1 de cada mês, eu sei exatamente onde precisamos focar para bater a meta, com
                95% de precisão no nosso forecast."
              </p>
              <div className="flex flex-col items-center">
                <img
                  src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=42"
                  alt="Avatar"
                  className="w-16 h-16 rounded-full border-2 border-white shadow-md mb-3"
                />
                <h4 className="font-bold text-gray-900">Ricardo Almeida</h4>
                <p className="text-sm text-gray-500">Diretor Comercial em Tecnologia B2B</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
