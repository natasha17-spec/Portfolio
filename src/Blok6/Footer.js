import React from 'react';
import styles from './Footer.module.css';
import inst from './inst.png'
import em from './em.png'
import what from './whatsapp.png'
import viber from './viber.png'
        function Footer() {
            return    <div className={styles.skill}>
                <div className={styles.container}>
                    <div>Контакты</div>
                    <div className={styles.socialContainer}>
                        <div className={styles.socialIcons}> <img src={inst} alt=""/></div>
                        <div className={styles.socialIcons}><img src={em} alt=""/></div>
                        <div className={styles.socialIcons}><img src={what} alt=""/></div>
                        <div className={styles.socialIcons}><img src={viber} alt=""/></div>
                    </div>
                    <span className={styles.title}>Контакты</span>
                      <img src="" alt=""/>
                    <span className={styles.prava}>©2019 Все права защищены</span>
                </div>
            </div>

 }
export default Footer;