import { Toaster } from 'sonner';

import { AppRoutes } from '@/routes';
import { ThemeProvider } from '@/providers';

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Toaster position="bottom-right" closeButton={true} />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
