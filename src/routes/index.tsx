import { BrowserRouter, Routes, Route } from 'react-router';

import { HomePage } from '@/pages';

import { AppLayout } from '@/pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
