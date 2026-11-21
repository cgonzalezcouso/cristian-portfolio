import { Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import type { Locale } from './types';

type ProjectsSectionProps = { locale: Locale; openDetail: () => void; openMemoria: () => void };

export default function ProjectsSection({ locale, openDetail, openMemoria }: ProjectsSectionProps) {
  return locale === 'es' ? (
<section id="proyectos" className="max-w-6xl mx-auto px-5 sm:px-8 py-16"><p className="section-label">01 / Trabajo seleccionado</p><h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-8">Proyectos destacados<span className="text-blue">.</span></h2>
        <ProjectCard

            title="Nachos"
            highlight=".PetCare"
            subtitle="Aplicación multiplataforma · Proyecto individual"

            description="Aplicación multiplataforma desarrollada individualmente para centralizar la gestión de mascotas, el historial veterinario y los recordatorios. Combina almacenamiento local con servicios en la nube y funcionalidades orientadas a la comunidad."
            technologies={["Flutter", "SQLite", "Supabase", "Firebase"]}
            images={[
                "/screenshots/mascota.webp",
                "/screenshots/inicio.webp",
                "/screenshots/directorio.webp",
            ]}
            onOpen={openDetail}
        />


        <ProjectCard
            title="Memoria "
            highlight="Viva"
            highlightColor="text-cyan-300"
            imageBackground="memoria-hero"
            className="mt-8"
            subtitle="Aplicación móvil · En desarrollo"
            description="Aplicación móvil enfocada en el apoyo cognitivo y la organización de cuidados. Presenta interfaces accesibles, actividades adaptables y herramientas para facilitar las rutinas y el seguimiento de familiares y cuidadores."
            technologies={[
                "Flutter",
                "Dart",
                "Accesibilidad",
                "Rutinas",
            ]}
            images={[
                "/screenshots/memoria-viva/cognitiva.jpeg",
                "/screenshots/memoria-viva/inicio.jpeg",
                "/screenshots/memoria-viva/cuidador.jpeg",
            ]}
            onOpen={openMemoria}
        />


        <div className="mt-6 glass rounded-2xl p-7 flex items-start gap-4">
<Code2 className="text-blue shrink-0"/><div><h3 className="font-semibold">Más proyectos próximamente</h3><p className="text-muted text-sm mt-2">Seguiré incorporando proyectos a medida que los desarrolle y pueda documentarlos.</p></div></div></section>
  ) : (
<section id="proyectos" className="max-w-6xl mx-auto px-5 sm:px-8 py-16"><p className="section-label">01 / Selected work</p><h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-8">Featured projects<span className="text-blue">.</span></h2><ProjectCard
            title="Nachos"
            highlight=".PetCare"
            subtitle="Cross-platform app · Solo project"
            description="Independently developed cross-platform app bringing together pet profiles, veterinary records and reminders, with local storage, cloud services and community-oriented features."
            technologies={["Flutter", "SQLite", "Supabase", "Firebase"]}
            images={[
                "/screenshots/mascota.webp",
                "/screenshots/inicio.webp",
                "/screenshots/directorio.webp",
            ]}
            buttonText="Explore case study"
            onOpen={openDetail}
        />
            <ProjectCard
                title="Memoria "
                highlight="Viva"
                highlightColor="text-cyan-300"
                imageBackground="memoria-hero"
                className="mt-8"
                subtitle="Mobile app · In development"
                description="Mobile app focused on cognitive support and care coordination, with accessible interfaces, adaptable activities, routines and monitoring tools for families and caregivers."
                technologies={["Flutter", "Dart", "Accessibility", "Routines"]}
                images={[
                    "/screenshots/memoria-viva/cognitiva.jpeg",
                    "/screenshots/memoria-viva/inicio.jpeg",
                    "/screenshots/memoria-viva/cuidador.jpeg",
                ]}
                buttonText="Explore case study"
                onOpen={openMemoria}
            />
            <div className="mt-6 glass rounded-2xl p-7 flex items-start gap-4"><Code2 className="text-blue shrink-0" /><div><h3 className="font-semibold">More projects coming soon</h3><p className="text-muted text-sm mt-2">I will keep adding projects as I build and document them.</p></div></div></section>
  );
}
