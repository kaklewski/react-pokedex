import { Container, Stack } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import axios from 'axios';
import GalleryCard from './components/GalleryCard';
import { MetricsCard } from './components/MetricsCard';
import MovesCard from './components/MovesCard';
import StatsCard from './components/StatsCard';
import { SummaryCard } from './components/SummaryCard';

type typeModel = { slot: number; type: { name: string; url: string } };

export default function PokemonProfilePage() {
    const { name } = useParams({ from: '/pokemon/$name' });

    const API_URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

    async function fetchPokemonData() {
        const res = await axios.get(API_URL);
        return res.data;
    }

    const {
        data: pokemonData,
        isLoading,
        isError,
    } = useQuery({
        queryKey: [name],
        queryFn: fetchPokemonData,
    });

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error fetching data</p>;
    if (!pokemonData) return <p>No data available</p>;

    console.log(pokemonData); // test

    const types = pokemonData.types.map(
        (typeInfo: typeModel) => typeInfo.type.name,
    );

    return (
        <Container>
            <Stack gap="md">
                <SummaryCard
                    id={pokemonData.id}
                    name={pokemonData.name}
                    types={types}
                />
                <MetricsCard
                    height={pokemonData.height}
                    weight={pokemonData.weight}
                />
                <StatsCard stats={pokemonData.stats} />
                <GalleryCard sprites={pokemonData.sprites} />
                <MovesCard moves={pokemonData.moves} />
            </Stack>
        </Container>
    );
}
