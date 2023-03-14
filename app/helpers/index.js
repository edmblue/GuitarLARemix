export const formatDate = (date) => {
  const fecha = new Date(date);
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  return fecha.toLocaleString('es-ES', opciones);
};
