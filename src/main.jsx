import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './Root';
import Home from './Home';
import Redux from './redux file/Redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut></RootLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/redux",
        element: <Redux></Redux>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
