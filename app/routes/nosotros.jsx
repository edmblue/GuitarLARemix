import { useLoaderData } from 'react-router';
import { getNosotrosData } from '~/models/nosotros.server';
import Styles from '~/styles/nosotros.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: Styles,
    },
  ];
}

export function meta() {
  return {
    title: 'GuitarLA - Nosotros',
    description: 'Descripción de nuestra ideología como empresa',
  };
}

export async function loader() {
  const nosotrosData = await getNosotrosData();

  return nosotrosData;
}

const Nosotros = () => {
  const nosotrosData = useLoaderData();
  const nosotrosContent = nosotrosData.data.attributes;

  const { content, title, image } = nosotrosContent;

  return (
    <main className="nosotros">
      <div className="contenedor">
        <div>
          <img src={image.data.attributes.url} alt="Imagen sección Nosotros" />
        </div>
        <div>
          <h1 className="heading">{title}</h1>
          <p className="content">{content}</p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
