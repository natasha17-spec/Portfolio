import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>

                <a href="" className={styles.link}>Main</a>
                <a href="" className={styles.link}>Skills</a>
                <a href="" className={styles.link}>Job</a>
                <a href="" className={styles.link}>Contact</a>
        </div>
    );
}
export default NavMenu;