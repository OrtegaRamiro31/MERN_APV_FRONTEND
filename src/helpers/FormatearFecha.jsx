// formatear fecha
const formatearFecha = (fecha) => {
  let nuevaFecha;
  if (fecha.includes('T00:00:00.000Z')) {
    nuevaFecha = new Date(fecha.split('T')[0].split('-'));
  } else {
    nuevaFecha = new Date(fecha);
  }
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  console.log(nuevaFecha.toLocaleDateString('es-ES', opciones));
  return nuevaFecha.toLocaleDateString('es-ES', opciones);
};

export default formatearFecha;
