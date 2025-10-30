import { Group, Paper, Stack, Text, Title } from '@mantine/core';
import PaperCardSection from '../../../components/PaperCardSection';
import { capitalizeFirstLetter } from '../../../utils/helpers';

type MetricsCarsProps = {
    height: number;
    weight: number;
};

type MetricsDisplayProps = {
    text: string;
    value: number;
    unit: string;
};

export function MetricsCard({ height, weight }: MetricsCarsProps) {
    return (
        <PaperCardSection>
            <Title order={2} mb="md">
                Size
            </Title>
            <Group justify="space-around">
                <MetricsDisplay text="Height" value={height * 10} unit="cm" />
                <MetricsDisplay text="Weight" value={weight / 10} unit="kg" />
            </Group>
        </PaperCardSection>
    );
}

function MetricsDisplay({ text, value, unit }: MetricsDisplayProps) {
    const capitalizedText = capitalizeFirstLetter(text);

    return (
        <Stack align="center" gap="xs">
            <Text fw={700} size="lg">
                {capitalizedText}
            </Text>

            <Paper
                shadow="none"
                radius="md"
                withBorder
                px="lg"
                py="xs"
                style={{ borderWidth: 2 }}
            >
                <Text size="xl">
                    {value} {unit}
                </Text>
            </Paper>
        </Stack>
    );
}
