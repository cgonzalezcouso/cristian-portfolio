# Cristian González Couso | Portfolio

[![CI - Portfolio](https://github.com/cgonzalezcouso/cristian-portfolio/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/cgonzalezcouso/cristian-portfolio/actions/workflows/ci.yml)

Portfolio profesional bilingüe (español e inglés), desarrollado con **React, TypeScript, Vite y Tailwind CSS**.

Presenta mi perfil como desarrollador de software, mi experiencia profesional, las tecnologías que utilizo y mis proyectos personales mediante casos de estudio y capturas de pantalla.

**[Ver portfolio publicado](https://cristian-gonzalez-portfolio.vercel.app/)**

## Tecnologías

- React 19 y TypeScript
- Vite y Tailwind CSS
- Vitest y React Testing Library
- GitHub Actions
- Vercel

## Proyectos destacados

### Nachos.PetCare

Aplicación móvil para el cuidado y la gestión de mascotas, desarrollada con Flutter y Dart. Entre las tecnologías utilizadas se encuentran SQLite, Supabase y Firebase.

**Estado:** en desarrollo.

### Memoria Viva

Aplicación móvil centrada en la accesibilidad y el apoyo cognitivo, desarrollada con Flutter y Dart.

**Estado:** en desarrollo.

## Características del portfolio

- Contenido en español e inglés.
- Diseño adaptable a móviles y ordenadores.
- Navegación mediante teclado y mejoras de accesibilidad.
- Galerías de imágenes con controles accesibles.
- Casos de estudio de proyectos.
- Imágenes optimizadas y metadatos SEO.
- Pruebas automatizadas e integración continua.

## Desarrollo local

**Requisitos:** Node.js 22 y npm.

Clonar el repositorio e instalar las dependencias:

```bash
git clone https://github.com/cgonzalezcouso/cristian-portfolio.git
cd cristian-portfolio
npm ci
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

## Pruebas y calidad

El proyecto utiliza **Vitest** y **React Testing Library** para comprobar el comportamiento de componentes React.

| Componente | Pruebas | Comportamiento comprobado |
| --- | ---: | --- |
| `ProjectCard` | 3 | Contenido, interacción y descripciones accesibles |
| `Header` | 3 | Menú móvil, tecla Escape y navegación |
| `ImageLightbox` | 4 | Diálogo accesible, cierre y gestión del foco |
| **Total** | **10** | |

Ejecutar las pruebas:

```bash
npm test
```

Comprobar la compilación de producción:

```bash
npm run build
```

### Integración continua con GitHub Actions

El flujo definido en `.github/workflows/ci.yml` se ejecuta al abrir o actualizar un Pull Request dirigido a `master`, al publicar cambios en `master` y cuando se inicia manualmente desde GitHub Actions.

La integración continua instala las dependencias con `npm ci`, ejecuta las pruebas con `npm test` y comprueba la compilación con `npm run build`.

La insignia situada al principio del README muestra el estado del flujo en `master`.

## Compilación y despliegue

Generar y previsualizar la versión de producción:

```bash
npm run build
npm run preview
```

El portfolio está publicado en **Vercel**.

## Estructura del proyecto

- `src/main.tsx`: contenido y entrada en español.
- `src/main.en.tsx`: contenido y entrada en inglés.
- `src/components/`: componentes reutilizables.
- `src/components/*.test.tsx`: pruebas automatizadas.
- `src/index.css`: estilos.
- `public/`: recursos estáticos e imágenes.
- `.github/workflows/ci.yml`: integración continua.

## Estado del proyecto

El portfolio continúa evolucionando y las aplicaciones presentadas como proyectos personales siguen en desarrollo. Las capturas y los casos de estudio documentan el trabajo realizado, pero no deben interpretarse como demostración de funcionalidades que todavía no se hayan verificado.
