import React from 'react';
import styles from './Contacts.module.css';
import {Fade} from "react-reveal";

function Contacts(props) {

    return (
        <div className={styles.contacts} id='contact'>
            <div className={styles.container}>
                <span className={styles.contactSpan}>Contact</span>
                <div className={styles.moduleLine}></div>

                <AddMessageForm onSubmit={props.handleSubmit}/>
            </div>
        </div>
    );
}

export function AddMessageForm(props) {

    return <>
        <form className={styles.form} id='contact-form' onSubmit={props.handleSubmit}>
            <Fade bottom>
                <input className={styles.formArea} type='text' placeholder='Name' id='name'/>
            </Fade>
            <Fade bottom>
                <input className={styles.formArea} type='text' placeholder='E-mail'  id='e_mail'/>
            </Fade>
            <Fade bottom>
                <textarea className={styles.formArea} type='text' placeholder='Message' id='message'></textarea>
            </Fade>
        </form>

        <div className={styles.wrapper}>
            <button className={styles.btn}>Send Message
                <svg>
                    <rect></rect>
                </svg>
            </button>
        </div>
    </>;
}
export default Contacts;