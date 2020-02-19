import React from 'react';
import styles from './Contacts.module.css';

function Contactstest() {
    return (
        <div className={styles.skill} id='contact'>
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='name' required/>
                <label htmlFor="name" className="form__label">Name</label>
            </div>
        </div>
    );
}

export default Contactstest;