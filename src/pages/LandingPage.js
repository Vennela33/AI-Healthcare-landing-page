import React, { useEffect, useState } from "react";
import { getLandingContent } from "../api/Api";
import Newsletter from "../sections/Newsletter/Newsletter";
import Header from "../sections/Header/Header";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Statistics from "../sections/Statistics/Statistics";
import Services from "../sections/Services/Services";
import Testimonials from "../sections/Testimonials/Testimonials";
import FAQ from "../sections/FAQ/FAQ";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Doctors from "../sections/Doctors/Doctors";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";


function LandingPage() {
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

  const headerData = data.find(item => item.type === "header");
  const heroData = data.find(item => item.type === "hero");
  const aboutData = data.find(item => item.type === "about");
  const footerData = data.find(item => item.type === "footer");
  const statisticsData = data.filter(item => item.type === "stat");
  const servicesData = data.filter(item => item.type === "service");
  const testimonialsData = data.filter(item => item.type === "testimonial");
  const faqData = data.filter(item => item.type === "faq");
  const doctorsData = data.filter(item => item.type === "doctor");

  return (
    <>
      <Header data={headerData} />

      <Hero data={heroData} />

      <About data={aboutData} />

      <Statistics data={statisticsData} />

      <Services data={servicesData} />

      <Doctors data={doctorsData} /> 

      <Testimonials data={testimonialsData} />

      <FAQ data={faqData} />

      <Contact />

      <Newsletter />

      <Footer data={footerData} />
    </>
  );
}

export default LandingPage;