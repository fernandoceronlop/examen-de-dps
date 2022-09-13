import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import Formulario from './components/formulario';
import Inicio from './components/inicio';
import NavBar11 from './layouts/navbar';
import Conversor from './components/conversor';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBar11 /> }>
    <Route index element={ <Inicio /> } />
    <Route path='conversor' element={ <Conversor /> } />
    <Route path='formulario' element={ <Formulario /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;
