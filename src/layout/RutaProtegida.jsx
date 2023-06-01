import { Outlet, Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if (cargando) return 'cargando...';

  return (
    <>
      <h1>RutaProtegida</h1>

      <Header />
      {auth?._id ? <Outlet /> : <Navigate to='/' />}
      <Footer />
    </>
  );
};

export default RutaProtegida;
