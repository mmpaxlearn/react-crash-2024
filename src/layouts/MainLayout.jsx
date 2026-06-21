// Outlet is used to render the child routes defined in the router configuration
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className='h-20' />
      <Outlet />
      <ToastContainer /> {/* // Not working properly - somehow it quickly disappears. */}
    </>
  );
};

export default MainLayout;
