/* export class Pokemon {
	public id: number;
	public name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
} 
Long way
*/

//best way
export class Pokemon {
	constructor(public readonly id: number, public name: string) {}

	//getter
	get imageUrl(): string {
		return `https://pokemon.com/${this.id}.jpg`;
	}

	//methods: functions with access to properties and other methods
	public scream() {
		this.speak();
		console.log(`${this.name.toUpperCase()}!!!`);
	}

	//private methods are only accesible from inside the class
	private speak() {
		console.log(`Hello, my name is ${this.name}`);
	}
}

export const charmander = new Pokemon(4, 'charmander');
console.log(charmander);
charmander.scream();
