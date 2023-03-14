const Contenido = ({ contentData }) => {
  const { title, description, image } = contentData;

  return (
    <section>
      <style jsx="true">
        {`
          .contenido-grid {
            background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.8),
                rgba(0, 0, 0, 0.2)
              ),
              url(${image.data.attributes.url});
            background-size: cover;
            background-position: center center;
          }
        `}
      </style>
      <div className="contenedor">
        <div className="contenido-grid">
          <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contenido;
