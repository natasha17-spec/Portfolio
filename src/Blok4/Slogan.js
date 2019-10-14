import React from 'react';
import styles from './Slogan.module.css';


function Slogan() {
    return (
        <div className={styles.skill}>
            <div className={styles.conteiner}>
                <span className={styles.title}>Рассматриваю варианты удаленной работы</span>
                <button className={styles.btn}>Нанять меня</button>
            </div>
        </div>
    );
}

export default Slogan;