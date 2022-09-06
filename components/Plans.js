import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Plans = () => {
  /*const tl4 = useRef(null);
  const { ref, inView } = useInView({
      threshold: .3
  })

  useEffect (() => {
      if (inView) {
          tl4.current = gsap.timeline()
            .fromTo('.price-h1', {
                y: 20
            },
            {
                y: -10,
                opacity: 1
            })
      }
      else {
        gsap.to('.price-h1', {
            opacity: 0
        })
      }
  }, [inView])*/

  const container1 = {
      initial: {opacity: 0},
      animate: {
          opacity: 1,
          transition: {
              staggerChildren: 0.5
          }
      }
  }

  const container2 = {
    initial: {opacity: 0},
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.5
        }
    }
}

  const slideUp = {
    initial: {opacity: 0, y: 100},
    animate: {
        y: -20,
        opacity: 1,
        transition: {
            duration: .5,
        }
    }
}

    return (
        <motion.div initial='initial' whileInView='animate' viewport={{once: false, amount: .3}} className={styles.pricing}>
            <motion.div variants={container1} className={styles.pricetitle}>
                <motion.h1 variants={slideUp} className='price-h1'>Choose Your Plan</motion.h1>
                <motion.p variants={slideUp}>Let's choose the package that is best for you and explore it happily and <br/>cheerfully.</motion.p>
            </motion.div>

            <motion.div initial='initial' whileInView='animate' viewport={{once: false, amount: .1}}   variants={container2} className={styles.pricecolumns}>
                <motion.div variants={slideUp} className={styles.pricecolumn}>
                    <img src='/Free.png' alt='picture on pricing' width={145} height={165} />
                    <h3>Free Plan</h3>
                    <ul className={styles.pricefeatures}>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Unlimited Bandwitch</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Encrypted Connection</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>No Traffic Logs</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Works on All Devices</p>
                        </li>
                    </ul>
                    <p className={styles.free}>Free</p>
                    <a>Select</a>
                </motion.div>
                <motion.div variants={slideUp} className={styles.pricecolumn}>
                    <img src='/Free.png' alt='picture on pricing' width={145} height={165} />
                    <h3>Standard Plan</h3>
                    <ul className={styles.pricefeatures}>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Unlimited Bandwitch</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Encrypted Connection</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Yes Traffic Logs</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Works on All Devices</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Connect Anyware</p>
                        </li>
                    </ul>
                    <p className={styles.standard}>$9<span> / mo</span></p>
                    <a>Select</a>
                </motion.div>
                <motion.div variants={slideUp} className={styles.pricecolumn}>
                    <img src='/Free.png' alt='picture on pricing' width={145} height={165} />
                    <h3>Premium Plan</h3>
                    <ul className={styles.pricefeatures}>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Unlimited Bandwitch</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Encrypted Connection</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Yes Traffic Logs</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Works on All Devices</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Connect Anywere</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Get New Features</p>
                        </li>
                    </ul>
                    <p className={styles.premium}>$12<span> / mo</span></p>
                    <a>Select</a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Plans;