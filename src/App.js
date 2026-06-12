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

function App() {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      fetchContent();
    }, []);
  
    const fetchContent = async () => {
      try {
        const result = await getLandingContent();
        setData(result);
      } catch (err) {
        console.error(err);
        setError("Unable to load content");
      } finally {
        setLoading(false);
      }
    };
    if (loading) return <Loader />;
      if (error) return <ErrorMessage message={error} />;
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage data={data}/>}/>
        <Route path="#hero" element={<Hero />}/>
        <Route path="#about" element={<About />}/>
        <Route path="#doctors" element={<Doctors />}/>
        <Route path="#faq" element={<FAQ />}/>
        <Route path="#services" element={<Services />}/>
        <Route path="#testmonial" element={<Testimonials />}/>
        <Route path="#contact" element={<Contact />}/>
        <Route path="#newsletter" element={<Newsletter />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;