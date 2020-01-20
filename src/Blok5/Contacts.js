import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.skill} id='contact'>
            <div className={styles.conteiner}>
                <h2>Contact</h2>
                <form className={styles.form}>
                    <input className={styles.text_contact} type='text' placeholder='Name'/>
                    <input className={styles.text_contact} type='text' placeholder='e-mail'/>
                    <textarea className={styles.text_contact} type='text' placeholder='Message'></textarea>
                </form>
                <button className={styles.btn}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;