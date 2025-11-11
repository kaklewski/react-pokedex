import { Center, Loader } from '@mantine/core';

export default function GlobalLoader() {
    return (
        <Center h="80vh">
            <Loader color="red" size="xl" />
        </Center>
    );
}
