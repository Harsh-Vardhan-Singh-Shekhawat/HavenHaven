import React from 'react'
import styles from './Footer.module.css'
import {BsFacebook ,BsYoutube, BsTwitter} from 'react-icons/bs'
import {IoIosHome} from 'react-icons/io'
const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-cont']}>
        <div className={styles['title-footer']}>
            <h1>HavenHaven</h1>
        </div>
        <div className={styles['ctn-cont']}>
            <p className={styles['speak']}>SPEAK WITH US</p>
            <p className={styles['speak-num']}>+91 123 456 7890</p>
        </div>
        <div className={styles['follow-us']}>
           <p className={styles['follow-us-p']}>FOLLOW US</p>
            <BsFacebook className={styles['follow-link']} />
            <BsTwitter className={styles['follow-link']} />
            <BsYoutube className={styles['follow-link']} />
        </div>
        <div className={styles['visit-us']}>
            <p>VISIT US</p>
            <IoIosHome  /> <span className={styles['add-span']}>75 Hazelwood Dr, Jaipur, Rajasthan</span>
        </div>
        <div className={styles['header-nav']}>
            <ul className={styles['footer-ul']}>
                <li className={styles['nav-item']}>Home</li>
                <li className={styles['nav-item']}>About</li>
                <li className={styles['nav-item']}>Contact</li>
            </ul>
        </div>
        <div className={styles['rights']}>
            © HavenHaven 2023. All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
