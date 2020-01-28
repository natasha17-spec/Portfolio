import React from 'react';
import styles from './Slogan.module.css';


function Slogan() {

    return (
        <div className={styles.skill}>
            <div className={styles.conteiner}>
                <span className={styles.title}>I Am Available For Freelancer</span>
                <div className={styles.wrapper}>
                    <a href={'#!'} className={styles.btn}> Hire me
                        <svg>
                            <rect></rect>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
);
}

export default Slogan;