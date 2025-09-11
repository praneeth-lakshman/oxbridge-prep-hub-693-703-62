import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import MobileDebugger from './MobileDebugger';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <MobileDebugger />
    </div>
  );
};

export default Layout;