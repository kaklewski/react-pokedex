import { Paper, Title } from '@mantine/core';

type CardSectionProps = {
    title?: string;
    children: React.ReactNode;
};

export default function PaperCardSection({
    title,
    children,
}: CardSectionProps) {
    return (
        <Paper shadow="sm" radius="lg" p="xl" withBorder>
            {title && (
                <Title order={2} mb="md">
                    {title}
                </Title>
            )}
            {children}
        </Paper>
    );
}
