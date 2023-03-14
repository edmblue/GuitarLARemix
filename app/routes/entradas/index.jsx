import { useLoaderData } from '@remix-run/react';
import { getEntradas } from '~/models/entradas.server';
import ListadoEntradas from '~/components/listado-entradas';

export async function loader() {
  const entradasData = await getEntradas();

  return entradasData.data;
}

const Blog = () => {
  const entradasData = useLoaderData();

  return <ListadoEntradas entradasData={entradasData} />;
};

export default Blog;
