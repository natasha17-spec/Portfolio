import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.skill}>
            <div className={styles.conteiner}>
                <h2>Контакты</h2>
                <form className={styles.form}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <button className={styles.btn}>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;