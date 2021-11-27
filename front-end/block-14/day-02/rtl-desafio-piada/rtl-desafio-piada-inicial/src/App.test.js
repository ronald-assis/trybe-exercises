import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Teste do App Jokes", () => {
  test('exibe o título "Piadas do Chuck Norris" na tela', () => {
    render(<App/>)
   const title = screen.getByText(/Piada do Chuck Norris/i);
   expect(title).toBeInTheDocument();
  });

  test("exibe o corpo da piada na tela", async () => {

    global.fetch = async => ({
      json: async () => ({ value: 'Chunck Norris can sneeze your' })
    })

    const joke = await screen.findByText(/'Chunck Norris can sneeze your'/i)

    expect(joke).toBeInTheDocument();
  });
});
