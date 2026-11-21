
import { ArrowUpRight } from "lucide-react";

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
    buttonText?: string;
    onOpen: () => void;
};

export default function ProjectCard({
    title,
    highlight,
    highlightColor = "text-violet",
    imageBackground = "bg-gradient-to-br from-[#241d47] to-[#101a32]",
    className = "",
    subtitle,
    description,
    technologies,
    images,
    buttonText = "Explorar caso de estudio",
    onOpen,
}: ProjectCardProps) {
    const fullTitle = `${title}${highlight ?? ""}`;

    return (
        <article
            className={`glass project-card rounded-3xl overflow-hidden grid lg:grid-cols-2 ${className}`}
        >
            <div
                className={`${imageBackground} p-7 sm:p-10 flex justify-center items-center gap-3 overflow-hidden min-h-[340px]`}
            >
                {images.map((image, index) => (
                    <div
                        key={image}
                        className={
                            index === 0
                                ? "phone w-[29%] rotate-[-8deg] translate-y-7"
                                : index === 1
                                    ? "phone w-[37%] relative z-10"
                                    : "phone w-[29%] rotate-[8deg] translate-y-7"
                        }
                    >
                        <img
                            src={image}
                            alt={`${fullTitle} - pantalla ${index + 1}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            <div className="p-8 sm:p-11 flex flex-col justify-center">
                {subtitle && <p className="section-label">{subtitle}</p>}

                <h3 className="text-3xl font-bold mt-4">
                    {title}
                    {highlight && (
                        <span className={highlightColor}>
                            {highlight}
                        </span>
                    )}
                </h3>

                <p className="text-muted mt-5 leading-7">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                    {technologies.map((technology) => (
                        <span className="pill" key={technology}>
                            {technology}
                        </span>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={onOpen}
                    className="btn btn-primary mt-8 self-start"
                >
                    {buttonText}
                    <ArrowUpRight size={16} />
                </button>
            </div>
        </article>
    );
}
