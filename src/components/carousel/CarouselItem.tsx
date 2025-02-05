import { Box, Button } from "@mui/material";

export type CarouselItemProps = {
    imagePath: string,
    isSelected?: boolean,
    selectedWidth?: number,
    collapsedWidth?: number,
    handleSelect?: () => void
}

const CarouselItem: React.FC<CarouselItemProps> = ({ imagePath, handleSelect, isSelected, selectedWidth, collapsedWidth }) => {
    return (
        <Box
            sx={{
                height: '85vh',
                borderRadius: '40px',
                transition: "width 0.9s ease-in-out",
                width: isSelected ? `${selectedWidth}%` : `${collapsedWidth}%`,
                flexShrink: 0,
                padding: '0.1vw',
                position: 'relative', // Required for absolute positioning of children
                overflow: 'hidden', // Ensure children don't overflow the container
                justifyContent: 'center',
                display: 'flex'
            }}
            component='div' // Changed to 'div' to allow children
            onClick={handleSelect}
        >
            {/* Image */}
            <Box
                component='img'
                src={imagePath}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '40px',
                }}
            />

            {/* Enter button */}
            <Button
                variant="contained"
                sx={{
                    fontFamily: '"Libre Baskerville", serif', 
                    fontStyle: 'italic', 
                    fontWeight: 700,
                    position: 'absolute',
                    bottom: '1vh',
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: '1.2rem',
                    borderRadius: '4',
                    opacity: isSelected ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    },
                }}
            >
                View Scene
            </Button>
        </Box>
    );
};

export default CarouselItem;