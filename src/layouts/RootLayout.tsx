import {
    Anchor,
    AppShell,
    Burger,
    Group,
    Paper,
    Stack,
    UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation, useRouterState } from '@tanstack/react-router';
import { useEffect } from 'react';
import ThemeSelect from '../components/ThemeSelect';
import classes from './RootLayout.module.css';

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    const routerState = useRouterState();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [routerState.location.pathname]);

    return (
        <Stack className={classes.rootLayout}>
            <AppShellLayout>{children}</AppShellLayout>
            <Footer />
        </Stack>
    );
}

function AppShellLayout({ children }: RootLayoutProps) {
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
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Logo />
                        <Group ml="xl" visibleFrom="sm" onClick={toggle}>
                            <NavButtons />
                        </Group>
                    </Group>
                    <ThemeSelect />
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4} onClick={toggle}>
                <NavButtons />
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}

function NavButtons() {
    return (
        <>
            <UnstyledButton component={Link} to="/" className={classes.navBtn}>
                Search
            </UnstyledButton>
            <UnstyledButton className={classes.navBtn}>TEST</UnstyledButton>
            <UnstyledButton className={classes.navBtn}>TEST</UnstyledButton>
        </>
    );
}

function Footer() {
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

function Logo() {
    return (
        <Anchor
            component={Link}
            to="/"
            variant="gradient"
            gradient={{ from: 'red', to: 'yellow' }}
            fz="xl"
            fw={700}
        >
            React Pokédex
        </Anchor>
    );
}
