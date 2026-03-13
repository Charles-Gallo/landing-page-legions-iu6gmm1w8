import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { CheckCircle2, Lock, Loader2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido').min(5, 'E-mail é obrigatório'),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
  role: z.string().min(1, 'Selecione um cargo'),
})

export function LeadCapture() {
  const { ref, isVisible } = useScrollReveal()
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      role: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <section id="form-section" className="py-24 bg-gray-50 scroll-mt-20" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          className={cn(
            'bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-brand-red flex flex-col md:flex-row transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
          )}
        >
          {/* Left side info */}
          <div className="bg-gray-900 text-white p-10 md:w-5/12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/10 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-bold leading-tight">
                Pronto para ter previsibilidade em vendas?
              </h3>
              <p className="text-gray-300 text-lg">
                Preencha o formulário para receber imediatamente o template no seu e-mail.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  '100% Gratuito',
                  'Formato Excel / Google Sheets',
                  'Instruções de uso inclusas',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-7/12 bg-white flex items-center justify-center min-h-[400px]">
            {isSuccess ? (
              <div className="w-full h-full flex flex-col items-center justify-center space-y-6 animate-in zoom-in duration-500 text-center py-12">
                <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-brand-green" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-gray-900">Sucesso!</h3>
                  <p className="text-gray-600 text-lg max-w-[300px] mx-auto">
                    O template foi enviado para o seu e-mail. Verifique sua caixa de entrada.
                  </p>
                </div>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Nome completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="João Silva"
                            className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-brand-blue"
                            {...field}
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
                        <FormLabel className="text-gray-700">E-mail corporativo</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="joao@empresa.com.br"
                            className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-brand-blue"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Empresa</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nome da empresa"
                              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-brand-blue"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Cargo</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:ring-brand-blue">
                                <SelectValue placeholder="Selecione..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ceo">CEO / Sócio</SelectItem>
                              <SelectItem value="diretor_vendas">Diretor de Vendas</SelectItem>
                              <SelectItem value="gerente_vendas">Gerente de Vendas</SelectItem>
                              <SelectItem value="vendedor">Vendedor / SDR</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-bold bg-brand-green hover:bg-brand-green/90 text-white shadow-lg shadow-brand-green/20 transition-all active:scale-95"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processando...
                        </>
                      ) : (
                        'Baixar Template Grátis'
                      )}
                    </Button>
                    <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-gray-500">
                      <Lock className="w-3 h-3" />
                      <span>Prometemos não usar suas informações para enviar SPAM.</span>
                    </div>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
