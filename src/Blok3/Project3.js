import React from 'react';
import styles from './Project.module.css';
import project from "./project_1.png";


function Project3() {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={project} alt="project1" height={200} width={200}/>
                <button className={styles.btn}>Look</button>
            </div>
            <span className={styles.title}>Project</span>
            <span className={styles.description}>Искусственный интеллект</span>
        </div>
    );
}
export default Project3;