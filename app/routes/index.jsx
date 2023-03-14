import { useLoaderData } from '@remix-run/react';
import { getEntradas } from '~/models/entradas.server';
import { getGuitarras } from '~/models/guitarras.server';
import { getContent } from '~/models/contenido.server';
import Contenido from '~/components/contenido';
import ListadoGuitarras from '~/components/listado-guitarras';
import ListadoEntradas from '~/components/listado-entradas';
import blogStyles from '~/styles/blog.css';
import tiendaStyles from '~/styles/tienda.css';
import contentStyles from '~/styles/contenido.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: blogStyles,
    },
    {
      rel: 'stylesheet',
      href: tiendaStyles,
    },
    {
      rel: 'stylesheet',
      href: contentStyles,
    },
  ];
}

export async function loader() {
  const [entradasData, guitarrasList, contentData] = await Promise.all([
    getEntradas(),
    getGuitarras(),
    getContent(),
  ]);

  return {
    entradasData: entradasData.data,
    guitarrasList: guitarrasList.data,
    contentData: contentData.data.attributes,
  };
}

const Index = () => {
  const { entradasData, guitarrasList, contentData } = useLoaderData();

  return (
    <div className="container">
      <main>
        <ListadoGuitarras guitarrasList={guitarrasList} />
      </main>
      <Contenido contentData={contentData} />
      <section>
        <ListadoEntradas entradasData={entradasData} />
      </section>
    </div>
  );
};

export default Index;
