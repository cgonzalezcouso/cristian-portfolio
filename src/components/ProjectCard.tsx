
type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    images: string[];
};

export default function ProjectCard({
    title,
    description,
    technologies,
    images,
}: ProjectCardProps) {
    return (
        <article className="glass project-card rounded-3xl p-8">

            <div className="flex justify-center items-center gap-3 mb-8">
                {images.map((image, index) => (
                    <div
                        key={image}
                        className={
                            index === 1
                                ? "phone w-[37%] relative z-10"
                                : "phone w-[29%]"
                        }
                    >
                        <img
                            src={image}
                            alt={`${title} - pantalla ${index + 1}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </article>
    );
}