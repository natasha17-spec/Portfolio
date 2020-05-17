import React from 'react';
import styles from './Projects.module.css'
import Project from "./Project/Project";
import image1 from "../ProjectPicture/social_network.png"
import image2 from "../ProjectPicture/todolist.png"
import image3 from "../ProjectPicture/portfolio.PNG"
import image4 from "../ProjectPicture/Simpl_Count_On_Redux.PNG"
import image5 from "../ProjectPicture/advanced.png"
import Fade from "react-reveal/Fade";




function Projects (props) {
    let hrefProject = ["https://natasha17-spec.github.io/Network/#/profile",
        "https://natasha17-spec.github.io/ToDoListIT",
        "https://github.com/natasha17-spec/Portfolio",
        "https://natasha17-spec.github.io/Simple_Counter_Redux",
        "https://natasha17-spec.github.io/Advanced_counter_Redux",
        "https://natasha17-spec.github.io/Simple_Counter_Redux",
    ];
    let arrayImage  = [image1,image2, image3,image4, image5]
    let projectElements = props.project.map( (task, index) =><Project titleProject={task.titleProject}
                                                              urlImage={arrayImage[index]}
                                                                            href={hrefProject[index]}
                                                               descriptionProject={task.descriptionProject} />);

return (

        <div className={styles.projectsBlock}>
            <div className={styles.projectContainer}>
                <div className={styles.projectTitle}>
                    <span>My Project</span>
                    <div className={styles.moduleLine}> </div>
                </div>
                <Fade right>
                <div className={styles.projects}>
                   {projectElements}
                </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;