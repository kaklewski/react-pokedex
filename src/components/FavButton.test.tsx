import { MantineProvider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { showNotification } from '../utils/notifications';
import FavButton from './FavButton';

vi.mock('../utils/notifications', () => ({
    showNotification: vi.fn(),
}));

vi.mock('@mantine/hooks', () => ({
    useMediaQuery: vi.fn(),
}));

const mockedUseMediaQuery = useMediaQuery as unknown as ReturnType<
    typeof vi.fn
>;

export function renderWithProviders(ui: ReactElement) {
    return render(
        <MantineProvider defaultColorScheme="auto">{ui}</MantineProvider>,
    );
}

describe('FavButton', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    it('renders as not favorite when pokemonId is not in localStorage', () => {
        mockedUseMediaQuery.mockReturnValue(false);

        renderWithProviders(<FavButton pokemonId={25} />);

        expect(
            screen.getByRole('button', { name: /add to favorites/i }),
        ).toBeInTheDocument();
    });

    it('renders as favorite when pokemonId is in localStorage', () => {
        localStorage.setItem('favorites', JSON.stringify([25, 1, 7]));
        mockedUseMediaQuery.mockReturnValue(false);

        renderWithProviders(<FavButton pokemonId={25} />);

        expect(
            screen.getByRole('button', { name: /remove from favorites/i }),
        ).toBeInTheDocument();
    });

    it('adds pokemon to favorites and updates localStorage + sends a notification', () => {
        mockedUseMediaQuery.mockReturnValue(false);

        renderWithProviders(<FavButton pokemonId={25} />);

        const button = screen.getByRole('button', {
            name: /add to favorites/i,
        });

        fireEvent.click(button);

        expect(
            screen.getByRole('button', { name: /remove from favorites/i }),
        ).toBeInTheDocument();

        const stored = localStorage.getItem('favorites');
        expect(stored).not.toBeNull();
        const favorites = JSON.parse(stored as string);
        expect(favorites).toEqual([25]);

        expect(showNotification).toHaveBeenCalledWith('addToFav');
    });

    it('removes pokemon from favorites and updates localStorage + sends a notification', () => {
        mockedUseMediaQuery.mockReturnValue(false);

        localStorage.setItem('favorites', JSON.stringify([25, 1, 7]));

        renderWithProviders(<FavButton pokemonId={25} />);

        const button = screen.getByRole('button', {
            name: /remove from favorites/i,
        });

        fireEvent.click(button);

        expect(
            screen.getByRole('button', { name: /add to favorites/i }),
        ).toBeInTheDocument();

        const stored = localStorage.getItem('favorites');
        const favorites = JSON.parse(stored as string);
        expect(favorites).toEqual([1, 7]);

        expect(showNotification).toHaveBeenCalledWith('removeFromFav');
    });

    it('renders ActionIcon instead of Button when isIcon is true', () => {
        mockedUseMediaQuery.mockReturnValue(false);

        renderWithProviders(<FavButton pokemonId={25} isIcon />);

        const button = screen.getByRole('button', {
            name: /add to favorites/i,
        });
        expect(button).toBeInTheDocument();
    });

    it('renders ActionIcon on mobile (useMediaQuery returns true)', () => {
        mockedUseMediaQuery.mockReturnValue(true);

        renderWithProviders(<FavButton pokemonId={25} />);

        const button = screen.getByRole('button', {
            name: /add to favorites/i,
        });
        expect(button).toBeInTheDocument();
    });
});
