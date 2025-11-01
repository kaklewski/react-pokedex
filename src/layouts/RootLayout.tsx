import { Stack } from '@mantine/core';
import { useRouterState } from '@tanstack/react-router';
import { useEffect } from 'react';
import AppShellLayout from './AppShellLayout';
import Footer from './Footer';
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
