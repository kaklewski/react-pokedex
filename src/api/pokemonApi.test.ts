import axios from 'axios';
import type { Mocked } from 'vitest';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    fetchAllPokemon,
    fetchMultiplePokemonData,
    fetchPokemonData,
} from './pokemonApi';

vi.mock('axios');

const mockedAxios = axios as Mocked<typeof axios>;

describe('Pokemon API helpers', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('fetchAllPokemon', () => {
        it('fetches a list of Pokemon and maps them to {id, name}', async () => {
            mockedAxios.get.mockResolvedValueOnce({
                data: {
                    results: [
                        {
                            name: 'bulbasaur',
                            url: 'https://pokeapi.co/api/v2/pokemon/1/',
                        },
                        {
                            name: 'ivysaur',
                            url: 'https://pokeapi.co/api/v2/pokemon/2/',
                        },
                    ],
                },
            });

            const result = await fetchAllPokemon();

            expect(mockedAxios.get).toHaveBeenCalledWith(
                'https://pokeapi.co/api/v2/pokemon?limit=251',
            );

            expect(result).toEqual([
                { id: 1, name: 'bulbasaur' },
                { id: 2, name: 'ivysaur' },
            ]);
        });

        it('returns an empty array if the API returns an empty array', async () => {
            mockedAxios.get.mockResolvedValueOnce({
                data: {
                    results: [],
                },
            });

            const result = await fetchAllPokemon();

            expect(result).toEqual([]);
        });
    });

    describe('fetchPokemonData', () => {
        it('fetches data of a single Pokemon by name', async () => {
            mockedAxios.get.mockResolvedValueOnce({
                data: { name: 'pikachu', id: 25 },
            });

            const result = await fetchPokemonData('pikachu');

            expect(mockedAxios.get).toHaveBeenCalledWith(
                'https://pokeapi.co/api/v2/pokemon/pikachu',
            );
            expect(result).toEqual({ name: 'pikachu', id: 25 });
        });
    });

    describe('fetchMultiplePokemonData', () => {
        it('takes multiple pokemon data by ID and returns them in ids order', async () => {
            mockedAxios.get
                .mockResolvedValueOnce({ data: { id: 1, name: 'bulbasaur' } })
                .mockResolvedValueOnce({ data: { id: 25, name: 'pikachu' } })
                .mockResolvedValueOnce({ data: { id: 150, name: 'mewtwo' } });

            const result = await fetchMultiplePokemonData([1, 25, 150]);

            expect(mockedAxios.get).toHaveBeenNthCalledWith(
                1,
                'https://pokeapi.co/api/v2/pokemon/1',
            );
            expect(mockedAxios.get).toHaveBeenNthCalledWith(
                2,
                'https://pokeapi.co/api/v2/pokemon/25',
            );
            expect(mockedAxios.get).toHaveBeenNthCalledWith(
                3,
                'https://pokeapi.co/api/v2/pokemon/150',
            );

            expect(result).toEqual([
                { id: 1, name: 'bulbasaur' },
                { id: 25, name: 'pikachu' },
                { id: 150, name: 'mewtwo' },
            ]);
        });
    });
});
