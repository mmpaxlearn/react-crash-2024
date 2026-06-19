import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {

  const linkClass = ({ isActive }) => isActive
    ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

  return (
    <>
      <nav className="z-50 fixed bg-indigo-700 border-indigo-500 border-b w-full">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex flex-1 justify-center md:justify-start items-center md:items-stretch"
            >
              {/* Logo */}
              <NavLink className="flex items-center mr-4 shrink-0" to="/">
                <img
                  className="w-auto h-10"
                  src={logo}
                  alt="React Jobs"
                />
                <span className="hidden md:block ml-2 font-bold text-white text-2xl">
                  React Jobs
                </span>
              </NavLink>

              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink
                    to="/"
                    className={linkClass}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/jobs"
                    className={linkClass}
                  >
                    Jobs
                  </NavLink>

                  <NavLink
                    to="/add-job"
                    className={linkClass}
                  >
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar