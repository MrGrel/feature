import { Navigate, useRoutes } from 'react-router-dom';
import { Header } from './layouts/header/header';
import { Product } from './pages/product';
import { Catalog } from './pages/catalog';

export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Header />,
      children: [
        { element: <Navigate to="catalog" />, index: true },
        {
          path: 'catalog',
          element: <Catalog />,
          children: [],
        },
        {
          path: 'catalog/product/:id',
          element: <Product />,
        },
      ],
    },
  ]);
  return routes;
};
