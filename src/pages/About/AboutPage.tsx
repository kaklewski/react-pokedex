import { Container, Text, Title } from '@mantine/core';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function AboutPage() {
    useDocumentTitle('About');

    return (
        <Container>
            <Title order={1}>About Page</Title>
            <Text>This is the about page of the application.</Text>
        </Container>
    );
}
