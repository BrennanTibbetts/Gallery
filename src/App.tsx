import { Box, Typography } from "@mui/material";
import CenteredCarousel from "./components/carousel/CenteredCarousel";
import TitleBar from "./components/TitleBar";
import { useEffect, useState } from "react";

function App() {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isPortrait) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
        }}
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
          Please use landscape or wider screen.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        margin: '4vh',
        overflow: 'none',
      }}
    >
      <TitleBar
        title="Gallery"
      />
      <CenteredCarousel items={[
        {imagePath: '/gallery/assets/moebius/moebius.jpg'},
        {imagePath: '/gallery/assets/spider/spider.jpg'},
        {imagePath: '/gallery/assets/moebius/moebius.jpg'},
        {imagePath: '/gallery/assets/spider/spider.jpg'},
        {imagePath: '/gallery/assets/moebius/moebius.jpg'},
        {imagePath: '/gallery/assets/spider/spider.jpg'},
        {imagePath: '/gallery/assets/moebius/moebius.jpg'},
        {imagePath: '/gallery/assets/spider/spider.jpg'},
      ]}   
      />
    </Box>
  );
}

export default App;