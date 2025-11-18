import { ActionIcon } from '@mantine/core';
import {
    Spotlight,
    type SpotlightActionData,
    spotlight,
} from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { fetchAllPokemon } from '../api/pokemonApi';
import { capitalizeFirstLetter, formatPokemonId } from '../utils/helpers';

export default function PokemonSpotlight() {
    const router = useRouter();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['pokemonList'],
        queryFn: fetchAllPokemon,
    });

    if (!data) return;

    const isSpotlightAvailable = !isLoading && !isError && data;

    const actions: SpotlightActionData[] = data.map(
        (pokemon: { id: number; name: string }) => {
            return {
                id: pokemon.id,
                label: capitalizeFirstLetter(pokemon.name),
                leftSection: formatPokemonId(pokemon.id),
                onClick: () => {
                    router.navigate({ to: `/pokemon/${pokemon.name}` });
                },
            };
        },
    );

    return (
        <>
            <ActionIcon
                color="light"
                variant="subtle"
                aria-label="Change theme"
                size="xl"
                radius="md"
                onClick={spotlight.open}
            >
                <IconSearch />
            </ActionIcon>
            {isSpotlightAvailable && (
                <Spotlight
                    actions={actions}
                    nothingFound="Pokémon not found..."
                    highlightQuery
                    scrollable
                    maxHeight={550}
                    searchProps={{
                        leftSection: <IconSearch size={20} stroke={1.5} />,
                        placeholder: 'Search for Pokémon...',
                    }}
                />
            )}
        </>
    );
}
