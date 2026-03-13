import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import { LayoutDashboard, Target, Activity, Settings2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Features() {
  const { ref, isVisible } = useScrollReveal()

  const features = [
    {
      icon: <LayoutDashboard className="w-6 h-6 text-brand-blue" />,
      title: 'Dashboard Automatizado',
      desc: 'Visualização clara e imediata de metas vs. realizado, taxas de conversão e saúde do funil.',
    },
    {
      icon: <Target className="w-6 h-6 text-brand-blue" />,
      title: 'Previsão de Receita (Forecast)',
      desc: 'Saiba exatamente quanto vai faturar no próximo mês baseado no histórico e probabilidade de fechamento.',
    },
    {
      icon: <Activity className="w-6 h-6 text-brand-blue" />,
      title: 'Gestão de Etapas',
      desc: 'Organize seus leads conforme a jornada de compra e identifique gargalos rapidamente.',
    },
    {
      icon: <Settings2 className="w-6 h-6 text-brand-blue" />,
      title: 'Fácil Customização',
      desc: 'Uma estrutura flexível e adaptável para qualquer modelo de negócio B2B, sem códigos.',
    },
  ]

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={cn(
              'space-y-8 transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
            )}
          >
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Tudo que você precisa em <span className="text-brand-blue">uma única tela</span>
              </h2>
              <p className="text-lg text-gray-600">
                Esqueça planilhas com dezenas de abas complexas. Criamos uma ferramenta visual,
                intuitiva e focada naquilo que realmente importa para a tomada de decisão comercial.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feat, i) => (
                <Card
                  key={i}
                  className="border border-gray-100 shadow-subtle hover:shadow-elevation hover:-translate-y-1 transition-all duration-300 group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-blue/5 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      {/* Using React.cloneElement to safely change icon color on hover if needed, or simply let CSS handle it via group-hover */}
                      <div className="group-hover:text-white transition-colors duration-300 text-brand-blue">
                        {feat.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">{feat.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div
            className={cn(
              'relative transition-all duration-1000 delay-300',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
            )}
          >
            <div className="absolute inset-0 bg-brand-blue/5 transform rotate-3 rounded-[2rem] -z-10" />
            <img
              src="https://img.usecurling.com/p/600/800?q=charts%20data%20business%20minimalist"
              alt="Preview das Funcionalidades"
              className="rounded-[2rem] shadow-2xl object-cover w-full h-[500px] md:h-[600px] border border-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
