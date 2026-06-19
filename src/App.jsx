import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom';
import { jobLoader } from './dataloaders/jobLoader';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} /> // :id is a URL parameter that is a dynamic route
      <Route path='*' element={<NotFoundPage />} /> // '*' is a Catch-all route for 404 Not Found
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;

};

export default App;