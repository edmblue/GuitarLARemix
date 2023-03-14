import { useLoaderData, useOutletContext } from '@remix-run/react';
import { useState } from 'react';
import { getGuitarra } from '~/models/guitarras.server';
import Error from '../../components/error';

export function meta({ data }) {
  if (!data) {
    return {
      title: 'GuitarLA | Guitarra no encontrada',
    };
  }

  return {
    title: `GuitarLA | ${data.data[0].attributes.name}`,
    description: `Informacion detallada de la guitarra ${data.data[0].attributes.name}`,
  };
}

export async function loader({ params }) {
  const guitarInfo = await getGuitarra(params.guitarraUrl);

  if (guitarInfo?.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada',
    });
  }

  return guitarInfo;
}

const Guitarra = () => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  const { carrito, setCarrito } = useOutletContext();

  const guitarInfo = useLoaderData();

  const selectedGuitar = guitarInfo.data[0].attributes;

  const { name, description, price, image } = selectedGuitar;

  const selectedImage = image.data.attributes.url;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      setError(true);
      return;
    }

    const guitarraSeleccionada = {
      id: guitarInfo.data[0].id,
      name,
      price,
      selectedImage,
      cantidad,
    };

    if (carrito.some((producto) => producto.id == guitarraSeleccionada.id)) {
      setCarrito((carrito) => {
        return carrito.map((producto) => {
          if (producto.id == guitarraSeleccionada.id) {
            producto.cantidad = cantidad;
          }

          return producto;
        });
      });

      setCantidad(0);
      alert('Cantidad Actualizada');
      return;
    }
    setError(false);
    setCarrito((carrito) => [...carrito, guitarraSeleccionada]);
    setCantidad(0);
    alert('Articulo añadido');
  };

  return (
    <div>
      <div className="contenedor product-item">
        <div>
          <img src={selectedImage} alt={`Foto de la guitarra marca ${name}`} />
        </div>
        <div>
          <h2>{name}</h2>
          <p className="description">{description}</p>
          <p className="price">${price}</p>
          <form onSubmit={handleSubmit} className="formulario">
            {error && (
              <Error>
                <p>Cantidad Invalida</p>
              </Error>
            )}
            <label htmlFor="cantidad-guitarra">Cantidad</label>
            <select
              defaultValue={cantidad}
              onChange={(e) => setCantidad(+e.target.value)}
              id="cantidad-guitarra"
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="button" type="submit">
              Agregar al carrito
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Guitarra;
