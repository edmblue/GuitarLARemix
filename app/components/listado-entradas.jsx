import Entrada from '~/components/entrada';

const ListadoEntradas = ({ entradasData }) => {
  return (
    <div className="contenedor">
      <h1 className="heading">Blog</h1>
      <div className="blog-grid">
        {entradasData.map((entrada) => (
          <Entrada key={entrada.id} entrada={entrada} />
        ))}
      </div>
    </div>
  );
};

export default ListadoEntradas;
