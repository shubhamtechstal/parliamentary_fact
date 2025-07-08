import { lazy, useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation, Outlet } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppLayoutContainer from 'containers/Layout/AppLayoutContainer';
import NotFoundPage from 'pages/NotFoundPage';
import ParliamentPerformancePage from 'pages/ParliamentPerformancePage';
import MPsPerformancePage from 'pages/MPsPerformancePage';
import HomePage from 'pages/HomePage';
import MpsConstituencyPage from 'pages/MpsConstituencyPage';
import { RajyaSabhaPerformance } from 'components/pmt_performance/rajya-sabha/RajyaSabhaPerformance';
import LokSabhaQuestionTopics from 'components/pmt_performance/details/question/QuestionTopics';
import ParliamentPerformanceLayout from 'components/pmt_performance/ParliamentPerformanceLayout';
import LokSabhaQuestionContainer from 'components/pmt_performance/details/question';
import LokSabhaAdjiurnment from 'components/pmt_performance/details/LokSabhaAdjiurnment';
import LokSabhaWalkout from 'components/pmt_performance/details/LokSabhaWalkout';
import LokSabhaInTheWell from 'components/pmt_performance/details/LokSabhaInTheWell.jsx';
import LokSabhaQuoramBell from 'components/pmt_performance/details/LokSabhaQuoramBell';
import LokSabhaInterruption from 'components/pmt_performance/details/LokSabhaInterruption';
import LokSabhaNotRecorded from 'components/pmt_performance/details/LokSabhaNotRecorded';
import LokSabhaDebates from 'components/pmt_performance/details/LokSabhaDebates';
import LokSabhaPrivateMemberBills from 'components/pmt_performance/details/LokSabhaPrivateMemberBills';
import LokSabhaAttandance from 'components/pmt_performance/details/LokSabhaAttandance';
import YourMpsPage from 'pages/YourMpsPage';

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
const MpDetailsPage = lazy(() => import('pages/MpDetailsPage'));

const routes = [
  {
    path: '/',
    isLayoutRoute: true,
    element: <AppLayoutContainer />,
    children: [
      { path: '', element: <PrivateRoute component={<HomePage />} /> },
      { path: 'news', element: <PrivateRoute component={<DashboardPage />} /> },
      {
        path: 'news/categories/:id',
        element: <PrivateRoute component={<CategoriesPage />} />,
      },
      {
        path: 'mps-details/:mpId',
        element: <PrivateRoute component={<MpDetailsPage />} />,
      },
      {
        path: 'news/details/*',
        element: <PrivateRoute component={<DetailsPage />} />,
      },
      {
        path: 'news/search/*',
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
      {
        path: 'mps-public-rating',
        element: <PrivateRoute component={<MpsPublicRating />} />,
      },
      {
        path: 'mps-public-rating-list',
        element: <PrivateRoute component={<MpsRatingAllList />} />,
      },
      {
        path: 'rate-your-mp',
        element: <PrivateRoute component={<RateYourMp />} />,
      },
      {
        path: 'newsletter/loksabha/*',
        element: <PrivateRoute component={<NewsLetter />} />,
      },
      {
        path: 'parliament-performance/',
        element: <PrivateRoute component={<ParliamentPerformanceLayout />} />,
        children: [
          {
            path: '',
            element: <PrivateRoute component={<ParliamentPerformancePage />} />,
          },
          {
            path: 'lok-sabha-performance',
            element: <PrivateRoute component={<Outlet />} />,
            children: [
              {
                path: '',
                element: (
                  <PrivateRoute component={<ParliamentPerformancePage />} />
                ),
              },
              // { path: 'questions-details', element: <PrivateRoute component={<LokSabhaQuestionTopics />} /> },
              {
                path: 'lok-sabha-productivity',
                element: (
                  <PrivateRoute component={<ParliamentPerformancePage />} />
                ),
              },
              {
                path: 'lok-sabha-attandance',
                element: (
                  <PrivateRoute component={<LokSabhaAttandance />} />
                ),
              },
              {
                path: 'lok-sabha-question',
                element: (
                  <PrivateRoute component={<LokSabhaQuestionContainer />} />
                ),
              },
              {
                path: 'lok-sabha-debates',
                element: <PrivateRoute component={<LokSabhaDebates />} />,
              },
              {
                path: 'lok-sabha-private-member-bills',
                element: (
                  <PrivateRoute component={<LokSabhaPrivateMemberBills />} />
                ),
              },
              {
                path: 'lok-sabha-adjourned',
                element: <PrivateRoute component={<LokSabhaAdjiurnment />} />,
              },
              {
                path: 'lok-sabha-walkout',
                element: <PrivateRoute component={<LokSabhaWalkout />} />,
              },
              {
                path: 'lok-sabha-in-the-well',
                element: <PrivateRoute component={<LokSabhaInTheWell />} />,
              },
              {
                path: 'lok-sabha-interruptions',
                element: <PrivateRoute component={<LokSabhaInterruption />} />,
              },
              {
                path: 'lok-sabha-quoram-bell',
                element: <PrivateRoute component={<LokSabhaQuoramBell />} />,
              },
              {
                path: 'lok-sabha-not-recorded',
                element: <PrivateRoute component={<LokSabhaNotRecorded />} />,
              },
              {
                path: 'govt-bill',
                element: (
                  <PrivateRoute component={<LokSabhaQuestionTopics />} />
                ),
              },
            ],
          },
          {
            path: 'rajya-sabha-performance',
            element: <PrivateRoute component={<RajyaSabhaPerformance />} />,
          },
        ],
      },
      {
        path: 'mps-performance',
        element: <PrivateRoute component={<MPsPerformancePage />} />,
      },
      {
        path: 'your-mps',
        element: <PrivateRoute component={<YourMpsPage />} />,
      },
      {
        path: 'mps-constituency',
        element: <PrivateRoute component={<MpsConstituencyPage />} />,
      },
    ],
  },
  { path: '/login', element: <PublicRoute component={<LoginPage />} /> },
];

const AppRoutes = () => {
  const location = useLocation();
  const Wrapper = ({ children }) => {
    useLayoutEffect(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }, [location.pathname]);
    return children;
  };

  const renderRoutes = (routesArr) =>
    routesArr.map(({ path, element, children }, index) => (
      <Route key={index} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ));

  return (
    <Wrapper>
      <Routes>
        {renderRoutes(routes)}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Wrapper>
  );
};

export default AppRoutes;
