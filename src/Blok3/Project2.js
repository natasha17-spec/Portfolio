import React from 'react';
import styles from './Project.module.css';
import project from "./ProjectPicture/project_1.png";


function Project2() {
    return (
        <div className={styles.skills_1}>
            <div className={styles.icon}>
                <div> </div>
                <a href="https://github.com/natasha17-spec/ToDoListIT?files=1" className={styles.btn} target='blank'>Look</a>
                {/*<button className={styles.btn}>Look</button>*/}
            </div>

            <span className={styles.title_1}>TodoList</span>
            <span className={styles.description}>Программа, которая управляет очередью задач</span>
        </div>
    );
}
export default Project2;