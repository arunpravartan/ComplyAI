// project import
import ThemeCustomization from 'themes';

import AuthProvider from 'hooks/useAuthContext';

import ScrollTop from 'components/ScrollTop';

import AppRouter from 'routes';
// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  return (
    <AuthProvider>
      <ThemeCustomization>
        <ScrollTop>
          <AppRouter />
        </ScrollTop>
      </ThemeCustomization>
    </AuthProvider>
  );
}
