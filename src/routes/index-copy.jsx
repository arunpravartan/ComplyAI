import { createBrowserRouter } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider'; // Adjust the path as necessary

// Project imports
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';

const AppRouter = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Optional loading state
  }

  // Dynamically choose routes
  const routes = isAuthenticated ? [MainRoutes] : [LoginRoutes];

  return createBrowserRouter(routes, { basename: import.meta.env.VITE_APP_BASE_NAME });
};

export default AppRouter;
