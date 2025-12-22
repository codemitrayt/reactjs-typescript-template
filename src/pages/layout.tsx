import { Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
