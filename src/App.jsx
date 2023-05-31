import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './layout/paginas/Login';
import Registrar from './layout/paginas/Registrar';
import OlvidePassword from './layout/paginas/OlvidePassword';
import ConfirmarCuenta from './layout/paginas/ConfirmarCuenta';
import NuevoPassword from './layout/paginas/NuevoPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='registrar' element={<Registrar />} />
          <Route path='olvide-password' element={<OlvidePassword />} />
          <Route path='olvide-password/:token' element={<NuevoPassword />} />
          <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
