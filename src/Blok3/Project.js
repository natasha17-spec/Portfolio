import React from 'react';
import styles from './Project.module.css';



function Project() {
    return (
        <div className={styles.skills_1}>
            <div className={styles.icon}>
                <div> </div>
                <button className={styles.btn}>Look</button>
            </div>
            <span className={styles.title_1}>Social_Network</span>
            <span className={styles.description}>Социальная сеть для знакомства и общения</span>


        </div>
          );
}

export default Project;