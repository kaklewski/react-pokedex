import { Paper } from '@mantine/core';

type CardSectionProps = {
    children: React.ReactNode;
};

export default function PaperCardSection({ children }: CardSectionProps) {
    return (
        <Paper shadow="sm" radius="lg" p="xl" withBorder>
            {children}
        </Paper>
    );
}
