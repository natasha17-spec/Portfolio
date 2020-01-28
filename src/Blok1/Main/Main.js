import React from 'react';
import styles from './Main.module.css';
import Particles from "react-particles-js";

function Main() {
    const params = {
        particles: {
            number: {
                value:350
            },
            color: {
                value: '#5fd5f5'
            },
            shape: {
                type: 'triangle',
                stroke: {
                    width: 2,
                    color: '#5fd5f5'
                },
                "polygon": {
                    "nb_sides": 6 /* количество сторон полигона (type: polygon), от 3 до 12 */
                },
                image: {
                    src: 'http://www.iconsdb.com/icons/preview/white/contacts-xxl.png'
                }
            },
            opacity: {
                value: 0.4,
                random: true,
                anim: {
                    enable: false,
                    speed: 3
                }
            },
            size: {
                value: 3,
                random: false,
                anim: {
                    enable: false,
                    speed: 40
                }
            },
            line_linked: {
                enable: true,
                distance: 140,
                color: '#fff',
                width: 1
            },
            move: {
                enable: true,
                speed: 8,
                direction: 'none',
                "bounce": false
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: false,
                    mode: 'push'
                }
            },
            modes: {
                repulse: {
                    distance: 50,
                    duration: 0.4
                },
                bubble: {
                    distance: 100,
                    size: 10
                }
            }
        }
    };
    return (
        <div className={styles.mainBox} id='main'>
            <div className={styles.mainContainer}>
                <Particles className={styles.particles} params={params}/>
                <div className={styles.greeting}>
                    <span >Hi!</span>
                    <span>My name is <span>Nataliya Herasimovich</span></span>

                    <div className={styles.wrapper}>
                    <h1 className={styles.tittle}>I'm Frontend developer</h1>
                    </div>

                </div>
                <div className={styles.mainPhoto}>
                    <div> </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

