import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-10 bg-indigo-600'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl text-indigo-200'>
          Administrador de Pacientes de {''}{' '}
          <span className='text-white font-black'>Veterinaria</span>
        </h1>

        <nav className='flex gap-4'>
          <Link to='/admin' className='text-white  uppercase text-sm font-bold'>
            Pacientes
          </Link>
          <Link
            to='/perfil'
            className='text-white text-sm uppercase font-bold '
          >
            Perfil
          </Link>

          <button
            className='text-white text-sm uppercase font-bold'
            type='button'
          >
            Cerrar Sesión
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
