import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Blob from './Component/Blob/Blob';
import Hero from './Component/Hero/Hero';
import HeroFloat from './Component/HeroFloat/HeroFloat';
import Preloader from './Component/Preloader/Preloader';
import Description from './Component/Description/Description'
import Projects from './Component/Projects/Projects';
import Blog from './Component/Blog/Blog';
import VideoPane from './Component/VideoPane/VideoPane';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Hamburger from './Component/Hamburger/Hamburger';
import "aos/dist/aos.css";
function App() {
  return (
    <div className="App">
      <Hamburger />
        <div style={{backgroundColor:'#FAFAFA', position:'relative'}}>
          <Preloader />
          <Header />
          <Hero />
          <Blob />
          <HeroFloat />
        </div>
          <Description />
          <Projects />
          <Blog />
          <VideoPane />
          <Contact />
          <Footer />
        
       
    </div>
  );
}

export default App;
