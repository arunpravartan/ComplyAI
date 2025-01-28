import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import Loadable from 'components/Loadable';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = [
  {
    path: '/',
    element: <AuthLogin />
  },
  {
    path: '/login',
    element: <AuthLogin />
  },
  {
    path: '/register',
    element: <AuthRegister />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

export default LoginRoutes;
