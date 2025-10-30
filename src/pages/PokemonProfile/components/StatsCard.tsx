import { Box, Progress, Stack, Text } from '@mantine/core';
import PaperCardSection from '../../../components/PaperCardSection';
import { capitalizeFirstLetter } from '../../../utils/helpers';

type StatsCardProps = {
    stats: Array<{
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }>;
};

type StatsDisplayProps = {
    statConfig: {
        [key: string]: { label: string; color: string };
    };
    name: string;
    stat: number;
};

export default function StatsCard({ stats }: StatsCardProps) {
    const statConfig = {
        hp: { label: 'HP', color: 'red' },
        attack: { label: 'Attack', color: 'orange' },
        defense: { label: 'Defense', color: 'yellow' },
        'special-attack': { label: 'Sp. Atk', color: 'green' },
        'special-defense': { label: 'Sp. Def', color: 'blue' },
        speed: { label: 'Speed', color: 'purple' },
    };

    return (
        <PaperCardSection title="Stats">
            <Stack gap="md">
                {stats.map((stat) => {
                    return (
                        <StatsDisplay
                            key={stat.stat.name}
                            statConfig={statConfig}
                            name={stat.stat.name}
                            stat={stat.base_stat}
                        />
                    );
                })}
            </Stack>
        </PaperCardSection>
    );
}

function StatsDisplay({ statConfig, name, stat }: StatsDisplayProps) {
    const statLabel =
        statConfig[name as keyof typeof statConfig]?.label ||
        capitalizeFirstLetter(name);
    const statColor =
        statConfig[name as keyof typeof statConfig]?.color || 'gray';

    return (
        <Box key={name}>
            <Text>
                {statLabel}: <strong>{stat}</strong>
            </Text>
            <Progress
                radius="xl"
                size="lg"
                value={(stat / 175) * 100}
                color={statColor}
            />
        </Box>
    );
}
