import { Anchor, Image, Table } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { fetchMultiplePokemonData } from '../../../api/pokemonApi';
import { ErrorFallback } from '../../../components/ErrorFallback';
import FavButton from '../../../components/FavButton';
import GlobalLoader from '../../../components/GlobalLoader';
import {
    capitalizeFirstLetter,
    convertDmToCm,
    convertHgToKg,
} from '../../../utils/helpers';

export default function FavoritesTable() {
    const stored = localStorage.getItem('favorites');
    const favIds: number[] = stored ? JSON.parse(stored) : [];

    const { data, isLoading, isError } = useQuery({
        queryKey: ['favoritePokemonData'],
        queryFn: () => fetchMultiplePokemonData(favIds),
    });

    if (isLoading) return <GlobalLoader />;
    if (isError) return <ErrorFallback />;
    if (!data) return <p>No data available</p>;

    const tableRows = data.map((pokemon) => {
        const id = pokemon.id.toString().padStart(4, '0');
        const name = capitalizeFirstLetter(pokemon.name);
        const height = convertDmToCm(pokemon.height);
        const weight = convertHgToKg(pokemon.weight);
        const types = pokemon.types
            .map((element: unknown) => {
                const e = element as { type: { name: string } };
                return capitalizeFirstLetter(e.type.name);
            })
            .join(', ');
        const img = pokemon.sprites.front_default;

        return (
            <Table.Tr key={pokemon.id}>
                <Table.Td>
                    <Image src={img} h={96} w="auto" />
                </Table.Td>
                <Table.Td>{id}</Table.Td>
                <Table.Td>
                    <Anchor component={Link} to={`/pokemon/${pokemon.name}`}>
                        {name}
                    </Anchor>
                </Table.Td>
                <Table.Td>{types}</Table.Td>
                <Table.Td>{height}</Table.Td>
                <Table.Td>{weight}</Table.Td>
                <Table.Td>
                    <FavButton pokemonId={pokemon.id} isIcon={true} />
                </Table.Td>
            </Table.Tr>
        );
    });

    return (
        <Table.ScrollContainer minWidth={'30em'}>
            <Table striped withTableBorder>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th></Table.Th>
                        <Table.Th>#</Table.Th>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Types</Table.Th>
                        <Table.Th>Height [cm]</Table.Th>
                        <Table.Th>Weight [kg]</Table.Th>
                        <Table.Th></Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{tableRows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
}
