import { CloseButton, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import classes from './SearchBar.module.css';

type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

type ClearBtnProps = {
    setSearchTerm: (term: string) => void;
};

export default function SearchBar({
    searchTerm,
    setSearchTerm,
}: SearchBarProps) {
    return (
        <TextInput
            className={classes.searchBar}
            size="lg"
            w="100%"
            radius="xl"
            placeholder="e.g. Pikachu"
            leftSection={<IconSearch />}
            rightSection={
                searchTerm && <ClearBtn setSearchTerm={setSearchTerm} />
            }
            leftSectionPointerEvents="none"
            rightSectionPointerEvents="all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
        />
    );
}

function ClearBtn({ setSearchTerm }: ClearBtnProps) {
    return (
        <CloseButton
            aria-label="Clear input"
            onClick={() => setSearchTerm('')}
            radius="50%"
        />
    );
}
