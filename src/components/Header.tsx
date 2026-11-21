import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, Code2, Menu, X } from 'lucide-react';
import type { Locale } from './types';

const LINKEDIN = 'https://www.linkedin.com/in/cristian-gonzalez-couso/';

type HeaderProps = {
    locale: Locale;
    detail: string;
    goHome: () => void;
};

export default function Header({ locale, detail, goHome }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuId = useId();
    const toggleRef = useRef<HTMLButtonElement>(null);
    const isSpanish = locale === 'es';

    useEffect(() => {
        setMenuOpen(false);
    }, [detail]);

    useEffect(() => {
        if (!menuOpen) return;

        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                toggleRef.current?.focus();
            }
        }

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [menuOpen]);

    const links = [
        { label: isSpanish ? 'Proyectos' : 'Projects', href: detail ? '#proyecto' : '#proyectos' },
        { label: detail ? (isSpanish ? 'Tecnologías' : 'Technologies') : (isSpanish ? 'Sobre mí' : 'About me'), href: detail ? '#tecnologias' : '#sobre-mi' },
        { label: detail ? (isSpanish ? 'Contacto' : 'Contact') : (isSpanish ? 'Experiencia' : 'Experience'), href: detail ? '#contacto' : '#experiencia' },
        ...(!detail ? [{ label: isSpanish ? 'Formación' : 'Education', href: '#formacion' }] : []),
        { label: isSpanish ? 'Contacto' : 'Contact', href: '#contacto' },
    ].filter((link, index, all) => all.findIndex((item) => item.href === link.href) === index);

    const focusStyle = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400';

    function handleHome() {
        setMenuOpen(false);
        goHome();
    }

    return (
        <header className="sticky top-0 z-30 border-b border-line/80 bg-night/90 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 min-h-20 flex items-center justify-between gap-3">
                <button
                    type="button"
                    onClick={handleHome}
                    className={`flex shrink-0 items-center gap-3 font-bold text-xl tracking-tight rounded-lg ${focusStyle}`}
                    aria-label={isSpanish ? 'Ir al inicio' : 'Go to homepage'}
                >
                    <span className="rounded-xl bg-blue/15 p-2 text-blue" aria-hidden="true">
                        <Code2 size={22} />
                    </span>
                    <span>CG<span className="text-blue">.dev</span></span>
                </button>

                <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-sm text-muted" aria-label={isSpanish ? 'Navegación principal' : 'Main navigation'}>
                    <button type="button" onClick={handleHome} className={`hover:text-white rounded ${focusStyle}`}>
                        {isSpanish ? 'Inicio' : 'Home'}
                    </button>
                    {links.map(({ label, href }) => (
                        <a key={href} href={href} className={`hover:text-white rounded ${focusStyle}`}>
                            {label}
                        </a>
                    ))}
                </nav>

                <nav className="hidden md:flex items-center gap-1 rounded-xl border border-line p-1 text-sm" aria-label={isSpanish ? 'Seleccionar idioma' : 'Choose language'}>
                    <a href="/" lang="es" aria-current={isSpanish ? 'page' : undefined} className={`px-3 py-2 rounded-lg ${focusStyle} ${isSpanish ? 'bg-blue/20 text-white' : 'text-muted hover:text-white'}`}>ES</a>
                    <a href="/en.html" lang="en" aria-current={!isSpanish ? 'page' : undefined} className={`px-3 py-2 rounded-lg ${focusStyle} ${!isSpanish ? 'bg-blue/20 text-white' : 'text-muted hover:text-white'}`}>EN</a>
                </nav>

                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={`hidden md:inline-flex btn btn-outline ${focusStyle}`}>
                    LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
                </a>

                <nav className="md:hidden flex items-center gap-1 text-sm" aria-label={isSpanish ? 'Seleccionar idioma' : 'Choose language'}>
                    <a href="/" lang="es" aria-current={isSpanish ? 'page' : undefined} className={`inline-flex min-w-10 min-h-11 items-center justify-center rounded-lg ${focusStyle} ${isSpanish ? 'font-bold text-blue' : 'text-muted'}`}>ES</a>
                    <span className="text-muted" aria-hidden="true">/</span>
                    <a href="/en.html" lang="en" aria-current={!isSpanish ? 'page' : undefined} className={`inline-flex min-w-10 min-h-11 items-center justify-center rounded-lg ${focusStyle} ${!isSpanish ? 'font-bold text-blue' : 'text-muted'}`}>EN</a>
                </nav>

                <button
                    ref={toggleRef}
                    type="button"
                    aria-label={menuOpen ? (isSpanish ? 'Cerrar menú' : 'Close menu') : (isSpanish ? 'Abrir menú' : 'Open menu')}
                    aria-expanded={menuOpen}
                    aria-controls={menuId}
                    onClick={() => setMenuOpen((current) => !current)}
                    className={`md:hidden inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white hover:bg-white/10 ${focusStyle}`}
                >
                    {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </div>

            <nav
                id={menuId}
                aria-label={isSpanish ? 'Navegación móvil' : 'Mobile navigation'}
                className={`${menuOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-1 border-t border-line/80 px-5 py-3 sm:px-8`}
            >
                <button type="button" onClick={handleHome} className={`min-h-11 w-full rounded-lg px-3 py-2 text-left text-white hover:bg-white/10 ${focusStyle}`}>
                    {isSpanish ? 'Inicio' : 'Home'}
                </button>
                {links.map(({ label, href }) => (
                    <a key={href} href={href} onClick={() => setMenuOpen(false)} className={`flex min-h-11 items-center rounded-lg px-3 py-2 text-muted hover:bg-white/10 hover:text-white ${focusStyle}`}>
                        {label}
                    </a>
                ))}
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className={`flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-muted hover:bg-white/10 hover:text-white ${focusStyle}`}>
                    LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
                </a>
            </nav>
        </header>
    );
}
