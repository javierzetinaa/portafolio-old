import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

export default function Navbar() {
  useEffect(() => {
    const menu = document.querySelector('#menu');
    const menuIcon = document.querySelector('.menu-icon');
    const icono = document.querySelector('.icon');
    const toggleIcon = () => {
      icono.classList.toggle('fa-times-circle');
      menu.classList.toggle('active');
    };
    menuIcon.addEventListener('click', toggleIcon);
    return () => menuIcon.removeEventListener('click', toggleIcon);
  }, []);
  return (
    <header>
      <div className="logo">
        <Logo clase="logo-img" color="eeeeee" />
      </div>
      <nav className="navbar" id="menu">
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
      <div className="menu-icon">
        <i className="fas fa-bars icon"></i>
      </div>
    </header>
  );
}
