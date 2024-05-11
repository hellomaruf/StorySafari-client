import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import AddBooks from "../Pages/AddBooks";
import PrivateRoute from "./PrivateRoute";
import CategoryCards from "../Pages/CategoryCards";
import BookDetails from "../Pages/BookDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/books`),
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
        path: "/addBooks",
        element: (
          <PrivateRoute>
            <AddBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:name",
        element: <CategoryCards />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/books/${params.name}`),
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`),
      },
    ],
  },
]);
