import React from 'react'
import styles from './Intro.module.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const textVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};

const Intro = () => {
  return (
    <>
    <section>
      <div className={styles.container}>
        <video src="/bg-video.mp4" autoPlay loop muted />
        <motion.div
          className={styles.contentContainer}
          initial="initial" animate="animate"
        >
          <motion.div className={styles.content} variants={textVariants}
          initial="initial" animate="animate">
            <motion.h1 variants={textVariants}>UNPLUGGED</motion.h1>
            <motion.h2 variants={textVariants}>2.0</motion.h2>
            <h3> Hardware Hackathon</h3>
          </motion.div>
          
        </motion.div>
      </div>
    </section>


    <section>
        <div className={styles.InfoBarcontainer}>
            <div className={styles.InfoBarContainer}>
            <div className={styles.smallDivs}>
                <img src="/aboutUs.png" alt="" />
                <Link to="/AboutUs">AboutUs</Link>
            </div>
            <div className={styles.smallDivs}>
                <img src="/competitionInfo.png" alt="" />
                <Link to="/CompInfo">Competition Information</Link>
            </div>
            <div className={styles.smallDivs}>
                <img src="/register.png" alt="" />
                <Link to="/Register">Register</Link>
            </div>
            <div className={styles.smallDivs}>
                <img src="/contactUs.png" alt="" />
                <Link to="/ContactUs"> ContactUs</Link>
            </div>
            
            </div>
        </div>
    </section>
    </>
  )
}

export default Intro;