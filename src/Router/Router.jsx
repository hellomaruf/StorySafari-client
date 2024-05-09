import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import AddBooks from "../Pages/AddBooks";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: '/addBooks',
        element: <AddBooks/>
      }
    ],
  },
]);
