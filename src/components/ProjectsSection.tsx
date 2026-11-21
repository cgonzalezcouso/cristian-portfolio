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
            subtitle="Aplicación multiplataforma · Proyecto individual · En desarrollo"

            description="Desarrollo individualmente una aplicación multiplataforma con Flutter para centralizar la información de las mascotas, el seguimiento veterinario y la organización de sus cuidados. He implementado persistencia local con SQLite y conexiones funcionales con Supabase y Firebase, combinando almacenamiento en el dispositivo con servicios en la nube."
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
            description="Desarrollo una aplicación móvil orientada al apoyo cognitivo y la organización de rutinas para personas que necesitan asistencia, sus familiares y cuidadores. El proyecto se centra en la accesibilidad, con interfaces sencillas, opciones de personalización visual y pantallas dedicadas a actividades cognitivas y seguimiento de cuidados."
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
            subtitle="Cross-platform app · Solo project · In development"
            description="I am independently developing a cross-platform Flutter application to centralise pet information, veterinary records and care organisation. I have implemented local persistence with SQLite and working connections to Supabase and Firebase, combining on-device storage with cloud services."
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
                description="I am developing a mobile application focused on cognitive support and daily routines for people who need assistance, their families and caregivers. The project prioritises accessibility through simple navigation, visual customisation options and screens for cognitive activities and care monitoring."
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

