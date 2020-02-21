import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";



class Skills extends React.Component {
    render = () => {
        return (

            <div className={styles.skills} id='skills' >
                <div className={styles.wrapper}>
                    <div className={styles.skillTitle}>
                        <span name="top"> My skills </span>
                        <div className={styles.moduleLine}>

                        </div>
                    </div>

                    <div className={styles.skillsWrapper}>
                        <div className={styles.paddings_one}>
                            <div className={styles.icon}></div>
                            <Skill title={this.props.tasks[0].title} />
                        </div>


                        <div className={styles.paddings_one}>
                            <div className={styles.icon1}></div>
                            <Skill title={this.props.tasks[1].title} />
                        </div>


                        <div className={styles.paddings_one}>
                            <div className={styles.icon2}></div>
                            <Skill title={this.props.tasks[2].title} />
                        </div>
                        <div className={styles.paddings_one}>
                            <div className={styles.icon3}></div>
                            <Skill title={this.props.tasks[3].title}/>
                        </div>
                        <div className={styles.paddings_one}>
                            <div className={styles.icon4}></div>
                            <Skill title={this.props.tasks[4].title}/>
                        </div>
                        <div className={styles.paddings_one}>
                            <div className={styles.icon5}></div>
                            <Skill title={this.props.tasks[5].title}/>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Skills;