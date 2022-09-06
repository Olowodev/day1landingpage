import styles from '../styles/Home.module.css'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.firstfoot}>
                <div className={styles.footlogo}>
                    <img src='/Logo.svg' alt='' width={149} height={36} />
                </div>
                <p>LaslesVPN is a private virtual network that <br />has unique features and has high security.</p>
                <div className={styles.socials}>
                    <div>
                        <a><i class="fab fa-facebook-f"></i></a>
                    </div>
                    <div>
                        <a><i class="fab fa-twitter"></i></a>
                    </div>
                    <div>
                        <a><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <p>©2020LaslesVPN</p>

            </div>

            <div className={styles.secondfoot}>
                <h3>Product</h3>
                <div className={styles.footlinks}>
                    <p>Download </p>
                    <p>Pricing</p>
                    <p>Locations</p>
                    <p>Server</p>
                    <p>Countries</p>
                    <p>Blog</p>
                </div>
            </div>

            <div className={styles.thirdfoot}>
                <h3>Engage</h3>
                <div className={styles.footlinks}>
                    <p>LaslesVPN ? </p>
                    <p>FAQ</p>
                    <p>Tutorials</p>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>

            </div>

            <div className={styles.fourthfoot}>
                <h3>Earn Money</h3>
                <div className={styles.footlinks}>
                    <p>Affiliate</p>
                    <p>Become Partner</p>
                </div>

            </div>
        </div>
    );
}

export default Footer;