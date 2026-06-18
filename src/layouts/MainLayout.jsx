// Outlet is used to render the child routes defined in the router configuration
import { Outlet } from 'react-router-dom'; 
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
