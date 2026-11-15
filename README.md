# Portfolio — Cristian González Couso

Portfolio profesional desarrollado con **React, TypeScript, Vite y Tailwind CSS**. Incluye una página de inicio, sección de proyectos y un caso de estudio de Nachos.PetCare con capturas reales.

## Desarrollo local

```bash
npm install
npm run dev
```

## Compilación

```bash
npm run build
npm run preview
```

## Publicación en Vercel

1. Sube esta carpeta a un repositorio nuevo de GitHub.
2. En Vercel, selecciona **Add New → Project** e importa el repositorio.
3. Framework: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Publica y conecta un dominio si lo deseas.

## Pendientes antes de publicar

- Confirmar URL real del repositorio de Nachos.PetCare (actualmente se usa `https://github.com/cgonzalezcouso/Nachos.PetCare`).
- Revisar y, si procede, anonimizar las capturas (nombres, datos y fotos de mascotas, ubicaciones y terceros).
- Añadir el CV cuando esté disponible, y el resto de proyectos una vez seleccionados.
- Añadir pruebas, demo y diagramas de arquitectura cuando estén verificados.
- Las funcionalidades técnicas se describen según la información facilitada por el autor; las capturas no demuestran por sí solas el funcionamiento de servicios backend.

## Archivos

- `src/main.tsx`: contenido y navegación.
- `src/index.css`: estilos adicionales.
- `tailwind.config.js`: paleta y Tailwind.
- `public/screenshots/`: imágenes de la aplicación.
