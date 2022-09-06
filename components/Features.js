import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion' 
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  {/*const tl3 = useRef(null);
  const { ref, inView} = useInView({
      threshold: 1
  })

      if(inView) {
        tl3.current = gsap.timeline()
            .fromTo('.feature-illus', {
                x: -150,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1
            })
            .fromTo('.feature-h1', {
                scale: 0,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1
            })
            .fromTo('.feature-p', {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1
            })
            .fromTo('.featurelist-p', {
                x: 150,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                stagger: {
                    amount: .5
                }
            })
            .fromTo('.greentick',{
                opacity: 0
            },
            {
                opacity: 1,
                stagger: {
                    amount: .5
                }
            })
      }
      {/*else {
        gsap.to('.feature-illus, .feature-h1, .feature-p, .greentick, .featurelist-p', {
            opacity: 0
        })
     }*/}

    const slideIn = {
        initial: {opacity: 0, x: -30},
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .5,
            }
        }
    }
    const scaleUp = {
        initial: { opacity: 0, scale: 0 },
        animate: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 1,
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
                duration: .5,
            }
        }
    }

    const slideInLeft = {
        initial: {opacity: 0, x: 30},
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .7,
            }
        }
    }

    const container = {
        initial: {opacity: 0},
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }
    


    return (
        <motion.div initial='initial' whileInView='animate' viewport={{ once: false, amount: .5}} className={styles.features}>
            <motion.div variants={slideIn}>
                <img className='feature-illus' src='/secondillus.png' alt='' width={508} height={415} />
            </motion.div>

            <motion.div variants={container} className={styles.rightfeature}>
                <motion.h1 variants={scaleUp} className='feature-h1'>We Provide Many <br/>Features You Can Use</motion.h1>
                <motion.p variants={slideUp} className='feature-p'>You can explore the features that we provide with fun and <br/>have their own functions each feature.</motion.p>
                <motion.ul>
                    <motion.li variants={slideInLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='greentick' viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <p className='featurelist-p'>Powerfull online protection.</p>
                    </motion.li>
                    <motion.li variants={slideInLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='greentick' viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <p className='featurelist-p'>Internet without borders.</p>
                    </motion.li>
                    <motion.li variants={slideInLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='greentick' viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <p className='featurelist-p'>Supercharged VPN</p>
                    </motion.li>
                    <motion.li variants={slideInLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='greentick' viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <p className='featurelist-p'>No specific time limits.</p>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </motion.div>
    );
}

export default Features;