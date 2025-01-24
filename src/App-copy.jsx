
import { RouterProvider } from 'react-router-dom';

// project import
import AppRouter from 'routes/index-copy';
import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';

export default function App() {
    return (
      <AuthProvider>
        <ThemeCustomization>
          <ScrollTop>
          <RouterProvider router={AppRouter()} />
          </ScrollTop>
        </ThemeCustomization>
      </AuthProvider>
    );
}  

