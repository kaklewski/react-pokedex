import { createRouter, RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
            <TanStackRouterDevtools router={router} />
        </>
    );
}
