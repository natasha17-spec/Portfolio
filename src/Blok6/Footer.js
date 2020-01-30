import React from 'react';
import styles from './Footer.module.css';

        function Footer() {
            return    <div className={styles.skill}>
                <div className={styles.container}>
                    <div>Gerasimovich Natalia</div>
                    <div className={styles.socialContainer}>
                        <div className={styles.socialIcons}> </div>
                        <div className={styles.socialIcons}> </div>
                        <div className={styles.socialIcons}> </div>
                        <div className={styles.socialIcons}> </div>
                    </div>
                    <span className={styles.prava}>©2020 Все права защищены</span>
                </div>
            </div>

 }
export default Footer;