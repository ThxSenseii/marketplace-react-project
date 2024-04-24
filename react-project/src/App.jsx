/* import { useState } from 'react' */
import { RouterProvider } from 'react-router-dom'
import  router  from './Router/index'
import './App.css'
// import '../src/Pages/LogIn/LogIn'
// import '../src/Pages/SignUp/SignUp'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
/*  */