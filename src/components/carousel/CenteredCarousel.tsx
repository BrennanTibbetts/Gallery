import { useState } from "react";
import { Stack } from "@mui/material";

import CarouselItem, { CarouselItemProps } from "./CarouselItem";

export type CenteredCarouselProps = {
    items: CarouselItemProps[]
}

const CenteredCarousel: React.FC<CenteredCarouselProps> = ({items}) => {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(2)
    const selectedWidth = 85

    return <Stack
        direction='row-reverse'
    >
            {items.map((item, index) => 
                <CarouselItem
                    key={index}
                    imagePath={item.imagePath}
                    handleSelect={()=>setSelectedIndex(index)}
                    isSelected={selectedIndex == index}
                    selectedWidth={selectedWidth}
                    collapsedWidth={(100-selectedWidth) / (items.length - 1)}
                />
            )}
    </Stack>
}

export default CenteredCarousel