import Image from "next/image";
import styles from '../styles/Home.module.css'
import {reviews} from '../data'
import Reviewcard from "./Reviewcard";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Reviews = () => {
  const container = {
      initial: {opacity: 0},
      animate: {
          opacity: 1,
          transition: {
              staggerChildren: .5
          }
      }
  }

  const container2 = {
      initial: {opacity: 0},
      animate: {
          opacity: 1,
          transition: {
              delayChildren: 1.9,
              staggerChildren: .5
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


    

    return (
        <motion.div initial='initial' whileInView='animate' viewport={{once: false, amount: .5}} className={styles.reviews}>
            <motion.div variants={container} className={styles.reviewtitle}>
                <motion.h1 variants={slideUp}>Trusted by Thousands of <br/>Happy Customer</motion.h1>
                <motion.p variants={slideUp} >These are the stories of our customers who have joined us with great <br/>pleasure when using this crazy feature.</motion.p>
            </motion.div>

            <div className={styles.reviewcontainer}>
                <div className={styles.reviewsgroup}>
                    {reviews.map((review)=>(
                        <motion.div variants={container2}>
                            <Reviewcard reviews={review} key={review.id} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/*<div className={styles.controls}>
                <div>
                    <div></div>
                    <div></div>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>

            </div>*/}
        </motion.div>
    );
}

export default Reviews;