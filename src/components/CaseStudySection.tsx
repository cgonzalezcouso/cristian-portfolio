import { CheckCircle2, Compass, Lightbulb, Wrench } from 'lucide-react';
import type { Locale } from './types';

type Project = 'nachos' | 'memoria';
type CaseStudySectionProps = { locale: Locale; project: Project };

type StudyItem = { title: string; body: string };

const content: Record<Locale, Record<Project, { eyebrow: string; heading: string; items: StudyItem[]; evidenceTitle: string; evidence: string; roadmapTitle: string; roadmap: string }>> = {
  es: {
    nachos: {
      eyebrow: 'El proceso', heading: 'Del problema a la solución',
      items: [
        { title: 'El problema', body: 'La información de una mascota puede estar repartida entre documentos veterinarios, recordatorios y distintos servicios. El objetivo es centralizarla para simplificar su consulta.' },
        { title: 'Mi solución', body: 'Desarrollo individualmente una aplicación multiplataforma que reúne perfiles de mascotas, información veterinaria, recordatorios y herramientas orientadas a la comunidad.' },
        { title: 'Decisiones técnicas', body: 'Utilizo Flutter y Dart para compartir la interfaz entre plataformas; SQLite para persistencia local y servicios como Supabase y Firebase para funciones conectadas.' },
        { title: 'Estado y aprendizajes', body: 'El proyecto sigue en desarrollo. Me permite practicar diseño de interfaces, organización de datos e integración de servicios, además de documentar lo que ya puedo mostrar.' },
      ],
      evidenceTitle: 'Qué se puede ver', evidence: 'Las capturas muestran pantallas de perfiles, navegación, adopciones y directorio. Las integraciones técnicas requieren verificación independiente.',
      roadmapTitle: 'Qué está previsto', roadmap: 'La evolución hacia servicios B2B, wearables y nuevas funciones basadas en IA forma parte de la hoja de ruta, no de funcionalidades demostradas.',
    },
    memoria: {
      eyebrow: 'El proceso', heading: 'Diseñar pensando en las personas',
      items: [
        { title: 'El problema', body: 'Organizar actividades, rutinas y cuidados puede resultar complejo para personas que necesitan apoyo cognitivo y para sus familiares o cuidadores.' },
        { title: 'Mi solución', body: 'Una aplicación móvil en desarrollo que reúne actividades cognitivas, organización diaria, perfiles vinculados y herramientas de seguimiento en una interfaz sencilla.' },
        { title: 'Decisiones técnicas', body: 'Trabajo con Flutter y Dart y doy prioridad a la accesibilidad: botones claros, navegación comprensible, contraste y opciones de tamaño de texto.' },
        { title: 'Estado y aprendizajes', body: 'El proyecto está en desarrollo. El reto principal es adaptar la experiencia a distintas necesidades de interacción sin complicar los flujos de uso.' },
      ],
      evidenceTitle: 'Qué se puede ver', evidence: 'Las capturas documentan las pantallas de accesibilidad, actividades cognitivas, rutinas y panel del cuidador. No equivalen a una validación clínica.',
      roadmapTitle: 'Qué sigue en desarrollo', roadmap: 'La evolución de las actividades y el seguimiento de cuidados continúa abierta; no se presentan resultados de eficacia clínica ni pruebas con usuarios.',
    },
  },
  en: {
    nachos: {
      eyebrow: 'The process', heading: 'From problem to solution',
      items: [
        { title: 'The problem', body: 'Pet information can be scattered across veterinary documents, reminders and different services. The goal is to bring it together for easier access.' },
        { title: 'My solution', body: 'I am independently developing a cross-platform app bringing together pet profiles, veterinary information, reminders and community-oriented tools.' },
        { title: 'Technical decisions', body: 'I use Flutter and Dart for a shared cross-platform interface, SQLite for local persistence, and services such as Supabase and Firebase for connected features.' },
        { title: 'Status and learning', body: 'The project remains under development. It helps me practise interface design, data organisation and service integration while documenting what I can demonstrate.' },
      ],
      evidenceTitle: 'What you can see', evidence: 'Screenshots show profile, navigation, adoption and directory screens. Technical integrations require independent verification.',
      roadmapTitle: 'What is planned', roadmap: 'B2B services, wearable integrations and additional AI-based features are part of the roadmap, not demonstrated functionality.',
    },
    memoria: {
      eyebrow: 'The process', heading: 'Designing around people',
      items: [
        { title: 'The problem', body: 'Managing activities, routines and care can be challenging for people who need cognitive support and for their families or caregivers.' },
        { title: 'My solution', body: 'A mobile app under development bringing together cognitive activities, daily organisation, linked profiles and monitoring tools in a simple interface.' },
        { title: 'Technical decisions', body: 'I work with Flutter and Dart and prioritise accessibility: clear controls, understandable navigation, contrast and adjustable text sizing.' },
        { title: 'Status and learning', body: 'The project is still in development. A central challenge is accommodating different interaction needs without making everyday tasks harder.' },
      ],
      evidenceTitle: 'What you can see', evidence: 'Screenshots document accessibility, cognitive activities, routines and caregiver dashboard screens. They do not establish clinical validation.',
      roadmapTitle: 'What remains in development', roadmap: 'Activities and care-monitoring features continue to evolve. No clinical effectiveness or user-testing results are claimed.',
    },
  },
};

const icons = [Compass, Lightbulb, Wrench, CheckCircle2];

export default function CaseStudySection({ locale, project }: CaseStudySectionProps) {
  const study = content[locale][project];
  const accent = project === 'memoria' ? 'text-cyan-300' : 'text-blue';
  return (
    <section aria-label={study.heading} className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
      <p className="section-label">{study.eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-8">{study.heading}</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {study.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <article key={item.title} className="glass rounded-2xl p-6 sm:p-8">
              <Icon aria-hidden="true" className={accent} size={24} />
              <h3 className="font-bold text-xl mt-4 mb-3">{item.title}</h3>
              <p className="text-muted leading-7">{item.body}</p>
            </article>
          );
        })}
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-6 text-sm">
        <div className="rounded-xl border border-line p-5">
          <p className="font-semibold mb-2">{study.evidenceTitle}</p>
          <p className="text-muted leading-6">{study.evidence}</p>
        </div>
        <div className="rounded-xl border border-line p-5">
          <p className="font-semibold mb-2">{study.roadmapTitle}</p>
          <p className="text-muted leading-6">{study.roadmap}</p>
        </div>
      </div>
    </section>
  );
}
