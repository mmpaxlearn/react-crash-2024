import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  } else {
    description = job.description;
  }

  return (
    <div className="relative bg-white shadow-md rounded-xl">
      <div className="p-4">
        <div className="mb-6">
          <div className="my-2 text-gray-600">{job.type}</div>
          <h3 className="font-bold text-xl">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="mb-5 text-indigo-500 hover:text-indigo-600"
        >
          {showFullDescription ? 'Show Less' : 'Read More'}
        </button>

        <h3 className="mb-2 text-indigo-500">{job.salary} / Year</h3>

        <div className="mb-5 border border-gray-100"></div>

        <div className="flex lg:flex-row flex-col justify-between mb-4">
          <div className="mb-3 text-orange-700">
            <FaMapMarker className="inline mr-1 mb-1 text-lg" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg h-[36px] text-white text-sm text-center"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
