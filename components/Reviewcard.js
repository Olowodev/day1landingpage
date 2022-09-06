import Image from "next/image";
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";

const Reviewcard = ({reviews}) => {

    const fadeIn = {
        initial: {opacity: 0},
        animate: {
            opacity: 1,
            transition: {
                ease: 'linear',
                duration: .7
            }
        }
    }

    return (
        <motion.div initial='initial' animate='animate' variants={fadeIn} className={styles.reviewcard}>
            <div className={styles.cardtop}>
                <div className={styles.leftcardtop}>
                    <img src={reviews.profileimage} alt='' width={50} height={50} />
                    <div className={styles.cardtitle}>
                        <h3>{reviews.name}</h3>
                        <p>{reviews.location}</p>
                    </div>
                </div>
                <div className={styles.rightcardtop}>
                    <p>4.5</p>
                    <div>
                        <img src='/Vector.png' alt='' width={14} height={20} />
                    </div>
                </div>
            </div>

            <div>
                <p>{reviews.desc}</p>
            </div>
        </motion.div>
    );
}

export default Reviewcard;