import { createBrowserRouter, redirect } from 'react-router-dom'

import Root from '../Layout/Root/index.jsx'
import Home from '../Pages/Home/Home.jsx'
import SignUp from '../Pages/SignUp/SignUp.jsx'
import LogIn from '../Pages/LogIn/LogIn.jsx'
import User from '../Pages/User/User'


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
          element: <LogIn />,
        },
        {
          path:'/User',
          element: <User />,
          loader: () => {
            if(!localStorage.getItem("token")) {
              return redirect("/LogIn");
            } else {
              return null;
            }
          }
        }
      ]
    }
  ]);


export default router