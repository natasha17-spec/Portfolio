import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
      <div className={styles.main}>
          <div className={styles.container}>
              <div className={styles.greeting}>
                  <span>Hi!</span>
                  <span>My name is <span>Nataliya Herasimovich</span></span>
                  <h1>I'm Frontend developer</h1>
              </div>
              <div className={styles.photo}>
                  <div> </div>
              </div>
          </div>
      </div>
);
}
export default Main;