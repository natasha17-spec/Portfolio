import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
      <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.greeteng}>
                <span>Привет!</span>
                <span>Меня зовут Наталия Герасимович</span>
                <span>Я front-end разработчик</span>
                            </div>
              <div className={styles.photo}>
                  <img scr="" alt=""/>
              </div>

          </div>
      </div>
);
}
export default Main;