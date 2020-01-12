import React from 'react';
import styles from './Skill.module.css';


class Skill extends React.Component {
    render = () => {
        return (
            <div className={styles.skillBox}>
                <span className={styles.skillTitle}>{this.props.title}</span>
                <span className={styles.skillDescription}>{this.props.description}</span>
            </div>

        );
    }
}

export default Skill;