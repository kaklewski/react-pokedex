export function formatPokemonId(id: number): string {
    return `#${id.toString().padStart(4, '0')}`;
}

export function capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export function convertDmToCm(value: number): number {
    return value * 10;
}

export function convertHgToKg(value: number): number {
    return value / 10;
}
