import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Main/HomePage";

export const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
];
