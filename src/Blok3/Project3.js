import React from 'react';
import styles from './Project.module.css';
import project from "./ProjectPicture/project_1.png";


function Project3() {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <div> </div>
                <button className={styles.btn}>Look</button>
            </div>
            <span className={styles.title}>Project</span>
            <span className={styles.description}>Искусственный интеллект</span>
        </div>
    );
}
export default Project3;