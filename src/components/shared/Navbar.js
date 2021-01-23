import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

export default function Navbar() {
  const [offsetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);
  useEffect(() => {
    const menu = document.querySelector('#menu');
    const menuIcon = document.querySelector('.menu-icon');
    const icono = document.querySelector('.icon');
    const toggleIcon = () => {
      icono.classList.toggle('fa-times-circle');
      menu.classList.toggle('active');
    };
    menuIcon.addEventListener('click', toggleIcon);
    window.addEventListener('scroll', handleScroll);

    return () => {
      menuIcon.removeEventListener('click', toggleIcon);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const header = document.getElementById('header');
    const botones = document.querySelectorAll('.btn');
    const contacto = document.querySelector('.contacto');
    //console.log(offsetY);
    if (offsetY > 250) {
      header.classList.add('blur');
      botones.forEach((boton) => {
        boton.classList.remove('normal');
        boton.classList.add('dark');
      });
      contacto.classList.remove('normal');
      contacto.classList.add('dark');
    } else {
      header.classList.remove('blur');
      botones.forEach((boton) => {
        boton.classList.remove('dark');
        boton.classList.add('normal');
      });
      contacto.classList.remove('dark');
      contacto.classList.add('normal');
    }
  }, [offsetY]);
  return (
    <header id="header" className="header">
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
