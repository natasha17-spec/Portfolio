import React from 'react';
import styles from './Footer.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab} from '@fortawesome/free-brands-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";


library.add(fab);

function Footer() {
    return <div className={styles.footer}>
        <div className={styles.name}>
            <div>Gerasimovich Natalia</div>
            <div className={styles.moduleLine}>
            </div>
            <div className={styles.containerIcon}>
                <div className={styles.icon}>
                    <a href="https://t.me/natali_kul" target="_blank"><FontAwesomeIcon icon={['fab', 'telegram-plane']}
                                                                                       size='2x'/></a>
                </div>
                <div className={styles.icon}>
                    <a href="https://www.instagram.com/natali_gerasimovich/?hl=ru" target="_blank"><FontAwesomeIcon
                        icon={['fab', 'instagram']} size='2x'/></a>
                </div>
                <div className={styles.icon}>
                    <a href="https://m.vk.com/natali_gerasimovich" target="_blank"><FontAwesomeIcon icon={['fab', 'vk']}
                                                                                                    size='2x'/></a>
                </div>
                <div className={styles.icon}>
                    <a href="https://api.whatsapp.com/send?phone=375293452559" target="_blank"><FontAwesomeIcon
                        icon={['fab', 'whatsapp']} size='2x'/></a>
                </div>
            </div>
            <span className={styles.prava}>©2020 Все права защищены</span>
        </div>
    </div>

}

export default Footer;