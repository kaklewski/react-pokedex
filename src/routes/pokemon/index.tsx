import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/pokemon/')({
    beforeLoad: () => {
        throw redirect({ to: '/' });
    },
});
