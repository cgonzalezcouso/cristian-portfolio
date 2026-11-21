import { Github, Linkedin } from 'lucide-react';
import type { Locale } from './types';

const GH = 'https://github.com/cgonzalezcouso';
const LI = 'https://www.linkedin.com/in/cristian-gonzalez-couso/';

export default function Footer({ locale }: { locale: Locale }) {
  return locale === 'es' ? (
<footer id="contacto" className="border-t border-line mt-12"><div className="max-w-6xl mx-auto px-5 sm:px-8 py-16"><p className="section-label">05 / Contacto</p><h2 className="text-3xl sm:text-5xl font-bold mt-4">¿Trabajamos juntos?</h2><p className="text-muted mt-4 max-w-xl">Estoy abierto a oportunidades de desarrollo Full Stack Junior, backend y aplicaciones multiplataforma.</p><div className="flex flex-wrap gap-3 mt-8"><a href={LI} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Linkedin size={18}/> Contactar por LinkedIn</a><a href={GH} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Github size={18}/> GitHub</a></div><div className="border-t border-line mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted"><span>© {new Date().getFullYear()} Cristian González Couso</span><span>Diseñado y desarrollado con React · TypeScript · Tailwind CSS</span></div></div></footer>
  ) : (
<footer id="contacto" className="border-t border-line mt-12"><div className="max-w-6xl mx-auto px-5 sm:px-8 py-16"><p className="section-label">05 / Contact</p><h2 className="text-3xl sm:text-5xl font-bold mt-4">Let’s work together</h2><p className="text-muted mt-4 max-w-xl">I am open to junior full-stack, backend and cross-platform development opportunities.</p><div className="flex flex-wrap gap-3 mt-8"><a href={LI} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Linkedin size={18} /> Contact me on LinkedIn</a><a href={GH} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Github size={18} /> GitHub</a></div><div className="border-t border-line mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted"><span>© {new Date().getFullYear()} Cristian González Couso</span><span>Designed and built with React · TypeScript · Tailwind CSS</span></div></div></footer>
  );
}
