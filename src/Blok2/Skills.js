import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";



class Skills extends React.Component {
    render = () => {
        return (

            <div className={styles.skills}>
                <div className={styles.wrapper}>
                    <div className={styles.skillTitle}>
                        <span> My skills </span>
                        <div className={styles.moduleLine}>

                        </div>
                    </div>

                    <div className={styles.skillsWrapper}>
                        <div className={styles.paddings_one}>
                            <div className={styles.icon}> </div>
                            <Skill title={this.props.tasks[0].title} description={this.props.tasks[0].description}/>
                        </div>


                        <div className={styles.paddings_one}>
                            <div className={styles.icon1}> </div>
                            <Skill title={this.props.tasks[1].title} description={this.props.tasks[1].description}/>
                        </div>


                        <div className={styles.paddings_one}>
                            <div className={styles.icon2}> </div>
                            <Skill title={this.props.tasks[2].title} description={this.props.tasks[2].description}/>
                        </div>
                        <div className={styles.paddings_one}>
                            <div className={styles.icon3}> </div>
                            <Skill title={this.props.tasks[3].title} description={this.props.tasks[3].description}/>
                        </div>


                        </div>
                        </div>
                        </div>


        );
    }
}

export default Skills;