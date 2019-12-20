import React from 'react';
import styles from './Footer.module.css';
import inst from './inst.png'
import em from './em.png'
import what from './whatsapp.png'
import viber from './viber.png'
        function Footer() {
            return    <div className={styles.skill}>
                <div className={styles.container}>
                    <div>Herasimovich Natalia</div>
                    <div className={styles.socialContainer}>
                        <div className={styles.socialIcons}> </div>
                        <div className={styles.socialIcons}> </div>
                        <div className={styles.socialIcons}> </div>
                        <div className={styles.socialIcons}> </div>
                    </div>
                    <span className={styles.prava}>©2019 Все права защищены</span>
                </div>
            </div>

 }
export default Footer;