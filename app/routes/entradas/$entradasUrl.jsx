import { useLoaderData } from '@remix-run/react';
import { getEntradaItem } from '~/models/entradas.server';
import { formatDate } from '~/helpers';

export function meta({ data }) {
  if (!data) {
    return {
      title: 'Entrada de Blog No Encontrada',
      description: 'La entrada de blog que solicitas no esta disponible',
    };
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.title} `,
    description: `Documento entero de la entrada de blog ${data.data[0].attributes.title}`,
  };
}

export async function loader({ params }) {
  const entradaData = await getEntradaItem(params.entradasUrl);

  if (entradaData?.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada de Blog no encontrada',
    });
  }

  return entradaData;
}

const EntradasUrl = () => {
  const entradaData = useLoaderData();
  const entradaInfo = entradaData.data[0].attributes;

  const { title, content, createdAt, image } = entradaInfo;

  return (
    <div className="entrada-item">
      <div className="contenedor">
        <div className="img-container">
          <img
            src={image.data.attributes.url}
            alt={`Fotogradia de la entrada ${title}`}
          />
        </div>
        <div className="info-container">
          <h1>{title}</h1>
          <p className="fecha">{formatDate(createdAt)}</p>
          <p className="content">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default EntradasUrl;
