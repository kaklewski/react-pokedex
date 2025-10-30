import {
    Anchor,
    AppShell,
    Burger,
    Group,
    Paper,
    UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from '@tanstack/react-router';
import classes from './RootLayout.module.css';

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { desktop: true, mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Logo />
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            <NavButtons />
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <NavButtons />
            </AppShell.Navbar>

            <AppShell.Main px={0} pb={0} className={classes.main}>
                {children}

                <Footer />
            </AppShell.Main>
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
            mt="md"
            radius={0}
            ta="center"
            fz="sm"
            color="dimmed"
            style={{ borderLeft: 0, borderRight: 0, borderBottom: 0 }}
        >
            {`© ${new Date().getFullYear()} `}
            <Anchor href="http://kaklewski.pl" fz="sm">
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
