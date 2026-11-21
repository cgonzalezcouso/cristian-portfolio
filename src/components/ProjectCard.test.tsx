// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

afterEach(() => {
  cleanup();
});

describe('ProjectCard', () => {
  const project = {
    title: 'Nachos',
    highlight: '.PetCare',
    description: 'Aplicación para el cuidado de mascotas',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    images: ['/screenshots/inicio.webp'],
  };

  it('muestra el proyecto y sus tecnologías', () => {
    render(<ProjectCard {...project} onOpen={() => {}} />);

    expect(screen.getByRole('heading', {
      name: 'Nachos.PetCare',
    })).toBeInTheDocument();

    expect(screen.getByText('Flutter')).toBeInTheDocument();
    expect(screen.getByText('Dart')).toBeInTheDocument();
    expect(screen.getByText('SQLite')).toBeInTheDocument();
  });

  it('ejecuta onOpen al pulsar el botón', () => {
    const onOpen = vi.fn();

    render(<ProjectCard {...project} onOpen={onOpen} />);

    fireEvent.click(screen.getByRole('button', {
      name: /Explorar caso de estudio: Nachos\.PetCare/i,
    }));

    expect(onOpen).toHaveBeenCalledOnce();
  });

  it('utiliza la descripción accesible de la imagen', () => {
    render(
      <ProjectCard
        {...project}
        imageDescriptions={['Pantalla principal de Nachos.PetCare']}
        onOpen={() => {}}
      />
    );

    expect(screen.getByRole('img', {
      name: 'Pantalla principal de Nachos.PetCare',
    })).toBeInTheDocument();
  });
});
