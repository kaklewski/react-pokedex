import { Container } from '@mantine/core';
import PaperCardSection from '../../components/PaperCardSection';
import FavoritesTable from './components/FavoritesTable';

export default function FavoritesPage() {
    return (
        <Container>
            <PaperCardSection title="Favorite Pokémon">
                <FavoritesTable />
            </PaperCardSection>
        </Container>
    );
}
