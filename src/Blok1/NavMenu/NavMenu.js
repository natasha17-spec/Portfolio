import React from 'react';
import styles from './NavMenu.module.css';





function NavMenu() {

    return (

            <div className={styles.navMenu}>
                <a href="#main" className={styles.link}>Main</a>
                <a href="#skills" className={styles.link}>Skills</a>
                <a href="#project" className={styles.link}>Project</a>
                <a href="#contact" className={styles.link}>Contact</a>

            </div>



    );
}
export default NavMenu;