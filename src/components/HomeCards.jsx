import { Link } from 'react-router-dom';
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="m-auto container-xl lg:container">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 p-4 rounded-lg">
          <Card>
            <h2 className="font-bold text-2xl">For Developers</h2>
            <p className="mt-2 mb-4">
              Find your dream React job from our curated listings
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black hover:bg-gray-700 px-4 py-2 rounded-lg text-white"
            >
              Browse Jobs
            </Link>
          </Card>

          <Card bg="bg-indigo-100">
            <h2 className="font-bold text-2xl">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg text-white"
            >
              Add Job
            </Link>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default HomeCards;