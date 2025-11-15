import { createFileRoute } from '@tanstack/react-router';
import FavoritesPage from '../../pages/Favorites/FavoritesPage';

export const Route = createFileRoute('/favorites/')({
    component: FavoritesPage,
});
