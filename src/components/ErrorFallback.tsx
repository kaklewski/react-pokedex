import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

export function ErrorFallback() {
    return (
        <Container>
            <Stack align="center" justify="center">
                <IconAlertTriangle
                    size={64}
                    color="var(--mantine-color-red-6)"
                />
                <Title order={3}>Something went wrong</Title>
                <Text c="dimmed" ta="center">
                    Failed to fetch data. Please try again later.
                </Text>
                <Button
                    color="red"
                    variant="light"
                    onClick={() => window.location.reload()}
                >
                    Try again
                </Button>
            </Stack>
        </Container>
    );
}
