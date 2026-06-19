// Outlet is used to render the child routes defined in the router configuration
import { Outlet } from 'react-router-dom'; 
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className='h-20'/>
      <Outlet />
    </>
  );
};

export default MainLayout;
