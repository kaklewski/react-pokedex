import { Card, Image, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { capitalizeFirstLetter, formatPokemonId } from '../../../utils/helpers';
import classes from './PokemonCard.module.css';

type PokemonCardProps = {
    id: number;
    name: string;
};

export default function PokemonCard({ id, name }: PokemonCardProps) {
    const idString = formatPokemonId(id);
    const nameCapitalized = capitalizeFirstLetter(name);

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
            <Card
                component={Link}
                to={`/pokemon/${name}`}
                shadow="sm"
                radius="md"
                withBorder
            >
                <Card.Section className={classes.image} p={8} withBorder>
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={name}
                    />
                </Card.Section>

                <Text size="sm" c="dimmed" mt={8} mb={4}>
                    {idString}
                </Text>

                <Text size="lg">{nameCapitalized}</Text>
            </Card>
        </motion.div>
    );
}
