import { Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Agência <span className="text-brand-blue">Legions</span>
          </span>
        </div>

        <p className="text-gray-400 max-w-md mb-8">
          Ajudando empresas B2B a escalar suas vendas com processos estruturados e previsibilidade
          de receita através de tecnologia e metodologia própria.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:bg-white/10 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:bg-white/10 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:bg-white/10 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Agência Legions. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
