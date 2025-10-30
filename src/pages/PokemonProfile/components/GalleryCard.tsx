import { Carousel } from '@mantine/carousel';
import { Box, Center, Image } from '@mantine/core';
import PaperCardSection from '../../../components/PaperCardSection';

type GalleryCardProps = {
    sprites: any;
};

type GallerySlideProps = {
    src: string;
    alt: string;
};

export default function GalleryCard({ sprites }: GalleryCardProps) {
    const combinedArtworkSprites = [
        ...Object.values(sprites['other']['home']),
        ...Object.values(sprites['other']['official-artwork']),
        ...Object.values(sprites['other']['dream_world']),
        ...Object.values(sprites['other']['showdown']),
        ...Object.values(sprites),
    ];

    const imageUrls = combinedArtworkSprites.filter(
        (value) => typeof value === 'string' && value !== null,
    );

    return (
        <PaperCardSection title="Gallery">
            <Box>
                <Carousel
                    withControls
                    withIndicators
                    emblaOptions={{
                        loop: true,
                        dragFree: false,
                        align: 'center',
                    }}
                >
                    {imageUrls.map((url, index) => (
                        <GallerySlide
                            key={index}
                            src={url}
                            alt={`sprite-${index}`}
                        />
                    ))}
                </Carousel>
            </Box>
        </PaperCardSection>
    );
}

function GallerySlide({ src, alt }: GallerySlideProps) {
    return (
        <Carousel.Slide>
            <Center>
                <Image src={src} alt={alt} h={150} w="auto" />
            </Center>
        </Carousel.Slide>
    );
}
