import { Outlet, createRootRoute } from '@tanstack/react-router';
import * as React from 'react';
import RootLayout from '../layouts/RootLayout';

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <React.Fragment>
            <RootLayout>
                <Outlet />
            </RootLayout>
        </React.Fragment>
    );
}
