import { Link } from '@remix-run/react';
import { formatDate } from '~/helpers';

const entrada = ({ entrada }) => {
  const entradaInfo = entrada.attributes;
  const { title, createdAt, content, image, url } = entradaInfo;
  return (
    <div className="blog-entrada">
      <div>
        <img
          src={image.data.attributes.url}
          alt={`Fotografía blog sobre ${title}`}
        />
      </div>
      <div className="content-wrapper">
        <h2>{title}</h2>
        <p className="fecha">{formatDate(createdAt)}</p>
        <p className="content">{content} </p>
        <Link to={`/entradas/${url}`} className="button">
          Ver Entrada
        </Link>
      </div>
    </div>
  );
};

export default entrada;
