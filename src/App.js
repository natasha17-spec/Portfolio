import React from 'react';
import './App.css';
import Header from "./Blok1/Header";
import Main from "./Blok1/Main";
import Skills from "./Blok2/Skills";
import Slogan from "./Blok4/Slogan";
import Contacts from "./Blok5/Contacts";
import Footer from "./Blok6/Footer";
import Projects from "./Blok3/Projects";



function App() {
  return (
    <div className="App">
      <div className="portfolio">
          <Header />
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Contacts />
            <Footer/>
    </div>
    </div>

  );
}
export default App;
