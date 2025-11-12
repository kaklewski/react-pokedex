import { Button } from '@mantine/core';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

type FavButtonProps = {
    pokemonId: number;
};

export default function FavButton({ pokemonId }: FavButtonProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('favorites');
        if (stored) {
            const favorites: number[] = JSON.parse(stored);
            setIsFavorite(favorites.includes(pokemonId));
        }
    }, [pokemonId]);

    function toggleFavorite() {
        const stored = localStorage.getItem('favorites');
        let favorites: number[] = stored ? JSON.parse(stored) : [];

        if (favorites.includes(pokemonId)) {
            favorites = favorites.filter((id) => id !== pokemonId);
            setIsFavorite(false);
        } else {
            favorites.push(pokemonId);
            favorites.sort();
            setIsFavorite(true);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    return (
        <Button
            leftSection={
                isFavorite ? (
                    <IconHeartFilled size={18} />
                ) : (
                    <IconHeart size={18} />
                )
            }
            variant={isFavorite ? 'filled' : 'light'}
            color="red"
            radius="xl"
            onClick={toggleFavorite}
        >
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </Button>
    );
}
