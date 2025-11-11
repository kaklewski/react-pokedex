import { Stack } from '@mantine/core';
import { useRouterState } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'framer-motion';
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
            <AnimatePresence mode="wait">
                <motion.div
                    key={routerState.location.pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                    <AppShellLayout>{children}</AppShellLayout>
                </motion.div>
            </AnimatePresence>

            <Footer />
        </Stack>
    );
}
