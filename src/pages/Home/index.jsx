
import { Link } from 'react-router-dom';

const Home = () => {
  const sneakers = [
    {
      id: 1,
      image: "src/assets/logos/vans.jpg",
      link: "/tienda/vans"
    },
    {
      id: 2,
      image: "src/assets/logos/nike.jpg",
      link: "/tienda/nike"
    },
    {
      id: 3,
      image: "src/assets/logos/puma.jpg",
      link: "/tienda/puma"
    },
    {
      id: 4,
      image: "src/assets/logos/adidas.jpg",
      link: "/tienda/adidas"
    },
    {
      id: 5,
      image: "src/assets/logos/face1.png",
      link: "/tienda/the%20north%20face"
    }
  ];

  return (
    <main className="container">
      <h2 className='titulo'>Marcas de nuestra tienda</h2>
      <div className="sneaker-list">
        {sneakers.map(sneaker => (
          <div key={sneaker.id} className="sneaker-card">
            <img
              src={sneaker.image}
              alt={sneaker.name}
              className='sneaker-image'// Añade la clase aquí
            />
            <h4>{sneaker.name}</h4>
            <p>{sneaker.price}</p>
            <Link to={sneaker.link}>
              <button className='home-b'>Ver Detalle</button>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/tienda">
        <button className="view-more">Ver todos los productos</button>
      </Link>
    </main>
  );
};

export default Home;