/* import { useState } from 'react' */
import { RouterProvider } from 'react-router-dom'
import  router  from './Router/index'
import './App.css'
import './Pages/SignUp/SignUp.jsx'
import './Pages/LogIn/LogIn.jsx'
import './Pages/Productos/Productos.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  )

}
export default App;