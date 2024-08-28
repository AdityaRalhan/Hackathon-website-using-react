import React from 'react'
import styles from './CompInfo.module.css'

const CompInfo = () => {
  return (

      <div className={styles.aboutUsContainer}>
        <h1> Competition <br /> Information </h1>
        <div className={styles.introContainer}>  
            <h2> UNPLUGGED </h2>
            <p> A 24 hour Hardware Hackathon</p>
            <p> The participants are required to present solutions to the given problem statements.This competition is open to all students. Students can participate with a maximum of 6 and minimum of 3 members per team. One person cannot be a member of more than 1 team. Teams should work independantly, sharing answers or collaborating with other teams constitutes cheating. Decision of the judges will be final.</p>
            
            <br /><br />

            
                <h2>Our other competition - DJS SPARK</h2>
            <div className={styles.spark}>
                <p>It's a product development contest wherein the participants are  presented with the opportunity to apply their theoretical knowledge in   order to build an immensely efficient product.</p>
                <p>Participants also have the opportunity to get their technical papers     ratified by a panel of experts</p>
                <p>Students are pitted against not only their peers, but also talented  individuals from all over India</p>
                <br /><br />
            </div>

        </div>
    </div>

  
  )
}

export default CompInfo
