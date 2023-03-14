import { useOutletContext } from '@remix-run/react';
import { ClientOnly } from 'remix-utils';
import CarritoStyles from '~/styles/carrito.css';
import GuitarraCarrito from '~/components/guitarra-carrito';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: CarritoStyles,
    },
  ];
}

const Carrito = () => {
  const { carrito, total } = useOutletContext();

  return (
    <ClientOnly fallback="Cargando...">
      {() => (
        <main>
          <div className="container">
            <div className="grid-carrito">
              <div className="product-container">
                <h2>Articulos</h2>
                {carrito?.length > 0 ? (
                  carrito?.map((articulo) => (
                    <GuitarraCarrito key={articulo.id} articulo={articulo} />
                  ))
                ) : (
                  <p>¡Añada articulos a su compra!</p>
                )}
              </div>
              <aside className="resumen">
                <h2>Resumen del Pedido</h2>
                <p>
                  Total a pagar <span className="precio">${total}</span>
                </p>
              </aside>
            </div>
          </div>
        </main>
      )}
    </ClientOnly>
  );
};

export default Carrito;
