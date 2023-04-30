import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home.jsx';
import HousingInfo from './pages/HousingInfo';
import About from './pages/About';
import Error from './pages/Error';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "housing-info/:housingId",
    element: <HousingInfo />,
  },
  {
    path: "about",
    element: <About />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id='main-page-rendering'>
      <RouterProvider router={router} />
    </div>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
