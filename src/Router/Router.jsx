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
import BorrowedBooks from "../Pages/BorrowedBooks";
import AllBooksTable from "../Pages/AllBooksTable";
import AllBooksCard from "../Pages/AllBooksCard";
import UpdateBooks from "../Pages/UpdateBooks";
import AOS from "aos";
import "aos/dist/aos.css";
import OnlineRead from "../Pages/OnlineRead";
import Cart from "../Pages/Cart";
AOS.init();
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/books`, {
            credentials: "include",
          }),
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
          fetch(`${import.meta.env.VITE_API_URL}/books/${params.name}`, {
            credentials: "include",
          }),
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/borrowedBooks/:email",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/borrowed/${params?.email}`, {
            credentials: "include",
          }),
      },
      {
        path: "/allBooksTable",
        element: (
          <PrivateRoute>
            <AllBooksTable />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/books`, {
            credentials: "include",
          }),
      },
      {
        path: "/allBooksCard",
        element: (
          <PrivateRoute>
            <AllBooksCard />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/books`, {
            credentials: "include",
          }),
      },
      {
        path: "/updateBooks/:id",
        element: (
          <PrivateRoute>
            <UpdateBooks />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/update/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/onlineRead",
        element: <OnlineRead />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
