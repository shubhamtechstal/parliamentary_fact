import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppLayoutContainer from 'containers/Layout/AppLayoutContainer';
import ParliamentAttendancePage from 'pages/ParliamentAttendancePage';
import NotFoundPage from 'pages/NotFoundPage';
import ParliamentPerformancePage from 'pages/ParliamentPerformancePage';

// Public route pages
const LoginPage = lazy(() => import('pages/LoginPage'));

// Private route pages
const DashboardPage = lazy(() => import('pages/DashboardPage'));
const CategoriesPage = lazy(() => import('pages/Categories'));
const DetailsPage = lazy(() => import('pages/DetailsPage'));
const SearchPage = lazy(() => import('pages/SearchPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const PrivacyPolicy = lazy(() => import('pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('pages/TermsAndConditions'));
const ContactPage = lazy(() => import('pages/ContactPage'));
const AdvertiseWithUs = lazy(() => import('pages/AdvertiseWithUs'));
const MpsPublicRating = lazy(() => import('pages/MpsPublicRating'));
const MpsRatingAllList = lazy(() => import('pages/MpsRatingAllList'));
const RateYourMp = lazy(() => import('pages/RateYourMp'));
const NewsLetter = lazy(() => import('pages/NewsLetter'));

// Define routes config here
const routes = [
  {
    path: '/',
    element: <Navigate to="/news" replace />,
  },
  {
    path: '/news',
    isLayoutRoute: true,
    element: <AppLayoutContainer />,
    children: [
      {
        path: '/news',
        element: <PrivateRoute component={<DashboardPage />} />,
      },
      {
        path: '/news/categories/:id',
        element: <PrivateRoute component={<CategoriesPage />} />,
      },
      {
        path: '/news/details/*',
        element: <PrivateRoute component={<DetailsPage />} />,
      },
      {
        path: '/news/search/*',
        element: <PrivateRoute component={<SearchPage />} />,
      },
      {
        path: 'about-us/*',
        element: <PrivateRoute component={<AboutPage />} />,
      },
      {
        path: 'privacy-policy',
        element: <PrivateRoute component={<PrivacyPolicy />} />,
      },
      {
        path: 'terms-and-conditions',
        element: <PrivateRoute component={<TermsAndConditions />} />,
      },
      {
        path: 'contact-us',
        element: <PrivateRoute component={<ContactPage />} />,
      },
      {
        path: 'advertise-with-us',
        element: <PrivateRoute component={<AdvertiseWithUs />} />,
      },
      // {
      //   path: 'mps-public-rating',
      //   element: <PrivateRoute component={<MpsPublicRating/>} />,
      // },
      // {
      //   path: 'mps-public-rating-list',
      //   element: <PrivateRoute component={<MpsRatingAllList/>} />,
      // },
      {
        path: 'rate-your-mp',
        element: <PrivateRoute component={<RateYourMp/>} />,
      },
      {
        path: 'newsletter/loksabha/*',
        element: <PrivateRoute component={<NewsLetter/>} />,
      },
      {
        path: 'parliament-performance-attendance',
        element: <PrivateRoute component={<ParliamentAttendancePage/>} />,
      },
      {
        path: 'parliament-performance',
        element: <PrivateRoute component={<ParliamentPerformancePage/>} />,
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
       <Route path="*" element={<NotFoundPage />} />
       
    </Routes>
  );
};

export default AppRoutes;
