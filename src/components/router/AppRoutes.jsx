import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppLayoutContainer from 'containers/Layout/AppLayoutContainer';

// Public route pages
const LoginPage = lazy(() => import('pages/LoginPage'));

// Private route pages
const DashboardPage = lazy(() => import('pages/DashboardPage'));
const CategoriesPage = lazy(() => import('pages/Categories'));
const DetailsPage = lazy(() => import('pages/DetailsPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));

// Define routes config here
const routes = [
  {
    path: '/',
    isLayoutRoute: true,
    element: <AppLayoutContainer />,
    children: [
      {
        path: '',
        element: <PrivateRoute component={<DashboardPage />} />,
      },
      {
        path: 'categories/:id',
        element: <PrivateRoute component={<CategoriesPage />} />,
      },
      {
        path: 'details/*',
        element: <PrivateRoute component={<DetailsPage />} />,
      },
      {
        path: 'search/*',
        element: <PrivateRoute component={<SearchPage />} />,
      },
    ],
  },
  {
    path: '/login',
    element: <PublicRoute component={<LoginPage />} />,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((nav, navI) => {
        // Nested routes
        if (nav?.children?.length) {
          // Render if layout route
          if (nav?.isLayoutRoute) {
            return (
              <Route key={`nav_${navI}`} element={nav.element}>
                {nav.children.map((subnav, subnavI) => {
                  return (
                    <Route
                      key={`subnav_${navI}_${subnavI}`}
                      path={subnav.path}
                      element={subnav.element}
                    />
                  );
                })}
              </Route>
            );
          }

          // Render if only nested route
          return (
            <Route key={`nav_${navI}`} path={nav.path} element={nav.element}>
              {nav.children.map((subnav, subnavI) => {
                return (
                  <Route
                    key={`subnav_${navI}_${subnavI}`}
                    path={subnav.path}
                    element={subnav.element}
                  />
                );
              })}
            </Route>
          );
        }

        // Direct route
        return (
          <Route key={`nav_${navI}`} path={nav.path} element={nav.element} />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
