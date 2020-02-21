import React from 'react';
import styles from './Contacts.module.css';
import {Fade} from "react-reveal";


function Contacts() {
    return (
        <div className={styles.contacts} id='contact'>
            <div className={styles.container}>
                <span className={styles.contactSpan}>Contact</span>
                <div className={styles.moduleLine}> </div>
                <form className={styles.form}>
                    <Fade bottom>
                    <input className={styles.formArea} type='text' placeholder='Name'/>
                    </Fade>
                    <Fade bottom>
                    <input className={styles.formArea} type='text' placeholder='E-mail'/>
                    </Fade>
                    <Fade bottom>
                    <textarea className={styles.formArea} type='text' placeholder='Message'></textarea>
                    </Fade>
                    </form>
                <div className={styles.wrapper}>
                    <a href={'#!'} className={styles.btn}>Send Message
                        <svg>
                            <rect></rect>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;