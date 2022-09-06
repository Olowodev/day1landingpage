import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { useRef } from "react";

const Navbar = () => {
    
    return (
        <div className={styles.navbar}>
            <div className='logo'>
                <img src='/Logo.svg' alt='Logo' width={149} height={36} />
            </div>

            <div>
                <ul className={styles.navlinks}>
                    <li className='links'>
                        <Link href='/'>
                            <a href="">Home</a>
                        </Link>
                    </li>
                    <li className='links'>
                        <Link href='#features'>
                            <a>Features</a>
                        </Link>
                    </li>
                    <li className='links'>
                        <Link href='#pricing'>
                            <a>Pricing</a>
                        </Link>
                    </li>
                    <li className='links'>
                        <Link href='#testimonials'>
                            <a>Testimonials</a>
                        </Link>
                    </li>
                    <li className='links'>
                        <Link href='#help'>
                            <a>Help</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <ul className={styles.sign}>
                    <li className="sign">
                        <a className={styles.black} href=""> Sign In</a>
                    </li>
                    <li className="sign">
                        <button className={styles.red} href="">Sign Up</button>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Navbar;