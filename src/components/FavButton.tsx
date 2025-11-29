import { ActionIcon, Button, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { showNotification } from '../utils/notifications';

type FavButtonProps = {
    pokemonId: number;
    isIcon?: boolean;
};

export default function FavButton({
    pokemonId,
    isIcon = false,
}: FavButtonProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('favorites');
        if (stored) {
            const favorites: number[] = JSON.parse(stored);
            setIsFavorite(favorites.includes(pokemonId));
        }
    }, [pokemonId]);

    const isMobile = useMediaQuery('(max-width: 48em)');

    function toggleFavorite() {
        const stored = localStorage.getItem('favorites');
        let favorites: number[] = stored ? JSON.parse(stored) : [];

        if (favorites.includes(pokemonId)) {
            favorites = favorites.filter((id) => id !== pokemonId);
            setIsFavorite(false);
            showNotification('removeFromFav');
        } else {
            favorites.push(pokemonId);
            favorites.sort();
            setIsFavorite(true);
            showNotification('addToFav');
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    const buttonIcon = isFavorite ? (
        <IconHeartFilled size={18} />
    ) : (
        <IconHeart size={18} />
    );

    const buttonVariant = isFavorite ? 'light' : 'filled';
    const buttonColor = 'red';
    const buttonRadius = 'xl';
    const buttonLabel = isFavorite
        ? 'Remove from favorites'
        : 'Add to favorites';

    if (isIcon || isMobile) {
        return (
            <Tooltip
                label={buttonLabel}
                withArrow
                position="bottom"
                transitionProps={{ transition: 'pop', duration: 250 }}
            >
                <ActionIcon
                    onClick={toggleFavorite}
                    variant={buttonVariant}
                    color={buttonColor}
                    radius={buttonRadius}
                    size="lg"
                    aria-label={buttonLabel}
                >
                    {buttonIcon}
                </ActionIcon>
            </Tooltip>
        );
    } else {
        return (
            <Button
                leftSection={buttonIcon}
                variant={buttonVariant}
                color={buttonColor}
                radius={buttonRadius}
                onClick={toggleFavorite}
            >
                {buttonLabel}
            </Button>
        );
    }
}
