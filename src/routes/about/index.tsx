import { createFileRoute } from '@tanstack/react-router';
import AboutPage from '../../pages/About/AboutPage';

export const Route = createFileRoute('/about/')({
    component: AboutPage,
});
