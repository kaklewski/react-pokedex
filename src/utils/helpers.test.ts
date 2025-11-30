import { describe, expect, it } from 'vitest';
import {
    capitalizeFirstLetter,
    convertDmToCm,
    convertHgToKg,
    formatPokemonId,
} from './helpers';

describe('formatPokemonId', () => {
    it('adds # at the beginning', () => {
        const result = formatPokemonId(1);
        expect(result.startsWith('#')).toBe(true);
    });

    it('formats single digit numbers to #000X', () => {
        expect(formatPokemonId(7)).toBe('#0007');
    });

    it('formats three digit numbers to #XXXX', () => {
        expect(formatPokemonId(1234)).toBe('#1234');
    });
});

describe('capitalizeFirstLetter', () => {
    it('capitalizes the first character of a string', () => {
        expect(capitalizeFirstLetter('bulbasaur')).toBe('Bulbasaur');
    });

    it('works correctly when the first character is already capitalized', () => {
        expect(capitalizeFirstLetter('Bulbasaur')).toBe('Bulbasaur');
    });

    it('returns an empty string when it receives an empty string', () => {
        expect(capitalizeFirstLetter('')).toBe('');
    });

    it('works for a single char string', () => {
        expect(capitalizeFirstLetter('a')).toBe('A');
    });
});

describe('convertDmToCm', () => {
    it('converts decimeters to centimeters (1 dm = 10 cm', () => {
        expect(convertDmToCm(1)).toBe(10);
    });

    it('returns 0 when it receives a 0', () => {
        expect(convertDmToCm(0)).toBe(0);
    });
});

describe('convertHgToKg', () => {
    it('converts hektograms to kilograms (10 hg = 1 kg)', () => {
        expect(convertHgToKg(10)).toBe(1);
    });

    it('returns 0 when it receives a 0', () => {
        expect(convertHgToKg(0)).toBe(0);
    });
});
