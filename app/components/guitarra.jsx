import { Link } from '@remix-run/react';

const Guitarra = ({ guitarra }) => {
  const { name, description, price, image, url } = guitarra;

  const imageSelected = image.data.attributes.formats.small.url;

  return (
    <div className="product-item">
      <img src={imageSelected} alt={`Foto de la guitarra ${name}`} />
      <div className="product-info">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <Link to={`/guitarras/${url}`} className="button">
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
