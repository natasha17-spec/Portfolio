import React from 'react';
import styles from './Main.module.css';
import Particles from "react-particles-js";

function Main() {
    const params = {
        particles: {
            number: {
                value:500
            },
            color: {
                value: '#fff'
            },
            shape: {
                type: 'bow',
                stroke: {
                    width: 1,
                    color: 'coral'
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
                speed: 1,
                direction: 'none',
                straight: false
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
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

        <div className={styles.main}>
            <div className={styles.container}>
                <Particles className={styles.particles} params={params}/>
                <div className={styles.greeting}>
                    <span>Hi!</span>
                    <span>My name is <span>Nataliya Herasimovich</span></span>
                    <h1>I'm Frontend developer</h1>
                </div>
                <div className={styles.photo}>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Main;

// <Particles className={styles.particles} params={params} />