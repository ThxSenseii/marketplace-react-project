import { createBrowserRouter } from 'react-router-dom'

import Root from '../Layout/Root/index.jsx'
import Home from '../Pages/Home/Home.jsx'
import SignUp from '../Pages/SignUp/SignUp.jsx'
import LogIn from '../Pages/LogIn/LogIn.jsx'


const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
            path:'/SignUp',
            element: <SignUp />

        },
        {
          path:'/LogIn',
          element: <LogIn />

      }
      ]
    }
  ])


export default router