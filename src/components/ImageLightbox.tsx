
import { useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';

type ImageLightboxProps = {
    src: string;
    title: string;
    onClose: () => void;
    locale: 'es' | 'en';
};

export default function ImageLightbox({
    src,
    title,
    onClose,
    locale,
}: ImageLightboxProps) {
    const titleId = useId();
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const onCloseRef = useRef(onClose);

    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    useEffect(() => {
        const previousFocus = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onCloseRef.current();
            }

            if (event.key === 'Tab') {
                const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
                    'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
                );

                if (!focusable?.length) {
                    event.preventDefault();
                    return;
                }

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
            previousFocus?.focus();
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="relative flex max-h-full w-full max-w-lg flex-col items-center rounded-2xl bg-panel p-5 pt-16 shadow-2xl"
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={onClose}
                    aria-label={locale === 'es' ? 'Cerrar imagen' : 'Close image'}
                    className="absolute right-3 top-3 flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                >
                    <X size={22} aria-hidden="true" />
                </button>

                <img
                    src={src}
                    alt={title}
                    className="max-h-[65vh] max-w-full rounded-xl object-contain"
                />

                <h2 id={titleId} className="mt-4 text-center font-semibold text-white">
                    {title}
                </h2>
            </div>
        </div>
    );
}
