import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const MainLayout = () => (
  <>
    <AppBar />
    <hr />
    <Outlet />
  </>
);
