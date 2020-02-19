import React from 'react';
import styles from './Project.module.css'



function Project(props) {
    return (

        <div className={styles.project}>
            <div className={styles.icon}>
                <a className={styles.btn} href={""}>Look</a>
            </div>
            <div className={styles.containerSpan}>
                <span className={styles.title}>{props.titleProject}</span>
                <span className={styles.description}>{props.descriptionProject}</span>
            </div>
        </div>
    );
}

export default Project;