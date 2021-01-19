import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

export default function Navbar() {
  return (
    <header>
      <Logo clase="logo" color="eeeeee" />
      <nav className="navbar">
        <ul>
          <li>
            <NavLink className="btn" activeClassName="btn-active" to="/" exact>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className="btn"
              activeClassName="btn-active"
              to="/trabajos"
              exact
            >
              Trabajos
            </NavLink>
          </li>
          <li>
            <NavLink
              className="btn"
              activeClassName="btn-active"
              to="/precios"
              exact
            >
              Precios
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink className="contacto" to="/contacto" exact>
        Contacto
      </NavLink>
    </header>
  );
}
