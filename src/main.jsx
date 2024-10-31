import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';
import TrainersSection from './Components/TrainersSection/TrainersSection';
import BlogSection from './Components/BlogSection/BlogSection';
import ProgramsSection from './Components/ProgramsSection/ProgramsSection';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element: <Header />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/trainer",
        element: <TrainersSection />
      },

      {
        path: "/blogs",
        element: <BlogSection />,
      },
      {
        path: "/program",
        element: <ProgramsSection />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
