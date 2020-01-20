import React from 'react';
import styles from './Header.module.css';
import NavMenu from "../NavMenu/NavMenu";


function Header(props) {
    return (
        <div className={styles.headerBox}>
            <div className={styles.headerContainer}>
                <NavMenu/>
            </div>
        </div>
    )
};
export default Header;