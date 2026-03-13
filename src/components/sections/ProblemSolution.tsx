import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import { AlertCircle, FileX, TrendingDown, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ProblemSolution() {
  const { ref, isVisible } = useScrollReveal()

  const problems = [
    {
      icon: <TrendingDown className="w-8 h-8 text-brand-red" />,
      title: 'Falta de Previsibilidade',
      desc: 'Sem saber quanto vai faturar no fim do mês, o planejamento estratégico da empresa fica estagnado.',
    },
    {
      icon: <FileX className="w-8 h-8 text-brand-red" />,
      title: 'Processos Bagunçados',
      desc: 'Leads perdidos por falta de follow-up e vendedores criando suas próprias planilhas despadronizadas.',
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-brand-red" />,
      title: 'Perda de Oportunidades',
      desc: 'Negócios travados no funil por meses sem nenhuma visibilidade ou plano de ação do gestor.',
    },
  ]

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={cn(
              'text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            )}
          >
            Identifica algum desses cenários na sua operação comercial?
          </h2>
          <p
            className={cn(
              'text-lg text-gray-600 transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            )}
          >
            A falta de controle é o maior inimigo do crescimento em vendas B2B.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {problems.map((prob, i) => (
            <Card
              key={i}
              className={cn(
                'border-none shadow-md hover:shadow-lg transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
              )}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <CardContent className="pt-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-2">
                  {prob.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{prob.title}</h3>
                <p className="text-gray-600">{prob.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* The Solution */}
        <div
          className={cn(
            'max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden transition-all duration-1000 delay-500',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          )}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold">
                <CheckCircle2 className="w-4 h-4" />A Solução
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Retome o controle total do seu{' '}
                <span className="text-brand-green">Pipeline de Vendas</span>
              </h3>
              <p className="text-gray-600 text-lg">
                Nosso template foi desenvolvido por especialistas em vendas complexas para te dar a
                clareza exata de onde focar os esforços da sua equipe para bater a meta do mês.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
              <img
                src="https://img.usecurling.com/i?q=spreadsheet&color=green&shape=fill"
                alt="Planilha Icon"
                className="w-32 h-32 object-contain drop-shadow-2xl opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
