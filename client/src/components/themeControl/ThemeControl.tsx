import styled from 'styled-components';
import { themes } from '../../utils/theme/theme';

type ThemeControlProps = {
  icon: string,
  handleClick: (theme: keyof typeof themes) => void,
  theme: keyof typeof themes;
  activeTheme: string
}

const ThemeControl = ({ icon, handleClick, theme, activeTheme }: ThemeControlProps) => (
  <ThemeIcon src={icon} onClick={() => handleClick(theme)} alt='' className={activeTheme === theme ? 'active-theme' : 'theme-icon'} />
)


const ThemeIcon = styled.img`
  margin: 0 5px;
  border-bottom: 2px solid #0000;
  padding-bottom: 8px;
  filter: grayscale(100%);
  `
export default ThemeControl