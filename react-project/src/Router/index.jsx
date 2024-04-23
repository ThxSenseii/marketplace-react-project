import { createBrowserRouter } from 'react-router-dom'

import Root from '../Layout/Root/index.jsx'
// import Home from '../Pages/Home/Home'
import SignUp from '../Pages/SignUp/SignUp.jsx'


const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        // {
        //   path: '',
        //   element: <Home />
        // },
        {
            path:'/SignUp',
            element: <SignUp />

        }
      ]
    }
  ])


export default router