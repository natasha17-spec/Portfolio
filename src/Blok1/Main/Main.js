import React from 'react';
import styles from './Main.module.css';


function Main() {
    return (
        <div className={styles.main} id='main'>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi!</span>
                    <span>My name is <span>Nataliya Gerasimovich</span></span>
                    <div className={styles.greetingIam}>
                        <h1 className={styles.tittle}>I'm Frontend developer</h1>
                    </div>
                </div>
                <div className={styles.mainPhoto}>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Main;

