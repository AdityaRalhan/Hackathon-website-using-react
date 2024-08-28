import React from 'react'
import styles from './AboutUs.module.css'
import Footer from '../Footer/Footer.jsx'

const AboutUs = () => {
  return (

    <div className={styles.aboutUsContainer}>
        <h1> About IETE </h1>
        <div className={styles.introContainer}>  
            <h2> INTRODUCTION </h2>
            <p>The Institution of Electronics and Telecommunication Engineers (IETE) is India’s leading recognised professional society devoted to the advancement of science and technology of Electronics, Telecommunication and IT.</p>
            <p>We, the students of Electronics and Telecommunication Engineering (EXTC) at D.J. Sanghvi are a student forum of IETE who are responsible for improving the standard of engineering education within our college.</p>
            <br /><br />
        
            <h2>VISION OF IETE STUDENTS’ FORUM</h2>
            <p>To transform engineering graduates into technically skilled Electronics and Telecommunication Engineers through professional training and skill development.</p>
            <br /><br />

            <h2>MISSION OF IETE STUDENTS’ FORUM</h2>
            <p>To offer platform for budding engineers to develop professional skills required to offer technological solutions to real world problems.</p>
            <p>To create opportunities for engineering graduates to work as an individual/team leader while working on multidisciplinary engineering problems.</p>
        </div>
    </div>

  )
}

export default AboutUs
