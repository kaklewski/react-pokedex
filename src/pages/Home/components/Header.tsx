import { Box, Container, Image, Stack, Title } from '@mantine/core';
import logo from '../../../assets/logo.png';
import classes from './Header.module.css';
import SearchBar from './SearchBar';

type HomeHeaderProps = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

export default function Header({ searchTerm, setSearchTerm }: HomeHeaderProps) {
    return (
        <Box className={classes.header} py="xl" mb="xl" mt={-16}>
            <Container>
                <Stack align="center" justify="center" gap="md">
                    <Image
                        src={logo}
                        alt="Pokemon Logo"
                        h={200}
                        w="auto"
                        fit="contain"
                    />
                    <Title className={classes.h1}>
                        Which Pokémon are you looking for?
                    </Title>
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </Stack>
            </Container>
        </Box>
    );
}
