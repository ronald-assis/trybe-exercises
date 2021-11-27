import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from './App';

describe('Test do execicio', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('Verifica se a palavra "Carregando..." é renderizada na tela quando a aplicação é iniciada.', () => {
    const loading = screen.getByText(/carregando.../i);
    expect(loading).toBeDefined();
  })

  test('Verifica se o jogo com o texto Minecraft é renderizado na tela após a saída do carregando.',async () => {

    const title = await screen.findByText(/Minecraft/i)
    expect(title).toBeDefined();
  })
})