import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
    title: string;
    highlight?: string;
    highlightColor?: string;
    imageBackground?: string;
    className?: string;
    subtitle?: string;
    description: string;
    technologies: string[];
    images: string[];
    imageDescriptions?: string[];
    buttonText?: string;
    onOpen: () => void;
};

export default function ProjectCard({
    title,
    highlight,
    highlightColor = 'text-violet',
    imageBackground = 'bg-gradient-to-br from-[#241d47] to-[#101a32]',
    className = '',
    subtitle,
    description,
    technologies,
    images,
    imageDescriptions,
    buttonText = 'Explorar caso de estudio',
    onOpen,
}: ProjectCardProps) {
    const fullTitle = `${title}${highlight ?? ''}`;

    return (
        <article className={`glass project-card grid min-w-0 overflow-hidden rounded-3xl lg:grid-cols-2 ${className}`}>
            <div
                className={`${imageBackground} flex min-h-[220px] min-w-0 items-center justify-center gap-2 overflow-hidden p-4 sm:min-h-[340px] sm:gap-3 sm:p-10`}
            >
                {images.map((image, index) => (
                    <div
                        key={image}
                        className={
                            index === 0
                                ? 'phone w-[29%] min-w-0 rotate-[-8deg] translate-y-4 sm:translate-y-7'
                                : index === 1
                                    ? 'phone relative z-10 w-[37%] min-w-0'
                                    : 'phone w-[29%] min-w-0 rotate-[8deg] translate-y-4 sm:translate-y-7'
                        }
                    >
                        <img
                            src={image}
                            alt={imageDescriptions?.[index] ?? `${fullTitle}: captura ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                ))}
            </div>

            <div className="flex min-w-0 flex-col justify-center p-5 sm:p-11">
                {subtitle && <p className="section-label">{subtitle}</p>}
                <h3 className="mt-4 break-words text-2xl font-bold sm:text-3xl">
                    {title}
                    {highlight && <span className={highlightColor}>{highlight}</span>}
                </h3>
                <p className="text-muted mt-5 leading-7">{description}</p>
                <div className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías / Technologies">
                    {technologies.map((technology) => (
                        <span className="pill" key={technology}>{technology}</span>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={onOpen}
                    aria-label={`${buttonText}: ${fullTitle}`}
                    className="btn btn-primary mt-8 inline-flex min-h-11 max-w-full items-center justify-center gap-2 self-stretch text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue sm:self-start"
                >
                    <span>{buttonText}</span>
                    <ArrowUpRight size={16} aria-hidden="true" className="shrink-0" />
                </button>
            </div>
        </article>
    );
}
