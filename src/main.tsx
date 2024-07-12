import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './routes/Register/Register.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import Login from './routes/Login/Login.tsx';
import Notes from './routes/Notes/Notes.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/hub",
  //   element: <Hub />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/notes",
    element: <Notes />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
