import axios from 'axios';

export class PokeApiAdapter {
	async get(url: string) {
		const { data } = await axios.get(url);

		return data;
	}

	async post(url: string, payload: any) {}

	async patch(url: string, payload: any) {}

	async delete(url: string) {}
}
