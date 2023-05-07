import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Root } from './Components/root/root';
import Home from './Pages/home';
import About from './Pages/about';
import Services from './Pages/services/services';
import Servicesdetail from './Pages/services/services-detail';
import Projects from './Pages/projects/projects';
import ProjectDetail from './Pages/projects/projectDetail';
import Contact from './Pages/contact';
import Error from './Pages/error';
import { Footer } from './Components/footer/footer';
import { Info } from './Components/info/info';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<Servicesdetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/projectDetail" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <div>
      <Info />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
