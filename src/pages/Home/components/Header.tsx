import { Box, Container, Image, Stack } from '@mantine/core';
import logo from '../../../assets/logo.png';
import classes from './Header.module.css';
import SearchBar from './SearchBar';

type HomeHeaderProps = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

export default function Header({ searchTerm, setSearchTerm }: HomeHeaderProps) {
    return (
        <Box className={classes.header} py="xl" mb="xl">
            <Container>
                <Stack align="center" justify="center" gap="md">
                    <Image
                        src={logo}
                        alt="Pokemon Logo"
                        h="auto"
                        w="100%"
                        fit="contain"
                        style={{ maxWidth: 400 }}
                    />
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </Stack>
            </Container>
        </Box>
    );
}
