import React from 'react';
import styles from './Project.module.css';



function Project(props) {
    return (
        <div className={styles.project1}>
            <div className={styles.centerBox}>
                <div className={styles.icon}>
                    <div> </div>
                    <a className={styles.btn} href={""}>Look</a>
                </div>
                <div className={styles.containerSpan}>
                    <span className={styles.title}>{props.project[0].titleProject}</span>
                    <span className={styles.description}>{props.project[0].descriptionProject}</span>
                </div>
            </div>
            <div className={styles.centerBox}>
                <div className={styles.icon}>
                    <div> </div>
                    <a className={styles.btn} href={""}>Look</a>
                </div>
                <div className={styles.containerSpan}>
                    <span className={styles.title}>{props.project[1].titleProject}</span>
                    <span className={styles.description}>{props.project[1].descriptionProject}</span>
                </div>
            </div>
            <div className={styles.centerBox}>
                <div className={styles.icon}>
                    <div> </div>
                    <a className={styles.btn} href={""}>Look</a>
                </div>
                <div className={styles.containerSpan}>
                    <span className={styles.title}>{props.project[2].titleProject}</span>
                    <span className={styles.description}>{props.project[2].descriptionProject}</span>
                </div>
            </div>
        </div>
          );
}

export default Project;