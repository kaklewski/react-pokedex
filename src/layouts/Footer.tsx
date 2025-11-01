import { Anchor, Paper } from '@mantine/core';

export default function Footer() {
    return (
        <Paper
            withBorder
            p="md"
            radius={0}
            ta="center"
            fz="sm"
            color="dimmed"
            style={{
                flexShrink: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: 0,
            }}
        >
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
        </Paper>
    );
}
