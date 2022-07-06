import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { themes } from '../../utils/theme/theme';
import Nav from '../nav/Nav';
import { NotFound } from '../pages'
import { links } from '../../data/data';


type RouteContainerProps = {
  setTheme: (theme: keyof typeof themes) => void;
  theme: keyof typeof themes;
}
const RouteContainer = ({ setTheme, theme }: RouteContainerProps) => (
  <Router>
    <Nav setTheme={setTheme} theme={theme} />
    <Routes>
      {links.map((link) => (
        <Route key={link.name} path={link.route} element={<link.element theme={theme} />} />
      ))}
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
);

export default RouteContainer;
