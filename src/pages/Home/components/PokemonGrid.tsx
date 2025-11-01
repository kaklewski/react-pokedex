import { Container, SimpleGrid } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPokemon } from '../../../api/pokemonApi';
import PokemonCard from './PokemonCard';

type PokemonGridProps = {
    searchTerm: string;
};

export default function PokemonGrid({ searchTerm }: PokemonGridProps) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['pokemon'],
        queryFn: fetchAllPokemon,
    });

    if (isLoading) return <p>Loading</p>;
    if (isError) return <p>Error fetching data</p>;
    if (!data) return <p>No data available</p>;

    const filteredData = data.filter((pokemon: { id: number; name: string }) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <Container>
            <SimpleGrid cols={{ xs: 1, sm: 2, md: 3 }} spacing="lg">
                {filteredData.map((pokemon: { id: number; name: string }) => {
                    return <PokemonCard key={pokemon.id} {...pokemon} />;
                })}
            </SimpleGrid>
        </Container>
    );
}
