import React, {useState} from 'react';
import styles from './Contacts.module.css';
import {Fade} from "react-reveal";

function Contacts(props) {

    return (
        <div className={styles.contacts} id='contact'>
            <div className={styles.container}>
                <span className={styles.contactSpan}>Contact</span>
                <div className={styles.moduleLine}> </div>

                <AddMessageForm onSubmit={props.onSubmit}/>
            </div>
        </div>
    );
}

export function AddMessageForm(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(name, email, message)
    }

    return <>
        <form className={styles.form} id='contact-form' onSubmit={handleSubmit}>
            <Fade bottom>
                <input className={styles.formArea} type='text' placeholder='Name' id='name' value={name}
                       onChange={(e) => setName(e.currentTarget.value)}/>
            </Fade>
            <Fade bottom>
                <input className={styles.formArea} type='text' placeholder='E-mail' id='e_mail' value={email}
                       onChange={(e) => setEmail(e.currentTarget.value)}/>
            </Fade>
            <Fade bottom>
                <textarea className={styles.formArea} type='text' placeholder='Message' id='message' value={message}
                          onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
            </Fade>
            <div className={styles.wrapper}>
                <button className={styles.btn}>Send Message
                    <svg>
                        <rect></rect>
                    </svg>
                </button>
            </div>
        </form>


    </>;
}

export default Contacts;