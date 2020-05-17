import React from 'react';
import styles from './Project.module.css'



function Project(props) {


    let url = `../../ProjectPicture/${props.urlImage}`
    return (
        <div className={styles.project}>
            <div className={styles.projectImg} style={{backgroundImage: `url(${props.urlImage})` }}>
            </div>
            <a className={styles.btn} href={props.href} target="_blank">Look</a>


            <div className={styles.container}>
                <span className={styles.title}>{props.titleProject}</span>
                <span className={styles.description}>{props.descriptionProject}</span>
            </div>
        </div>
    );
}

export default Project;