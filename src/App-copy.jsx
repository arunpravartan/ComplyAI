export default function App() {
    return (
      <AuthProvider>
        <ThemeCustomization>
          <ScrollTop>
            <AppRoutes />
          </ScrollTop>
        </ThemeCustomization>
      </AuthProvider>
    );
}  