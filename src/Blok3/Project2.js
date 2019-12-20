import React from 'react';
import styles from './Project.module.css';
import project from "./project_1.png";


function Project2() {
    return (
        <div className={styles.skills_1}>
            <div className={styles.icon_1}>
                <img src={project} alt="project1" height={200} width={200}/>
                <button className={styles.btn}>Look</button>
            </div>

            <span className={styles.title_1}>TodoList</span>
            <span className={styles.description}>Программа, которая управляет очередью задач</span>
        </div>
    );
}
export default Project2;