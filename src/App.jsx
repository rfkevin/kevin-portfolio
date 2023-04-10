import React from 'react';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About';
import Experience from './component/Experience/Experience';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Portfolio from './component/portfolio/Portfolio';
import Services from './component/services/Services';
import Study from './component/study/study';

const App = () => {
  return (
    <>
      <Header />
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Study/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
