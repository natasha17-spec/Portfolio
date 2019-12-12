import React from 'react';
import styles from './Skill.module.css';


class Skill extends React.Component {
    render = () => {
        return (
            <div className={styles.skill}>
                <span className={styles.title}>{this.props.title}</span>
                <span className={styles.description}>{this.props.description}</span>
            </div>

        );
    }
}

export default Skill;