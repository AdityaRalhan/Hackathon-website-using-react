import React from 'react'
import styles from './InfoBar.module.css'
import { Link, NavLink } from 'react-router-dom'

const InfoBar = () => {

  return (
    <section>
        <div className={styles.container}>
            <div className={styles.divContainer}>
            <div>
                <img src="/" alt="" />
                <Link to="/AboutUs">AboutUs</Link>
            </div>
            <div>
                <img src="/competitionInfo.png" alt="" />
                <Link to="/CompInfo">Info</Link>
            </div>
            <div>
                <img src="/register.png" alt="" />
                <Link to="/Register">Register</Link>
            </div>
            <div >
                <img src="/contactUs.png" alt="" />
                <Link to="/ContactUs"> ContactUs</Link>
            </div>
            
            </div>
        </div>
    </section>
  )
}

export default InfoBar
