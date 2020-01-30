import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";




function Projects(props) {
    return (
        <div className={styles.projectsContainer} id='project'>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <span> My Project </span>
                </div>
                <div className={styles.moduleLine}> </div>
                <div className={styles.container}>
                    <Project project={props.project}/>
            </div>

            </div>
        </div>
    );
}

export default Projects;