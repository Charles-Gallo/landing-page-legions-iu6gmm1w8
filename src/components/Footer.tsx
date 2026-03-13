import logoBranco from '@/assets/agencia-legions-branco-2-2e0ea.png'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logoBranco} alt="Agência Legions" className="h-12 w-auto" />
            <p className="text-white/80 text-sm max-w-sm text-center md:text-left">
              Especialistas em marketing, vendas e tecnologia para escalar o seu negócio de forma
              previsível e consistente.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/agencialegions/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/agencialegions/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/agencia-legions/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Agência Legions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
