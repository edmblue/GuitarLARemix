import { Link } from '@remix-run/react';
import Logo from '../../public/images/logo.svg';
import Nav from './nav';

const header = () => {
  return (
    <header className="header">
      <div className="contenedor">
        <div className="logo">
          <Link
            to="/
          "
          >
            <img src={Logo} alt="Logo - GuitarLA" />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default header;
