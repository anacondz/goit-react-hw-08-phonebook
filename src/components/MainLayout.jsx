import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const MainLayout = () => (
  <>
    <AppBar />
    <main>
      <section>
        <Outlet />
      </section>
    </main>
  </>
);
