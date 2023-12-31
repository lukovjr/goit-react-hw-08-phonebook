import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 15px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};