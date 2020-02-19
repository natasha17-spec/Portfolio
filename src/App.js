import React from 'react';
import './App.css';
import Header from "./Blok1/Header/Header";
import Main from "./Blok1/Main/Main";
import Skills from "./Blok2/Skills";
import Slogan from "./Blok4/Slogan";
import Contacts from "./Blok5/Contacts";
import Footer from "./Blok6/Footer";
import NavMenu from "./Blok1/NavMenu/NavMenu";
import Project from "./Projects/Project/Project";
import Projects from "./Projects/Projects";



class App extends React.Component{
  state = {
    tasks: [
      {title: 'REACT', description: 'React — это библиотека JavaScript с открытым исходным кодом, которая используется для создания пользовательского интерфейса. Она была создана компанией Facebook и представлена разработчикам в 2013 году.'},
      {title: 'HTML', description: 'Стилем или CSS (Cascading Style Sheets, каскадные таблицы стилей) называется набор параметров форматирования, который применяется к элементам документа, чтобы изменить их внешний вид.'},
      {title: 'CSS', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'},
      {title: 'JS', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'},
      {title: 'JavaScript', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'},
      {title: 'JavaScript', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'}
    ],
    project:[
      {titleProject:"Social Network", descriptionProject:'OOP, React/React-Redux, Redux-thunk, API/Ajax, Deep copy vs shallow copy, Cookie, DAL'},
      {titleProject:"TodoList", descriptionProject:'React/React-Redux, Add Tasks, Add Todolist, Click Checkbox, API/Ajax'},
      {titleProject:"Portfolio", descriptionProject:'React, HTML, CSS, JS, Flexbox'},
      {titleProject:"Count", descriptionProject:'React, HTML, CSS, JS'},
      {titleProject:"Game", descriptionProject:'React, HTML, CSS, JS'},
    ]
  };
  render = () => {

    return (
        <div className="App">
          <div className="portfolio">
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
