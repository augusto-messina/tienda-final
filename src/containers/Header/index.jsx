
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import Menu from '../../components/Menu';
import CartWidget from '../../components/CartWidget';

const Header = () => {

  const links = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Tienda',
      href: '/tienda'
    },
    {
      label: 'Contacto',
      href: '/contacto'
    },
  ];

  return (
    <header className="header">
      <nav className="navbar container">
        <a className="navbar__logo" href="/">
          <figure className="navbar__img">
            <img src={logo} alt="" />
          </figure>
        </a>
        <Menu className="navbar" links={links}>
        <li>
            <Link to="/Carrito" className="navbar__link-button">
              <CartWidget quantity={0}/>
            </Link>
          </li>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;