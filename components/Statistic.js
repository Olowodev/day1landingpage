import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap';
import { animate, motion } from 'framer-motion'

const Statistic = () => {
    {/*const tl2 = useRef(null);
    const { ref, inView} = useInView({
        threshold: .5
    });

        if (inView) {
            console.log('it is in view');
            tl2.current = gsap.timeline()
                .fromTo('.stat-icons', {
                    scale: 0,
                    opacity: 0
                },
                {
                    opacity: 1,
                    scale: 1,
                    stagger: {
                        amount: .5
                    },
                })
                .fromTo('.stat-h1', {
                    y: 20,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: {
                        amount: .5
                    }
                })
                .fromTo('.stat-p', {
                    opacity: 0
                },
                {
                    opacity: 1,
                    stagger: {
                        amount: .5
                    }
                })
        }*/}
    
        const scaleUp = {
            initial: { opacity: 0, scale: 0 },
            animate: { 
                opacity: 1, 
                scale: 1,
                transition: {
                    duration: .7,
                    type: 'spring',             
                }
            }
        }

        const slideUp = {
            initial: {opacity: 0, y: 30},
            animate: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: .4,
                    delay: .5,
                }
            }
        }

        const slideUpDelay = {
            initial: {opacity: 0, y: 30},
            animate: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: .4,
                    delay: .9,
                }
            }
        }

    return (
        <motion.div initial='initial' whileInView='animate' viewport={{ once: false, amount: 1 }} className={styles.statistic}>
            <div className={`${styles.stat} ${'test'}`}>
                <div className={`tests ${styles.staticon}`}>
                    <motion.svg  
                        variants={scaleUp} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className='stat-icons'>
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </motion.svg>
                </div>

                <div className={styles.statDesc}>
                    <motion.h2 variants={slideUp} className='stat-h1'>90+</motion.h2>
                    <motion.p variants={slideUpDelay} className='stat-p'>Users</motion.p>
                </div>
            </div>
            <div className={styles.vline}></div>
            <div className={styles.stat}>
                <div className={styles.staticon}>
                    <motion.svg 
                        variants={scaleUp} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className='stat-icons'>
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </motion.svg>
                </div>

                <div className={styles.statDesc}>
                    <motion.h2 variants={slideUp} className='stat-h1'>30+</motion.h2>
                    <motion.p variants={slideUpDelay} className='stat-p'>Locations</motion.p>
                </div>
            </div>
            <div className={styles.vline}></div>
            <div className={styles.stat}>
                <div className={styles.staticon}>
                    <motion.svg 
                        variants={scaleUp} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className='stat-icons'>
                        <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd" />
                    </motion.svg>
                </div>

                <div className={styles.statDesc}>
                    <motion.h2 variants={slideUp} className='stat-h1'>50+</motion.h2>
                    <motion.p variants={slideUpDelay} className='stat-p'>Servers</motion.p>
                </div>
            </div>
        </motion.div>
    );
}

export default Statistic;