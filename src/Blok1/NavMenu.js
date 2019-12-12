import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>

                <a href="" className={styles.link}>Главное</a>
                <a href="" className={styles.link}>Скиллы</a>
                <a href="" className={styles.link}>Работа</a>
                <a href="" className={styles.link}>Контакты</a>
        </div>
    );
}
export default NavMenu;