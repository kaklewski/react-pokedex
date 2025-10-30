import { createFileRoute } from '@tanstack/react-router';
import PokemonProfilePage from '../../pages/PokemonProfile/PokemonProfilePage';

export const Route = createFileRoute('/pokemon/$name')({
    component: PokemonProfilePage,
});
