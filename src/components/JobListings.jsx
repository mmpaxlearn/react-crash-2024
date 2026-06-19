import { useState, useEffect } from "react"; // isEffect - is a side-effect - use to fetch data when the component mounts
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true); // loading state - to show a loading spinner while fetching data


  useEffect(() => {
    const fetchJobs = async () => {
      // json-server v1.xx uses pagination - _page and _per_page (_limit is deprecated)
      let apiUrl = isHome ? '/api/jobs?_page=1&_per_page=3' : '/api/jobs?_page=1';

      try {
        const res = await fetch(apiUrl);
        const jobPage = await res.json();

        setJobs(jobPage.data);

      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 font-bold text-indigo-500 text-3xl text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading
          ? (<Spinner loading={loading} />)
          : (
            <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          )}
      </div>
    </section>
  );
};

export default JobListings;
