import { useState } from 'react';
import Alerta from './Alerta';
import usePacientes from '../hooks/usePacientes';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [alerta, setAlerta] = useState({});

  const { guardarPaciente } = usePacientes();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true,
      });

      return;
    }

    setAlerta({});
    guardarPaciente({ nombre, propietario, email, fecha, sintomas });
  };

  const { msg } = alerta;

  return (
    <>
      <p className='text-lg text-center mb-10'>
        Añade tus pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form
        className='bg-white py-10 px-5 mb-5 lg:mb-0 shadow-md rounded-md'
        onSubmit={handleSubmit}
      >
        <div className='mb-5'>
          <label htmlFor='nombre' className='text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            id='nombre'
            type='text'
            placeholder='Nombre de la Mascota'
            className='my-auto border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='propietario'
            className='text-gray-700 uppercase font-bold'
          >
            Nombre Propietario
          </label>
          <input
            id='propietario'
            type='text'
            placeholder='Nombre de la Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='text-gray-700 uppercase font-bold'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='fecha' className='text-gray-700 uppercase font-bold'>
            Fecha Alta
          </label>
          <input
            id='fecha'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='text-gray-700 uppercase font-bold'
          >
            Síntomas
          </label>
          <textarea
            id='sintomas'
            placeholder='Describe los Síntomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type='submit'
          value='Agregar Paciente'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
        />
      </form>
      {msg && <Alerta alerta={alerta} />}
    </>
  );
};

export default Formulario;
