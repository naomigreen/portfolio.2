import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { DataContext, useFetch } from './utils/hooks';
import { themes, savedTheme, OSTheme } from './utils/theme/theme';
import Routes from './containers/routes/Routes';

const App = () => {
  const gdpData = useFetch('/api/data/gdp', []);
  const houseData = useFetch('/api/data/houses', []);
  const [theme, setTheme] = useState(savedTheme ? savedTheme : OSTheme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <DataContext.Provider value={{ gdpData, houseData, theme, setTheme } as any}>
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
          <Routes />
        </Main>
      </DataContext.Provider>
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
