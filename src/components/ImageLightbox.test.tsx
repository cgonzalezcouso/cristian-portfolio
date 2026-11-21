// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ImageLightbox from './ImageLightbox';

afterEach(cleanup);

describe('ImageLightbox', () => {
  it('muestra un diálogo accesible con la imagen', () => {
    render(
      <ImageLightbox
        src="/screenshots/inicio.webp"
        title="Pantalla principal"
        locale="es"
        onClose={() => {}}
      />
    );

    expect(screen.getByRole('dialog', { name: 'Pantalla principal' }))
      .toHaveAttribute('aria-modal', 'true');

    expect(screen.getByRole('img', { name: 'Pantalla principal' }))
      .toHaveAttribute('src', '/screenshots/inicio.webp');
  });

  it('cierra la galería al pulsar Escape', () => {
    const onClose = vi.fn();

    render(
      <ImageLightbox
        src="/screenshots/inicio.webp"
        title="Pantalla principal"
        locale="es"
        onClose={onClose}
      />
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledOnce();
  });

  it('coloca el foco en el botón de cierre', () => {
    render(
      <ImageLightbox
        src="/screenshots/inicio.webp"
        title="Main screen"
        locale="en"
        onClose={() => {}}
      />
    );

    expect(screen.getByRole('button', { name: 'Close image' }))
      .toHaveFocus();
  });

  it('restaura el foco al desmontar la galería', () => {
    const previousButton = document.createElement('button');
    document.body.appendChild(previousButton);
    previousButton.focus();

    const { unmount } = render(
      <ImageLightbox
        src="/screenshots/inicio.webp"
        title="Pantalla principal"
        locale="es"
        onClose={() => {}}
      />
    );

    unmount();

    expect(previousButton).toHaveFocus();
    previousButton.remove();
  });
});
