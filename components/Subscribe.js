import styles from '../styles/Home.module.css'
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Subscribe = () => {

    const container = {
        initial: {scaleX: 0},
        animate: {
            scaleX: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: .5,
                duration: 1
            }
        }
    }

    const drop = {
        initial: {opacity: 0, y: -50},
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'linear',
                duration: .7
            }
        }
    }

    const slideUp = {
        initial: {opacity: 0, y: 50},
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'linear',
                duration: .7
            }
        }
    }

    const scaleUp = {
        initial: {opacity: 0, scale: 0},
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: .7,
                type: 'spring'
            }
        }
    }

    return (
        <motion.div initial='initial' whileInView='animate' variants={container} viewport={{once: true, amount: 1}} className={styles.subscribe}>
            <motion.div>
                <motion.h1 variants={drop}>Subscribe Now for <br/>Get Special Features!</motion.h1>
                <motion.p variants={slideUp}>Let's subscribe with us and find the fun.</motion.p>
            </motion.div>

            <motion.div>
                <motion.button variants={scaleUp}>Subscribe Now</motion.button>
            </motion.div>
        </motion.div>
    );
}

export default Subscribe;