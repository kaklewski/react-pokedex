import { Container } from '@mantine/core';
import PaperCardSection from '../../components/PaperCardSection';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import FavoritesTable from './components/FavoritesTable';

export default function FavoritesPage() {
    useDocumentTitle('Favorite Pokémon');

    return (
        <Container>
            <PaperCardSection title="Favorite Pokémon">
                <FavoritesTable />
            </PaperCardSection>
        </Container>
    );
}
