import React from 'react';
import styles from './Projects.module.css'
import Project from "./Project/Project";



function Projects (props) {
    let projectElements = props.project.map( task => <Project titleProject={task.titleProject}
                                                               descriptionProject={task.descriptionProject} />);

    return (
        <div className={styles.projectsBlock}>
            <div className={styles.projectContainer}>
                <div className={styles.projectTitle}>
                    <span>My Project</span>
                    <div className={styles.moduleLine}></div>
                </div>
                <div className={styles.projects}>
                   {projectElements}
                </div>
            </div>
        </div>

    );
}

export default Projects;