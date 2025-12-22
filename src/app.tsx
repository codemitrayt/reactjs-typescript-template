import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AppRoutes } from '@/routes';
import store, { persistor } from '@/store';
import { ThemeProvider } from '@/providers';

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Toaster position="bottom-right" closeButton={true} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
