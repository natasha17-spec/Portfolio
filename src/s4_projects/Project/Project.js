import React from 'react';
import styles from './Project.module.css'


function Project(props) {
    let url = `../../s8_assets/${props.urlImage}`
    return (
        <div className={styles.project}>
            <div className={styles.projectImg} style={{backgroundImage: `url(${props.urlImage})`}}>
            </div>
            <div className={styles.lookHref}><a className={styles.btn} href={props.href} target="_blank">Look Demo</a>
                <a className={styles.btn} href={props.lookResource} target="_blank">Look Resources</a></div>
            <div className={styles.container}>
                <span className={styles.title}>{props.titleProject}</span>
                <span className={styles.description}>{props.descriptionProject}</span>
            </div>
        </div>
    );
}

export default Project;