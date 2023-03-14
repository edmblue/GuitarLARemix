import { Link, useLocation } from '@remix-run/react';
import imagenCarrito from '../../public/images/carrito.png';

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="navegacion">
      <Link to="/" className={`${location.pathname == '/' ? 'active' : ''}`}>
        Inicio
      </Link>
      <Link
        to="/nosotros"
        className={`${location.pathname == '/nosotros' ? 'active' : ''}`}
      >
        Nosotros
      </Link>
      <Link
        to="/guitarras"
        className={`${location.pathname == '/tienda' ? 'active' : ''}`}
      >
        Tienda
      </Link>
      <Link
        to="/entradas"
        className={`${location.pathname == '/blog' ? 'active' : ''}`}
      >
        Blog
      </Link>
      <Link
        to="/carrito"
        className={`${location.pathname == '/carrito' ? 'active' : ''} carrito`}
      >
        <img
          src={imagenCarrito}
          alt="Imagen de Carrito de Compras"
          className="carrito-icon"
        />
      </Link>
    </nav>
  );
};

export default Nav;
