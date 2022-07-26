import './style.css';
import typescriptLogo from './typescript.svg';
import { setupCounter } from './counter';

import { templateStrings } from './bases/01-types';
import { pokemonIds, pokemons } from './bases/02-objects';
import { charmander } from './bases/06-decorators';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Hey ${templateStrings}, Click on the Vite and TypeScript logos to learn more
    </p>
    <code>PokemonIds: ${pokemonIds}</code>
    <div>
      <code>Pokemons: ${JSON.stringify(pokemons)}</code>
    </div>
    <div>
      <code>Pokemon with class: ${JSON.stringify(charmander)}</code>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
