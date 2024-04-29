import { RouterProvider } from 'react-router-dom'
import  router  from './Router/index'
import './App.css'
import './Pages/SignUp/SignUp.jsx'
import './Pages/LogIn/LogIn.jsx'
import './Pages/Productos/Productos.jsx'

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  )

}
export default App;

/* import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importamos BrowserRouter como Router
import RouterIndex from './Router/index'; // Importamos las rutas de tu aplicación
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <RouterIndex />
      </div>
    </Router>
  );
}

export default App; */
