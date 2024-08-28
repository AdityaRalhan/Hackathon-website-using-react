import React from 'react'
import styles from './ThankYou.module.css'

const ThankYou = () => {
  return (
    <div className={styles.container}>
            <div className={styles.registerHeading}>
                <h1> Thank you !! </h1>
                <p> Excited to see you</p>
            </div>
            <div className={styles.imageContainer}>
                <img src="/thankyou.png" alt="" />
            </div>
    </div>
  )
}

export default ThankYou
