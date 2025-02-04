import { Box } from "@mui/material"

import CenteredCarousel from "./components/carousel/CenteredCarousel"
import TitleBar from "./components/TitleBar"

function App() {

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
  )
}

export default App
