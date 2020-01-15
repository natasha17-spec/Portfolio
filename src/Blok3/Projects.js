import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import Project2 from "./Project2";
import Project3 from "./Project3";



function Projects() {
    return (
        <div className={styles.skills}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <span> My Project </span>

                </div>
                <div className={styles.moduleLine}> </div>
                <div className={styles.skillsWraper}>
                    <Project2/>
                    <Project3/>
                    <Project/>
            </div>

            </div>
        </div>
    );
}

export default Projects;