import { Badge, Flex, Spoiler, Title } from '@mantine/core';
import PaperCardSection from '../../../components/PaperCardSection';

type MoveItem = {
    move: {
        name: string;
        url: string;
    };
};

type MovesCardProps = {
    moves: Array<MoveItem>;
};

export default function MovesCard({ moves }: MovesCardProps) {
    return (
        <PaperCardSection>
            <Title order={2} mb="md">
                Moves
            </Title>
            <Spoiler maxHeight={90} showLabel="Show more" hideLabel="Hide">
                <Flex direction="row" wrap="wrap" gap="sm">
                    {moves.map((moveItem: MoveItem) => (
                        <Badge
                            key={moveItem.move.name}
                            variant="light"
                            color="gray"
                        >
                            {moveItem.move.name.replace('-', ' ')}
                        </Badge>
                    ))}
                </Flex>
            </Spoiler>
        </PaperCardSection>
    );
}
