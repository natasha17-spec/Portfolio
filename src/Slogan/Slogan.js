import React from 'react';
import styles from './Slogan.module.css';
import {Flip} from "react-reveal";


function Slogan() {
    return (
        <Flip top>

        <div className={styles.slogan}>
            <div className={styles.sloganContainer}>
                <span className={styles.sloganTitle}>I Am Available For Freelancer</span>
                <div className={styles.wrapper}>
                    <a href={'#!'} className={styles.btn}> Hire me
                        <svg>
                            <rect></rect>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        </Flip>
);
}

export default Slogan;