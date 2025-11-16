import { useState } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Header from './components/Header';
import PokemonGrid from './components/PokemonGrid';

export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');

    useDocumentTitle();

    return (
        <>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PokemonGrid searchTerm={searchTerm} />
        </>
    );
}
