import { Flex, Loader } from '@mantine/core';

export default function GlobalLoader() {
    return (
        <Flex justify="center" align="center" style={{ height: '80vh' }}>
            <Loader color="red" size="xl" />
        </Flex>
    );
}
