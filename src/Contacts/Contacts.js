import React from 'react';
import styles from './Contacts.module.css';


function Contacts() {
    return (
        <div className={styles.contacts} id='contact'>
            <div className={styles.container}>
                <span className={styles.contactSpan}>Contact</span>
                <form className={styles.form}>
                    <input className={styles.text_contact} type='text' placeholder='Name'/>
                    <input className={styles.text_contact} type='text' placeholder='E-mail'/>
                    <textarea className={styles.text_contact} type='text' placeholder='Message'></textarea>
                </form>
                <div className={styles.wrapper}>
                    <a href={'#!'} className={styles.btn}> Send Message
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