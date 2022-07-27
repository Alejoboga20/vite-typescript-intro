const MyDecorator = () => {
	return (target: Function) => {
		console.log(target);
	};
};

@MyDecorator()
export class Pokemon {
	constructor(public readonly id: number, public name: string) {}

	scream() {
		console.log(`${this.name.toUpperCase()}!!!`);
	}

	speak() {
		console.log(`Hello my name is ${this.name}`);
	}
}

export class NewPokemon {
	constructor(public readonly id: number, public name: string) {}

	scream() {
		console.log('GO AWAY');
	}

	speak() {
		console.log('Go away');
	}
}

export const charmander = new Pokemon(4, 'Charmander');
charmander.scream();
