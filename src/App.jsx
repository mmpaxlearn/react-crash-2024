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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} /> // :id is a URL parameter that is a dynamic route
        <Route path='*' element={<NotFoundPage />} /> // '*' is a Catch-all route for 404 Not Found
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;