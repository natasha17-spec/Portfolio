import React from 'react';
import styles from './NavMenu.module.css';
import { Link, animateScroll as scroll } from "react-scroll";

 class NavMenu extends React.Component {
     scrollToTop = () => {
         scroll.scrollToTop();
     };
    render() {
    return (
        <div className={styles.navMenu}>
            <a href="#main" className={styles.link} onClick={this.scrollToTop}>
                <Link
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                >Main
                </Link>
            </a>
            <a href="#skills" className={styles.link} onClick={this.scrollToTop}>
                <Link
                    activeClass="active"
                    spy={true}
                    to="skills"
                    smooth={true}
                    offset={-70}
                    duration={700}
                >Skills
                </Link>
            </a>
            <a href="#project" className={styles.link} onClick={this.scrollToTop}>
                <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                >Project</Link></a>
            <a href="#contact" className={styles.link} onClick={this.scrollToTop}>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                >Contact</Link></a>
        </div>
    );
}}
export default NavMenu;