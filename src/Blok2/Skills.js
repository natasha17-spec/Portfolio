import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <span> Мои скиллы </span>
                </div>
                <div className={styles.skillsWraper}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
}

export default Skills;