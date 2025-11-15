import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function fetchAllPokemon() {
    const res = await axios.get(`${API_URL}?limit=151`);
    const results = res.data.results;

    const details = results.map(
        (pokemon: { name: string; url: string }, index: number) => {
            return {
                id: index + 1,
                name: pokemon.name,
            };
        },
    );

    return details;
}

export async function fetchPokemonData(name: string) {
    const res = await axios.get(`${API_URL}/${name}`);
    return res.data;
}

export async function fetchMultiplePokemonData(ids: number[]) {
    const promises = ids.map((id) =>
        axios.get(`${API_URL}/${id}`).then((res) => res.data),
    );
    const results = await Promise.all(promises);
    return results;
}
