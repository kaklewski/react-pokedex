import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { IconError404 } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

export default function NotFound() {
    return (
        <Container>
            <Stack align="center" justify="center" style={{ height: '80vh' }}>
                <IconError404 size={64} color="var(--mantine-color-red-6)" />
                <Title order={3}>Page not found</Title>
                <Text c="dimmed" ta="center">
                    Check the URL or return to the home page.
                </Text>
                <Button variant="light" color="red" component={Link} to="/">
                    Go to home
                </Button>
            </Stack>
        </Container>
    );
}
