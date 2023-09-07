import { Navigate, useRoutes } from "react-router-dom";
import { Header } from "./layouts/header";
import { Product } from "./pages/product";
import { Catalog } from "./pages/catalog";

export const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Header />,
      children: [
        { element: <Navigate to="catalog/1" />, index: true },
        {
          path: "catalog/:page",
          element: <Catalog />,
          children: [],
        },
        {
          path: "catalog/:page/product/:id",
          element: <Product />,
        },
      ],
    },
  ]);
  return routes;
};