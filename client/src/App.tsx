import { ParallaxProvider } from 'react-scroll-parallax';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { themes, savedTheme, OSTheme } from './utils/theme/theme';
import Routes from './containers/routes/Routes';

const App = () => {
  const [theme, setTheme] = useState(savedTheme ? savedTheme : OSTheme);
  return (
    <ThemeProvider theme={themes[theme]}>
      <ParallaxProvider>
        <Main>
          <Video
            autoPlay
            loop
            playsInline
            preload="auto"
            muted
            poster="https://website-background.s3.eu-west-2.amazonaws.com/video-image.png"
            src="https://website-background.s3.eu-west-2.amazonaws.com/bg-compressed.mp4"
          />
          <Routes setTheme={setTheme} theme={theme} />
        </Main>
      </ParallaxProvider>
    </ThemeProvider>
  )
};



const Video = styled.video`
	width: 100%;
	height: 100%;
	position: fixed;
	object-fit: cover;
`

const Main = styled.div`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  position: relative;
`

export default App;
