// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

describe('Header', () => {
  it('abre y cierra el menú móvil', () => {
    render(<Header locale="es" detail="" goHome={() => {}} />);

    const openButton = screen.getByRole('button', { name: 'Abrir menú' });
    expect(openButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(openButton);

    const closeButton = screen.getByRole('button', { name: 'Cerrar menú' });
    expect(closeButton).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(closeButton);

    expect(screen.getByRole('button', { name: 'Abrir menú' }))
      .toHaveAttribute('aria-expanded', 'false');
  });

  it('cierra el menú con Escape y devuelve el foco', () => {
    render(<Header locale="en" detail="" goHome={() => {}} />);

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    fireEvent.keyDown(document, { key: 'Escape' });

    const button = screen.getByRole('button', { name: 'Open menu' });

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveFocus();
  });

  it('permite volver al inicio', () => {
    const goHome = vi.fn();

    render(<Header locale="es" detail="" goHome={goHome} />);

    fireEvent.click(screen.getByRole('button', { name: 'Ir al inicio' }));

    expect(goHome).toHaveBeenCalledOnce();
  });
});
