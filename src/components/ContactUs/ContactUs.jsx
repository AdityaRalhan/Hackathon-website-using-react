import React from 'react'
import styles from './ContactUs.module.css'

const ContactUs = () => {
  return (
    <>
    <div className={styles.registerContainer}>
            <div className={styles.registerHeading}>
                <h1> Contact Us </h1>
                <p> Here are our social handles</p>
            </div>
    </div>

    <div className={styles.container}>
        <div className={styles.firstRow}>
            <div>
                <a href="https://www.instagram.com/djsce_iete/" target='blank'>
                    <img src="/instagram.png" alt="" />
                </a>
                
            </div>
            <div>
                <a href="https://www.linkedin.com/company/djsce-iete/?originalSubdomain=in" target='blank'>
                    <img src="/linkedin.png" alt="" />
                </a>
            </div>
        </div>

        <div className={styles.secondRow}>
            <div >
                <a href="https://djsceietesf.wordpress.com/" target='blank'>
                    <img src="ieteLogo.png" alt="" />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/djsceiete/" target='blank'>
                    <img src="facebook.png" alt="" />
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactUs
