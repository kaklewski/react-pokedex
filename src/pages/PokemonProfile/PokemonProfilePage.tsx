import { Container, Flex, Stack } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { fetchPokemonData } from '../../api/pokemonApi';
import { ErrorFallback } from '../../components/ErrorFallback';
import GlobalLoader from '../../components/GlobalLoader';
import GalleryCard from './components/GalleryCard';
import { MetricsCard } from './components/MetricsCard';
import MovesCard from './components/MovesCard';
import StatsCard from './components/StatsCard';
import { SummaryCard } from './components/SummaryCard';
import FavButton from '../../components/FavButton';

type typeModel = { slot: number; type: { name: string; url: string } };

export default function PokemonProfilePage() {
    const { name } = useParams({ from: '/pokemon/$name' });

    const {
        data: pokemonData,
        isLoading,
        isError,
    } = useQuery({
        queryKey: [name],
        queryFn: () => fetchPokemonData(name),
    });

    if (isLoading) return <GlobalLoader />;
    if (isError) return <ErrorFallback />;
    if (!pokemonData) return <p>No data available</p>;

    const types = pokemonData.types.map(
        (typeInfo: typeModel) => typeInfo.type.name,
    );

    return (
        <Container>
            <Stack gap="md">
                <Flex justify="end"><FavButton pokemonId={pokemonData.id}/></Flex>
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
