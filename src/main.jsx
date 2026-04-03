import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Login from './Login'
import Home from './Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Notfound from './Notfound.jsx'
import Increment from './increment.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Notfound/>
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<Notfound/>

  },
  {
    path:"/app",
    element:<App/>
  },
  {
    path:"/counter",
    element:<Increment/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider  router={router}/>
  </StrictMode>,
)
