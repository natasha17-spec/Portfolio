import React from 'react';
import styles from './Projects.module.css'
import Project from "./Project/Project";
import image1 from "../ProjectPicture/1.png"
import image2 from "../ProjectPicture/cats.jpg"
import image3 from "../ProjectPicture/HTMLCSS.png"
import image4 from "../ProjectPicture/viber.png"
import image5 from "../ProjectPicture/project_1.png"
import image6 from "../ProjectPicture/todolist1.jpg"
import Fade from "react-reveal/Fade";
import {Bounce, Flip, LightSpeed, Pulse, Roll, Slide} from "react-reveal";



function Projects (props) {
    let arrayImage  = [image1,image2, image3,image4, image5,image6]
    let projectElements = props.project.map( (task, index) =><Project titleProject={task.titleProject}
                                                              urlImage={arrayImage[index]}
                                                               descriptionProject={task.descriptionProject} />);

return (

        <div className={styles.projectsBlock}>
            <div className={styles.projectContainer}>
                <div className={styles.projectTitle}>
                    <span>My Project</span>
                    <div className={styles.moduleLine}> </div>
                </div>
                <Bounce left>
                <div className={styles.projects}>
                   {projectElements}
                </div>
                </Bounce>
            </div>
        </div>
    );
}

export default Projects;