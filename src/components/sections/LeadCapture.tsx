import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { ShieldCheck } from 'lucide-react'
import logoAzul from '@/assets/agencia-legions-fundo-azul-65f47.png'

const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail corporativo inválido'),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
})

export default function LeadCapture() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    setTimeout(() => {
      console.log('Lead captured:', values)
      setIsSubmitting(false)
      toast({
        title: 'Sucesso!',
        description: 'Enviamos o link da planilha para o seu e-mail.',
      })
      form.reset()
    }, 1500)
  }

  return (
    <section id="lead-capture" className="py-24 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              Baixe agora sua planilha gratuita e comece hoje mesmo
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Junte-se a centenas de empresas que já otimizaram seus processos comerciais utilizando
              nossas metodologias e ferramentas.
            </p>
            <div className="flex items-center gap-3 text-blue-100">
              <ShieldCheck className="h-6 w-6 text-brand-green" />
              <span className="font-medium">
                Seus dados estão seguros conosco. Não enviamos spam.
              </span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-md ml-auto">
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900">
              <div className="flex justify-center mb-6">
                <img src={logoAzul} alt="Agência Legions" className="h-10 w-auto rounded" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">
                Onde enviamos o material?
              </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">
                          Nome Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome completo"
                            {...field}
                            className="h-12 bg-slate-50 border-slate-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">
                          E-mail Corporativo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="voce@suaempresa.com.br"
                            type="email"
                            {...field}
                            className="h-12 bg-slate-50 border-slate-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Empresa</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nome da sua empresa"
                            {...field}
                            className="h-12 bg-slate-50 border-slate-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-bold bg-brand-green hover:bg-brand-green/90 text-white mt-6 shadow-lg shadow-brand-green/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Receber Material Gratuito'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
