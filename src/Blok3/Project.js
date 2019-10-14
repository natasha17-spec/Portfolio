import React from 'react';
import styles from './Project.module.css';


function Project() {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src="" alt=""/>
                <button className={styles.btn}>Смотреть</button>
            </div>
            <span className={styles.title}>Название проекта</span>

            <span className={styles.description}>Краткое описание</span>
            </div>
          );
}

export default Project;