import React from 'react';
import './App.css';
import Header from "./Blok1/Header/Header";
import Main from "./Blok1/Main/Main";
import Skills from "./Blok2/Skills";
import Slogan from "./Slogan/Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";
import Particles from "react-particles-js";



class App extends React.Component{
  state = {
    tasks: [
      {title: 'REACT', description: 'React — это библиотека JavaScript с открытым исходным кодом, которая используется для создания пользовательского интерфейса. Она была создана компанией Facebook и представлена разработчикам в 2013 году.'},
      {title: 'HTML', description: 'Стилем или CSS (Cascading Style Sheets, каскадные таблицы стилей) называется набор параметров форматирования, который применяется к элементам документа, чтобы изменить их внешний вид.'},
      {title: 'CSS', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'},
      {title: 'TYPESCRIPT', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'},
      {title: 'JS', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'},
      {title: 'REACT/REDUX', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'}
    ],
    project:[
      {titleProject:"Social Network", descriptionProject:'React/React-Redux, Thunk, API/Ajax, Cookie'},
      {titleProject:"TodoList", descriptionProject:'React/React-Redux,Thunk, API/Ajax, Type Script'},
      {titleProject:"Portfolio", descriptionProject:'React, HTML, CSS, JS, Flexbox'},
      {titleProject:"Simple Count", descriptionProject:'React,Redux, HTML, CSS, JS'},
      {titleProject:"Advanced Count", descriptionProject:'React, Redux, HTML, CSS, JS'},
    ]
  };

  render = () => {
   const params = {
      particles: {
        number: {
          value:450
        },
        color: {
          value: '#5ec5e1'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0.3,
            color: '#5ec5e1'
          },
          "polygon": {
            "nb_sides": 6 /* количество сторон полигона (type: polygon), от 3 до 12 */
          },
          image: {
            src: 'http://www.iconsdb.com/icons/preview/white/contacts-xxl.png'
          }
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: {
            enable: false,
            speed: 3
          }
        },
        size: {
          value: 3,
          random: false,
          anim: {
            enable: false,
            speed: 40
          }
        },
        line_linked: {
          enable: true,
          distance: 140,
          color: '#fff',
          width: 1
        },
        move: {
          enable: true,
          speed: 8,
          direction: 'none',
          "bounce": false
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: false,
            mode: 'push'
          }
        },
        modes: {
          repulse: {
            distance: 50,
            duration: 0.4
          },
          bubble: {
            distance: 100,
            size: 10
          }
        }
      }
    };
    return (
        <div className="App">
          <div className="portfolio">
            <Particles className="particles" params={params}/>
            <Header tasks={this.state.tasks}/>
            <Main/>
            <Skills tasks={this.state.tasks}/>
            <Projects project={this.state.project}/>
            <Slogan/>
            <Contacts/>
            <Footer/>
          </div>
        </div>
    );
  }
}
export default App;
