import Menu from "../../components/Menu";

const Footer = () => {

  const links = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Tienda',
      href: '/store'
    },
    {
      label: 'Contacto',
      href: '/contact'
    },
  ];

  return(
      <footer>
        <section className="container">
            <nav className="navbar">
              <Menu className="navbar" links={links} />
            </nav>
            <picture>
                <img src="/src/assets/logo.svg" alt="Isotipo de la marca Funkoshop" />
            </picture>
        </section>
        <p className="copy">All rights reserved - Tri-Shop &copy;</p>
    </footer>
  );
};

export default Footer;