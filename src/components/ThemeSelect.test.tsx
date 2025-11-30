import { useMantineColorScheme } from '@mantine/core';
import { fireEvent, screen } from '@testing-library/react';
import type { Mock } from 'vitest';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../test-utils';
import ThemeSelect from './ThemeSelect';

vi.mock('@mantine/core', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@mantine/core')>();
    return {
        ...actual,
        useMantineColorScheme: vi.fn(),
    };
});

describe('ThemeSelect', () => {
    const setColorSchemeMock = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();

        (useMantineColorScheme as Mock).mockReturnValue({
            setColorScheme: setColorSchemeMock,
        });
    });

    it('renders the theme button', () => {
        renderWithProviders(<ThemeSelect />);
        const button = screen.getByRole('button', { name: /change theme/i });
        expect(button).toBeInTheDocument();
    });

    it('calls setColorScheme("light") when light option is clicked', async () => {
        renderWithProviders(<ThemeSelect />);

        const button = screen.getByRole('button', { name: /change theme/i });
        fireEvent.click(button);

        const lightItem = await screen.findByRole('menuitem', {
            name: /light/i,
        });
        fireEvent.click(lightItem);

        expect(setColorSchemeMock).toHaveBeenCalledWith('light');
    });
});
