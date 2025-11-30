import type { AnchorProps, TextProps } from '@mantine/core';
import { Anchor, Container, List, Text, Title } from '@mantine/core';
import type { ReactNode } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function AboutPage() {
    useDocumentTitle('About');

    return (
        <Container>
            <Title order={1}>About</Title>

            <AboutText mt="md">
                React Pokédex is a side project that I'm building in my free
                time to experiment with modern React libraries and patterns.
                It's a playground for trying out new tools, improving my
                frontend skills, and having some fun with the PokéAPI.
            </AboutText>

            <AboutText mt="md">Libraries and tools used:</AboutText>

            <List size="lg" withPadding>
                <List.Item>TanStack Router - client-side routing</List.Item>
                <List.Item>
                    TanStack Query - data fetching, caching & synchronization
                </List.Item>
                <List.Item>
                    Mantine UI - component library, hooks, and additional
                    extensions
                </List.Item>
                <List.Item>
                    Framer Motion - animations and micro-interactions
                </List.Item>
                <List.Item>Vitest - unit and component testing</List.Item>
            </List>

            <AboutText mt="md">
                All icons used in the project come from{' '}
                <ExternalLink href="https://tabler.io/icons">
                    Tabler Icons
                </ExternalLink>
                .
            </AboutText>

            <AboutText mt="md">
                The project is open source, and the full codebase is available
                in the{' '}
                <ExternalLink href="https://github.com/kaklewski/react-pokedex">
                    GitHub repository
                </ExternalLink>
                .
            </AboutText>

            <AboutText mt="md">
                Feel free to check out my{' '}
                <ExternalLink href="https://github.com/kaklewski">
                    GitHub profile
                </ExternalLink>{' '}
                and{' '}
                <ExternalLink href="https://kaklewski.pl">
                    personal website
                </ExternalLink>{' '}
                to see more of my work.
            </AboutText>
        </Container>
    );
}

function AboutText({
    children,
    ...props
}: TextProps & { children: ReactNode }) {
    return (
        <Text size="lg" component="p" {...props}>
            {children}
        </Text>
    );
}

function ExternalLink({
    children,
    href,
    ...props
}: AnchorProps & { children: ReactNode; href: string }) {
    return (
        <Anchor
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            {...props}
        >
            {children}
        </Anchor>
    );
}
