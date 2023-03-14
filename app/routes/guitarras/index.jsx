import { useLoaderData } from '@remix-run/react';
import ListadoGuitarras from '~/components/listado-guitarras';
import { getGuitarras } from '~/models/guitarras.server';

export function meta() {
  return {
    title: 'GuitarLA - Tienda',
    description:
      'GuitarLA - Tienda | Nuestra colección de guitarras disponibles',
  };
}

export async function loader() {
  const guitarrasInfo = await getGuitarras();

  return guitarrasInfo;
}

const Tienda = () => {
  const guitarrasInfo = useLoaderData();

  const guitarrasList = guitarrasInfo.data;

  return <ListadoGuitarras guitarrasList={guitarrasList} />;
};

export default Tienda;
