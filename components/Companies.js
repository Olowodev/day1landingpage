import Image from "next/image";
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";

const Companies = () => {

    const container = {
        initial: {opacity: 0},
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
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
    return (
        <motion.div initial='initial' whileInView='animate' variants={container} viewport={{once: false, amount: 1}} className={styles.companies}>
            <motion.div variants={scaleUp}>
                <img src='/netflix.png' alt='' width={190} height={70} />
            </motion.div>

            <motion.div variants={scaleUp}>
                <img src='/reddit.png' alt='' width={156} height={51} />
            </motion.div>

            <motion.div variants={scaleUp}>
                <img src='/amazon.svg' alt='' width={190} height={70} />
            </motion.div>

            <motion.div variants={scaleUp}>
                <img src='/discord.png' alt='' width={187} height={64} />
            </motion.div>

            <motion.div variants={scaleUp}>
                <img src='/spotify.png' alt='' width={171} height={51} />
            </motion.div>
        </motion.div>
    );
}

export default Companies;