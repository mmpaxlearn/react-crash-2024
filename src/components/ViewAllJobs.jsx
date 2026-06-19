import { Link } from 'react-router-dom';

const ViewAllJobs = () => {
  return (
    <section className="m-auto my-10 px-6 max-w-lg">
      <Link
        to="/jobs"
        className="block bg-black hover:bg-gray-700 px-6 py-4 rounded-xl text-white text-center"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
