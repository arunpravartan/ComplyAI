import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainDashboard from 'layout/MainDashboard';
import Dashboard1 from 'components/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainDashboard/>,
  children: [
      {
      path: '/',
      element: <Dashboard1 />
    },
  ]
  // children: [
  //   {
  //     path: '/',
  //     element: <DashboardDefault />
  //   },
  //   {
  //     path: '/dashboard',
  //     element: <Dashboard1/>
  //   },
  //   {
  //     path: 'color',
  //     element: <Color />
  //   },
  //   {
  //     path: 'dashboard',
  //     children: [
  //       {
  //         path: 'default',
  //         element: <DashboardDefault />
  //       }
  //     ]
  //   },
  //   {
  //     path: 'sample-page',
  //     element: <SamplePage />
  //   },
  //   {
  //     path: 'shadow',
  //     element: <Shadow />
  //   },
  //   {
  //     path: 'typography',
  //     element: <Typography />
  //   }
  // ]
};

export default MainRoutes;
