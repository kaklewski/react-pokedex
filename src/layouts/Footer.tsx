import { Anchor, Box, Container, Divider } from '@mantine/core';

export default function Footer() {
    return (
        <Container mt="md">
            <Divider />
            <Box p="md" ta="center" fz="sm" color="dimmed">
                {`© ${new Date().getFullYear()} `}
                <Anchor
                    href="http://kaklewski.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    fz="sm"
                    variant="gradient"
                    underline="hover"
                >
                    Oskar Kąklewski
                </Anchor>
            </Box>
        </Container>
    );
}
