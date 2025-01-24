import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth, AuthProvider } from './AuthProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Optional loading state
  }

  // Define unauthenticated routes
  const publicRoutes = createBrowserRouter([
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '*', element: <Login /> }, // Redirect to login for unmatched routes
  ]);

  // Define authenticated routes
  const privateRoutes = createBrowserRouter([
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/profile', element: <Profile /> },
    { path: '/login', element: <Login /> }, // Login still accessible
    { path: '*', element: <Dashboard /> }, // Redirect to dashboard for unmatched routes
  ]);

  return <RouterProvider router={isAuthenticated ? privateRoutes : publicRoutes} />;
};
