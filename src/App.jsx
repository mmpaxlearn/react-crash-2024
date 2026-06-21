import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom';
import { jobLoader } from './dataloaders/jobLoader';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {
  //Add new Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Contet-type': 'applicatin/json'
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  //Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });

    return;
  };

  //Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Contet-type': 'applicatin/json'
      },
      body: JSON.stringify(job),
    });

    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />

        <Route path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />

        {/* :id is a URL parameter that is a dynamic route */}
        <Route path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        {/* '*' is a Catch-all route for 404 Not Found */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;