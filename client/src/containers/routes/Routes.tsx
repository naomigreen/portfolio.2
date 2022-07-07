import { useContext } from 'react';
import { DataContext } from '../../utils/hooks';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from '../nav/Nav';

import { NotFound } from '../pages'
import { links } from '../../data/data';

const RouteContainer = () => {
  const { theme } = useContext(DataContext)

  return (
    <Router>
      <Nav />
      <Routes>
        {links.map((link) => (
          <Route key={link.name} path={link.route} element={<link.element theme={theme} />} />
        ))}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
};

export default RouteContainer;
