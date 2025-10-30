import { useState } from 'react';
import PokemonGrid from './components/PokemonGrid';
import Header from './components/Header';

export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PokemonGrid searchTerm={searchTerm} />
        </>
    );
}
