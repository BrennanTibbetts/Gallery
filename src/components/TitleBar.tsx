import { Box, Typography } from "@mui/material";
import React from "react";

type TitleBarProps = {
   title: string ,
}

const TitleBar: React.FC<TitleBarProps> = ({ title }) => {

    return (
        <Box
            sx={{
                marginTop: '4vh',
                marginBottom: '2vh',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <Typography 
                variant="h4" 
                sx={{
                    fontFamily: '"Libre Baskerville", serif', 
                    fontStyle: 'italic', 
                    fontWeight: 700
                }}
            >
                {title}
            </Typography>
            <a 
                href={'/'}
                style={{ textDecoration: 'none' }}
            >
                <Typography 
                    variant="h4" 
                    sx={{
                        fontFamily: '"Libre Baskerville", serif', 
                        fontStyle: 'italic', 
                        fontWeight: 700,
                        color: 'white',
                        '&:hover': {
                            color: 'primary.main', 
                        }
                    }}
                >
                    BRENNAN.STUDIO
                </Typography>
            </a>
        </Box>
    );
}

export default TitleBar;