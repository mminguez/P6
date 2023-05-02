import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './routes/Hero';
import About from './routes/About';
import Fiche from './routes/Fiche';
import NotFound from './routes/NotFound';
import './index.css'

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "home/",
        element: <Home />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "fiche/:ficheId",
        element: <Fiche />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
