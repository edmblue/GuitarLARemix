import Guitarra from '../components/guitarra';

const ListadoGuitarras = ({ guitarrasList }) => {
  return (
    <div className="contenedor">
      <h1 className="heading">Nuestra Coleccion</h1>
      <div className="products-grid">
        {guitarrasList.map((guitarra) => {
          return <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />;
        })}
      </div>
    </div>
  );
};

export default ListadoGuitarras;
