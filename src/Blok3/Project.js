import React from 'react';
import styles from './Project.module.css';
import project from '../Blok3/project_1.png'


function Project() {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={project} alt="project1"/>
                <button className={styles.btn}>Смотреть</button>
            </div>
            <span className={styles.title}>Social_Network</span>
            <span className={styles.description}>Социальная сеть для знакомства и общения</span>
            </div>
          );
}

export default Project;