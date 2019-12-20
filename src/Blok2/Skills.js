import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";
import photo from "../Blok1/react.png";
import JS from "../Blok1/JS.png";
import html from "../Blok1/html.png";

class Skills extends React.Component {
    render = () => {
        return (

            <div className={styles.skills}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <span> My skills </span>
                    </div>
                    <div className={styles.skillsWrapper}>


                        <div className={styles.paddings_one}>
                            <div className={styles.icon}>
                            <img src={photo} width="100" height="100" alt='logo react'/>
                        </div>
                            <Skill title={this.props.tasks[0].title} description={this.props.tasks[0].description}/>
                        </div>


                        <div className={styles.paddings_one}>
                            <div className={styles.icon}>
                                <img src={html} width="100" height="100" alt='logo react'/>
                            </div>
                            <Skill title={this.props.tasks[1].title} description={this.props.tasks[1].description}/>
                        </div>


                        <div className={styles.paddings_one}>
                            <div className={styles.icon}>
                                <img src={JS} width="100" height="100" alt='logo react'/>
                            </div>

                            <Skill title={this.props.tasks[2].title} description={this.props.tasks[2].description}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;