import {
    Anchor,
    AppShell,
    Burger,
    Flex,
    Group,
    Text,
    UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPokeball } from '@tabler/icons-react';
import { Link, useLocation } from '@tanstack/react-router';
import PokemonSpotlight from '../components/PokemonSpotlight';
import ThemeSelect from '../components/ThemeSelect';
import classes from './AppShellLayout.module.css';
import Footer from './Footer';

type AppShellLayoutProps = {
    children: React.ReactNode;
};

type NavButtonProps = {
    url: string;
    text: string;
};

export default function AppShellLayout({ children }: AppShellLayoutProps) {
    const [opened, { toggle }] = useDisclosure();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { desktop: true, mobile: !opened },
            }}
            pt={isHomePage ? 0 : 'md'}
            pb={0}
            px={0}
        >
            <AppShell.Header>
                <Group h="100%" px="lg">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Flex
                        justify="space-between"
                        align="center"
                        style={{ flex: 1 }}
                    >
                        <NavLogo />
                        <Group gap="xs">
                            <Group
                                gap="xs"
                                ml="xl"
                                visibleFrom="sm"
                                onClick={toggle}
                            >
                                <NavButtons />
                            </Group>
                            <PokemonSpotlight />
                            <ThemeSelect />
                        </Group>
                    </Flex>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4} onClick={toggle}>
                <NavButtons />
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
                <Footer />
            </AppShell.Main>
        </AppShell>
    );
}

function NavLogo() {
    return (
        <>
            <Anchor
                component={Link}
                to="/"
                underline="never"
                className={classes.logo}
            >
                <Flex align="center" gap={4}>
                    <IconPokeball size={32} className={classes.logoSygnet} />
                    <Text
                        variant="gradient"
                        gradient={{ from: 'red', to: 'yellow' }}
                        className={classes.logoText}
                    >
                        React Pokédex
                    </Text>
                </Flex>
            </Anchor>
        </>
    );
}

function NavButtons() {
    return (
        <>
            <NavButton url="/" text="Home" />
            <NavButton url="/favorites" text="Favorites" />
            <NavButton url="/about" text="About" />
        </>
    );
}

function NavButton({ url, text }: NavButtonProps) {
    return (
        <UnstyledButton component={Link} to={url} className={classes.navBtn}>
            {text}
        </UnstyledButton>
    );
}
