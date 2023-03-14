import { Outlet, useOutletContext } from '@remix-run/react';
import tiendaStyle from '~/styles/tienda.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: tiendaStyle,
    },
  ];
}

const Tienda = () => {
  return (
    <main className="tienda">
      <Outlet context={useOutletContext()} />
    </main>
  );
};

export default Tienda;
