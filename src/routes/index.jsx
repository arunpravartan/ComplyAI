import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth } from 'hooks/useAuthContext';

// Project imports
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';

const AppRouter = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Optional loading state
  }

  // Dynamically choose routes
  const routes = user ? [...MainRoutes] : [...LoginRoutes];

  const router = createBrowserRouter(routes, { basename: import.meta.env.VITE_APP_BASE_NAME });
  return <RouterProvider router={router} />;
};

export default AppRouter;
