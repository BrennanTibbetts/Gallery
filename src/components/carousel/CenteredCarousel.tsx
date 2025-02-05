import { useState } from "react";
import { Stack } from "@mui/material";
import CarouselItem, { CarouselItemProps } from "./CarouselItem";

export type CenteredCarouselProps = {
    items: CarouselItemProps[]
}

const CenteredCarousel: React.FC<CenteredCarouselProps> = ({items}) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(2);
    const [isAnimating, setIsAnimating] = useState(false); // Track animation state
    const selectedWidth = 85;

    const handleSelect = (index: number) => {
        if (isAnimating) return; 
        setIsAnimating(true); 
        setSelectedIndex(index);

        // Reset animation state after the animation duration (0.9s in this case)
        setTimeout(() => {
            setIsAnimating(false);
        }, 900); // 900ms matches the transition duration
    };

    return (
        <Stack direction='row-reverse'>
            {items.map((item, index) => (
                <CarouselItem
                    key={index}
                    imagePath={item.imagePath}
                    handleSelect={() => handleSelect(index)}
                    isSelected={selectedIndex === index}
                    selectedWidth={selectedWidth}
                    collapsedWidth={(100 - selectedWidth) / (items.length - 1)}
                />
            ))}
        </Stack>
    );
};

export default CenteredCarousel;