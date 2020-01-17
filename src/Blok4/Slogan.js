import React from 'react';
import styles from './Slogan.module.css';


function Slogan() {

    return (
        <div className={styles.skill}>
            <div className={styles.conteiner}>
                <span className={styles.title}>I Am Available For Freelancer</span>
                <button className={styles.btn}>Hire me</button>
            </div>
        </div>
    );
}

export default Slogan;