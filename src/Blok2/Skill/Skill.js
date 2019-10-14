import React from 'react';
import styles from './Skill.module.css';


function Skill() {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src="" alt=""/>
            </div>
            <span className={styles.title}>React</span>
            <span className={styles.description}> Описание скила</span>
        </div>

    );
}

export default Skill;