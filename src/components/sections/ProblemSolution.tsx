import { XCircle, CheckCircle } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section id="how-it-works" className="py-24 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
            Por que você precisa de um{' '}
            <span className="text-brand-blue">Pipeline Estruturado?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-red-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-8 w-8 text-brand-red" />
                <h3 className="text-2xl font-semibold text-slate-900">Sem Controle</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0"></span>
                  <p>Vendedores perdidos sobre quem contatar e qual o próximo passo no dia.</p>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0"></span>
                  <p>Oportunidades quentes esfriando e negócios sendo perdidos por esquecimento.</p>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0"></span>
                  <p>
                    Gestão cega, sem saber quanto a empresa vai faturar no fim do mês ou trimestre.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-green-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-green"></div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-brand-green" />
                <h3 className="text-2xl font-semibold text-slate-900">Com o Template</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0"></span>
                  <p>
                    Processo comercial claro, com etapas definidas para conduzir o lead até o
                    fechamento.
                  </p>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0"></span>
                  <p>Histórico de acompanhamento e tarefas muito bem agendadas e controladas.</p>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0"></span>
                  <p>
                    Métricas confiáveis para tomar decisões de investimento e crescimento do
                    negócio.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
