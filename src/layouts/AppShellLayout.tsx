import { Anchor, AppShell, Burger, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from '@tanstack/react-router';
import ThemeSelect from '../components/ThemeSelect';
import classes from './AppShellLayout.module.css';

type AppShellLayoutProps = {
    children: React.ReactNode;
};

type NavButtonProps = {
    url: string;
    name: string;
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
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <NavLogo />
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

function NavLogo() {
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

function NavButtons() {
    return (
        <>
            <NavButton url="/" name="Search" />
            <NavButton url="/favorites" name="Favorites" />
            <NavButton url="/about" name="About" />
        </>
    );
}

function NavButton({ url, name }: NavButtonProps) {
    return (
        <UnstyledButton component={Link} to={url} className={classes.navBtn}>
            {name}
        </UnstyledButton>
    );
}
