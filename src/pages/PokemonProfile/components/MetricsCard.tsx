import { Group, Paper, Stack, Text } from '@mantine/core';
import PaperCardSection from '../../../components/PaperCardSection';
import {
    capitalizeFirstLetter,
    convertDmToCm,
    convertHgToKg,
} from '../../../utils/helpers';

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
        <PaperCardSection title="Metrics">
            <Group justify="space-evenly">
                <MetricsDisplay
                    text="Height"
                    value={convertDmToCm(height)}
                    unit="cm"
                />
                <MetricsDisplay
                    text="Weight"
                    value={convertHgToKg(weight)}
                    unit="kg"
                />
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
