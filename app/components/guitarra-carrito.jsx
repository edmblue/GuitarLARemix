import { useOutletContext } from '@remix-run/react';

const GuitarraCarrito = ({ articulo }) => {
  const { handleCantidad, handleEliminar } = useOutletContext();

  const { id, name, price, cantidad, selectedImage } = articulo;

  return (
    <div className="product-grid">
      <div className="img-container">
        <img src={selectedImage} alt={`Foto de la guitara ${name}`} />
      </div>
      <div>
        <p className="name">{name}</p>
        <div>
          <label htmlFor="cantidad-guitarra">Cantidad</label>
          <select
            defaultValue={cantidad}
            onChange={(e) => handleCantidad(e.target.value, id)}
            id="cantidad-guitarra"
            className="select-guitarra"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <p className="price">${price}</p>
        <p className="subtotal">
          Subtotal $ <span>{`${price * cantidad}`}</span>
        </p>
        <button onClick={() => handleEliminar(id)} className="btn-eliminar">
          Eliminar Producto
        </button>
      </div>
    </div>
  );
};

export default GuitarraCarrito;
