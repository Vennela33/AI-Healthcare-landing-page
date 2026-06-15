import React, { useEffect, useState } from "react";
import { getLandingContent } from "../api/Api";
import Newsletter from "../sections/Newsletter/Newsletter";
import Header from "../sections/Header/Header";
import Footer from "../sections/Footer/Footer";
import FAQ from "../sections/FAQ/FAQ";
import Contact from "../sections/Contact/Contact";
import Hero from "../sections/Hero/Hero";
import Doctors from "../sections/Doctors/Doctors";
import Services from "../sections/Services/Services";
import Testimonials from "../sections/Testimonials/Testimonials";
import About from "../sections/About/About";


function LandingPage({data}) {
  

  return (
    <>
      <Header data={data} />
     <Hero  data={data}/>
      <About data={data}/>
      <Services data={data}/>
      <Doctors data={data}/>
      <Testimonials data={data}/>
      <FAQ data={data}/>
      <Contact />
      <Newsletter /> 
      <Footer data={data} /> 
    </>
  );
}

export default LandingPage;