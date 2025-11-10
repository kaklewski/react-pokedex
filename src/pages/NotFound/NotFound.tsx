import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

export default function NotFound() {
    return (
        <Container>
            <Stack align="center" justify="center" style={{ height: '80vh' }}>
                <Title order={1}>404 - Page Not Found</Title>
                <Text>Check the URL or return to the home page.</Text>
                <Button
                    leftSection={<IconArrowLeft size={14} />}
                    variant="light"
                    color="red"
                    component={Link}
                    to="/"
                >
                    Go to Home
                </Button>
            </Stack>
        </Container>
    );
}
