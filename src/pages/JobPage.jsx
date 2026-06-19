import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobPage = () => {
  const { id } = useParams(); // useParams is a hook that allows us to access the URL parameters
  const job = useLoaderData();

  return (
    <>
      <section>
        <div className="m-auto px-6 py-6 container">
          <Link
            to="/jobs"
            className="flex items-center text-indigo-500 hover:text-indigo-600"
          >
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="m-auto px-6 py-10 container">
          <div className="gap-6 grid grid-cols-1 md:grid-cols-7030 w-full">
            <main>
              <div
                className="bg-white shadow-md p-6 rounded-lg md:text-left text-center"
              >
                <div className="mb-4 text-gray-500">{job.type}</div>
                <h1 className="mb-4 font-bold text-3xl">
                  {job.title}
                </h1>
                <div
                  className="flex justify-center md:justify-start mb-4 text-gray-500 align-middle"
                >
                  <FaMapMarker className='mr-1 text-orange-700' />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white shadow-md mt-6 p-6 rounded-lg">
                <h3 className="mb-6 font-bold text-indigo-800 text-lg">
                  Job Description
                </h3>

                <p className="mb-4">
                  {job.description}
                </p>

                <h3 className="mb-2 font-bold text-indigo-800 text-lg">Salary</h3>

                <p className="mb-4">{job.salary}</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="mb-6 font-bold text-xl">Company Info</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">
                  {job.company.description}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="bg-indigo-100 my-2 p-2 font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="bg-indigo-100 my-2 p-2 font-bold">{job.company.contactPhone}</p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white shadow-md mt-6 p-6 rounded-lg">
                <h3 className="mb-6 font-bold text-xl">Manage Job</h3>
                <a
                  href="/add-job.html"
                  className="block bg-indigo-500 hover:bg-indigo-600 mt-4 px-4 py-2 rounded-full focus:shadow-outline focus:outline-none w-full font-bold text-white text-center"
                >Edit Job</a
                >
                <button
                  className="block bg-red-500 hover:bg-red-600 mt-4 px-4 py-2 rounded-full focus:shadow-outline focus:outline-none w-full font-bold text-white"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobPage;
