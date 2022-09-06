import Image from "next/image";
import styles from '../styles/Home.module.css'


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.lefthead}>
                <h1 className="lefthead-h1">Want anything to be <br/>easy with <span>LaslesVPN</span>.</h1>
                <p className="lefthead-p">Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> <br/>discover interesting features from us.</p>
                <a className="lefthead-a" href="">Get Started</a>
            </div>

            <div className={styles.righthead}>
                <div className={styles.illustration}>
                    <img className="header-illus" src='/headerillus.png' alt="header's illustration" width={611} height={382} />
                </div>
                <div className={styles.icon}>
                    <div className={styles.chart}>
                        <img className="float" src='/Group.svg' alt='' width={42} height={56} />
                    </div>
                    <div className={styles.lock}>
                        <img className="float" src='/Vector1.svg' alt='' width={32} height={46} />
                    </div>
                    <div className={styles.play}>
                        <img className="float" src='/Polygon.svg' alt='' width={32} height={46} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;