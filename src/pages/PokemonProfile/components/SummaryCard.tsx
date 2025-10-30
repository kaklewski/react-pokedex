import { Badge, Center, Flex, Group, Image, Stack, Title } from '@mantine/core';
import PaperCardSection from '../../../components/PaperCardSection';
import { capitalizeFirstLetter, formatPokemonId } from '../../../utils/helpers';

type SummaryCardProps = {
    name: string;
    id: number;
    types: string[];
};

export function SummaryCard({ name, id, types }: SummaryCardProps) {
    const idString = formatPokemonId(id);
    const nameCapitalized = capitalizeFirstLetter(name);

    const typeColors = {
        normal: 'gray',
        fire: 'red',
        water: 'blue',
        electric: 'yellow',
        grass: 'green',
        ice: 'cyan',
        fighting: 'orange',
        poison: 'grape',
        ground: 'orange',
        flying: 'indigo',
        psychic: 'pink',
        bug: 'teal',
        rock: 'orange',
        ghost: 'grape',
        dragon: 'violet',
        dark: 'dark',
        steel: 'gray',
        fairy: 'pink',
    } as const;

    type PokemonType = keyof typeof typeColors;

    const typeBadges = types
        .filter((t): t is PokemonType => t in typeColors)
        .map((t) => (
            <Badge key={t} size="xl" color={typeColors[t]}>
                {t}
            </Badge>
        ));

    return (
        <PaperCardSection>
            <Stack gap="md">
                <Group justify="space-between">
                    <Title order={1}>{nameCapitalized}</Title>
                    <Title order={2} size="h1" c="dimmed">
                        {idString}
                    </Title>
                </Group>
                <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    mah={300}
                    w="auto"
                    fit="contain"
                />
                <Center>
                    <Flex direction="row" wrap="wrap" gap="sm">
                        {typeBadges}
                    </Flex>
                </Center>
            </Stack>
        </PaperCardSection>
    );
}
