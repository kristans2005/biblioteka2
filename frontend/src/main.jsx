import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css'

import AddBookButton from './pages/components/buttons/AddBookButton.jsx';

import App from './pages/App.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import AddNewBook from './pages/AddNewBook.jsx';
import Logout from './pages/Logout.jsx';
import ErrorPage from './pages/Error-page.jsx';
import Books from './pages/Books.jsx';
import Cart from './pages/Cart.jsx';
import Self from './pages/Self.jsx';

  

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/books/add",
    element: <AddNewBook />,
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/books/self/:id',
    element: <Self />,
  },
])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
