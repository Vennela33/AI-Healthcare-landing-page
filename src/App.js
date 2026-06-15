import React ,{useState,useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { getLandingContent } from "./api/Api";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Doctors from "./sections/Doctors/Doctors";
import Testimonials from "./sections/Testimonials/Testimonials";
import Hero from "./sections/Hero/Hero";
import FAQ from "./sections/FAQ/FAQ";
import Contact from "./sections/Contact/Contact";
import Statistics from "./sections/Statistics/Statistics";
import LandingPage from "./pages/LandingPage";
import Newsletter from "./sections/Newsletter/Newsletter";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import ApiData from "./api/data";

function App() {
    
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApiData />}/>
       {/* <Route path="/hero" element={<Hero  />} />
<Route path="/about" element={<About data={data} />} />
<Route path="/doctors" element={<Doctors data={data} />} />
<Route path="/faq" element={<FAQ data={data} />} />
<Route path="/services" element={<Services data={data} />} />
<Route path="/testmonial" element={<Testimonials data={data} />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/newsletter" element={<Newsletter />}/>  */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;