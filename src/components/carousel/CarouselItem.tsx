import { Box } from "@mui/material"

export type CarouselItemProps = {
    imagePath: string,
    isSelected?: boolean,
    selectedWidth?: number,
    collapsedWidth?: number,
    handleSelect?: () => void
}

const CarouselItem: React.FC<CarouselItemProps> = ({ imagePath, handleSelect, isSelected, selectedWidth, collapsedWidth }) => {

    return <Box
        sx={{
            height: '85vh',
            borderRadius: '40px',
            transition: "width 0.9s ease-in-out",
            width: isSelected ? `${selectedWidth}%` : `${collapsedWidth}%`,
            flexShrink: 0,
            padding: '0.1vw',
            objectFit: 'cover',
        }}
        component='img'
        src={imagePath}
        onClick={handleSelect}
    />
}

export default CarouselItem
