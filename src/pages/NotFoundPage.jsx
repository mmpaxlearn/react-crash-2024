import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className='flex flex-col justify-center items-center h-96 text-center'>
      <FaExclamationTriangle className='mb-4 text-yellow-400 text-6xl' />
      <h1 className='mb-4 font-bold text-6xl'>404 Not Found</h1>
      <p className='mb-5 text-xl'>This page does not exist</p>
      <Link
        to='/'
        className='bg-indigo-700 hover:bg-indigo-900 mt-4 px-3 py-2 rounded-md text-white'
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;