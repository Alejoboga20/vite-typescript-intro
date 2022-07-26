export const pokemonIds = [1, 20, 30, 34, 66];
pokemonIds.push(+'10'); // + converts string to number

export const bulbasaur: Pokemon = {
	id: 1,
	name: 'Bulbasaur',
};

interface Pokemon {
	id: number;
	name: string;
	age?: number | undefined;
}

export const pokemons: Pokemon[] = [{ id: 1, name: 'Charmander' }];
pokemons.push({ id: 2, name: 'Pikachu' });
