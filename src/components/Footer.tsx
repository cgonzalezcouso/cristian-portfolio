import { Github, Linkedin, Mail } from 'lucide-react';
import type { Locale } from './types';

const GH = 'https://github.com/cgonzalezcouso';
const LI = 'https://www.linkedin.com/in/cristian-gonzalez-couso/';
const EMAIL = 'cgcstudios79@gmail.com';

export default function Footer({ locale }: { locale: Locale }) {
  const isSpanish = locale === 'es';

  return (
    <footer id="contacto" className="border-t border-line mt-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <p className="section-label">
          {isSpanish ? '05 / Contacto' : '05 / Contact'}
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold mt-4">
          {isSpanish ? '¿Trabajamos juntos?' : "Let's work together"}
        </h2>

        <p className="text-muted mt-4 max-w-xl">
          {isSpanish
            ? 'Estoy abierto a oportunidades como desarrollador de software junior. Si mi perfil encaja con tu equipo, estaré encantado de conversar.'
            : "I'm open to junior software developer opportunities. If my profile is a good fit for your team, I'd be happy to connect."}
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <a href={`mailto:${EMAIL}`} className="btn btn-primary">
            <Mail size={18} />
            {isSpanish ? 'Enviar email' : 'Send email'}
          </a>

          <a
            href={LI}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href={GH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        <p className="text-muted text-sm mt-5">
          <a href={`mailto:${EMAIL}`} className="hover:underline">
            {EMAIL}
          </a>
        </p>

        <div className="border-t border-line mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted">
          <span>© {new Date().getFullYear()} Cristian González Couso</span>
          <span>
            {isSpanish
              ? 'Diseñado y desarrollado con React · TypeScript · Tailwind CSS'
              : 'Designed and built with React · TypeScript · Tailwind CSS'}
          </span>
        </div>
      </div>
    </footer>
  );
}
