import React from 'react';
import './App.css';
import Header from "./Blok1/Header/Header";
import Main from "./Blok1/Main/Main";
import Skills from "./Blok2/Skills";
import Slogan from "./Blok4/Slogan";
import Contacts from "./Blok5/Contacts";
import Footer from "./Blok6/Footer";
import Projects from "./Blok3/Projects";
import NavMenu from "./Blok1/NavMenu/NavMenu";



class App extends React.Component{
  state = {
    tasks: [
      {title: 'REACT', description: 'React — это библиотека JavaScript с открытым исходным кодом, которая используется для создания пользовательского интерфейса. Она была создана компанией Facebook и представлена разработчикам в 2013 году.'},
      {title: 'HTML', description: 'Стилем или CSS (Cascading Style Sheets, каскадные таблицы стилей) называется набор параметров форматирования, который применяется к элементам документа, чтобы изменить их внешний вид.'},
      {title: 'CSS', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'},
      {title: 'JS', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'},
      {title: 'JavaScript', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'},
      {title: 'JavaScript', description: 'JavaScript был создан программистом Brendan Eich из Netscape и представлен в декабре 1995 года под названием LiveScript.'}
    ]
  }
  render = () => {

    return (
        <div className="App">
          <div className="portfolio">
            <Header tasks={this.state.tasks}/>
            <Main/>
            <Skills tasks={this.state.tasks}/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
          </div>
        </div>

    );
  }
}
export default App;
