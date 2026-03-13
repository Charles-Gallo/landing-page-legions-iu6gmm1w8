import { CheckCircle2, TrendingUp, Target, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Features() {
  const features = [
    {
      title: 'Visão Clara do Funil',
      description:
        'Saiba exatamente onde cada oportunidade de venda está e quais são os próximos passos.',
      icon: <Target className="h-6 w-6 text-brand-blue" />,
    },
    {
      title: 'Previsibilidade de Receita',
      description:
        'Calcule a probabilidade de fechamento e projete o faturamento do mês (Forecast).',
      icon: <TrendingUp className="h-6 w-6 text-brand-green" />,
    },
    {
      title: 'Gestão da Equipe',
      description:
        'Acompanhe o desempenho individual de cada vendedor ou representante em tempo real.',
      icon: <Users className="h-6 w-6 text-brand-red" />,
    },
    {
      title: 'Pronta para Uso',
      description:
        'Estrutura pré-configurada para você apenas começar a preencher e usar imediatamente.',
      icon: <CheckCircle2 className="h-6 w-6 text-brand-blue" />,
    },
  ]

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tudo o que você precisa para{' '}
            <span className="text-brand-blue">escalar suas vendas</span>
          </h2>
          <p className="text-lg text-slate-600">
            Nossa planilha foi desenhada baseada na metodologia das operações de vendas mais
            eficientes do mercado B2B.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
