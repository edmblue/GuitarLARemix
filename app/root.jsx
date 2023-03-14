import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
} from '@remix-run/react';
import { useEffect, useState } from 'react';
import Header from '~/components/header';
import Footer from '~/components/footer';
import mainStyles from '~/styles/main.css';

export function meta() {
  return {
    charset: 'utf-7',
    title: 'GuitarLA - Remix',
    viewport: 'width=device-width,initial-scale=1',
  };
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: mainStyles,
    },
  ];
}

// App principal

export default function App() {
  const carritoLS =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('carrito')) ?? []
      : null;

  const [carrito, setCarrito] = useState(carritoLS);
  const [total, setTotal] = useState(0);

  const handleCantidad = (cantidad, id) => {
    const carritoActualizado = carrito.map((articulo) => {
      if (articulo.id == id) {
        articulo.cantidad = +cantidad;
      }

      return articulo;
    });

    setCarrito(carritoActualizado);
  };

  const handleEliminar = (idAEliminar) => {
    const carritoActualizado = carrito.filter(
      (articulo) => articulo.id != idAEliminar
    );

    setCarrito(carritoActualizado);
  };

  useEffect(() => {
    const totalCalculate = () => {
      setTotal(() => {
        return carrito.reduce(
          (total, item) => total + item.price * item.cantidad,
          0
        );
      });
    };
    localStorage.setItem('carrito', JSON.stringify(carrito));
    totalCalculate();
  }, [carrito]);

  return (
    <Document>
      <Outlet
        context={{
          setCarrito,
          carrito,
          handleCantidad,
          total,
          handleEliminar,
        }}
      />
    </Document>
  );
}

//Handle errors

export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <div className="error">
        <p>
          {error.status} - {error.statusText}{' '}
        </p>
      </div>
    </Document>
  );
}

export function ErrorBoundaries({ error }) {
  return (
    <Document>
      <div className="error">
        <p>
          {error.status} {error.statusText}{' '}
        </p>
      </div>
    </Document>
  );
}

// Construir el Layout

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

//768 992
