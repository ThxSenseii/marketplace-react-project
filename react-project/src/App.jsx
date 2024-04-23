/* import { useState } from 'react' */
import { RouterProvider } from 'react-router-dom'
import  router  from './Router/index'
import './App.css'
import '/home/reboot/code/marketplace-react-project/react-project/src/Pages/SignUp/SignUp.jsx'
import '/home/reboot/code/marketplace-react-project/react-project/src/Pages/LogIn/LogIn.jsx'

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