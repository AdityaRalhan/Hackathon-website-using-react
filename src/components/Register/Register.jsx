import React, { useState } from 'react'
import styles from './Register.module.css'
import { Link } from 'react-router-dom';
import ThankYou from '../ThankYou/ThankYou';

const Register = () => {

    const [userRegisteration, setUserRegisteration] = useState({
        username : "",
        phone: "",
        email : "",
        password : "",
        TeamName : "",

    });

    const handleInput = (e) =>{
        const name = e.target.name
        const value = e.target.value
        
        setUserRegisteration({...userRegisteration, [name] : value})
    }

    const [record, setRecord] = useState([])

    const handleSubmit = () =>{
        e.preventDefault();

        const newRecord = {...userRegisteration, id: new Date().getTime().toString()}

        setRecord([...record, newRecord]);

        setUserRegisteration({
        username : "",
        phone: "",
        email : "",
        password : "",
        TeamName : "",
        });
    }


  return (
    <>
        <div className={styles.registerContainer}>
            <div className={styles.registerHeading}>
                <h1> Let's Register </h1>
                <p> Fill out the following form and your are good to go</p>
            </div>
        </div>


        <form action="" className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formElement}>
                <label htmlFor="username"> Username</label>
                <input type="text" autoComplete='off ' name='username' id='username' 
                    value={userRegisteration.username} onChange={handleInput} />
            </div>

            <div className={styles.formElement}>
                <label htmlFor="phone"> Phone Number</label>
                <input type="number" autoComplete='off ' name='phone' id='phone'     value={userRegisteration.phone} onChange={handleInput} />
            </div>

            <div className={styles.formElement}>
                <label htmlFor="email"> Email</label>
                <input type="text" autoComplete='off ' name='email' id='email' value={userRegisteration.email} onChange={(handleInput)} />
            </div>

            <div className={styles.formElement}>
                <label htmlFor="password"> Password</label>
                <input type="password" autoComplete='off ' name='password' id='password' value={userRegisteration.password} onChange={handleInput} />
            </div>

            <div className={styles.formElement}>
                <label htmlFor="TeamName"> Team Name</label>
                <input type="text" autoComplete='off ' name='TeamName' id='TeamName' value={userRegisteration.TeamName} onChange={handleInput} />
            </div>
            <Link to= "/ThankYou">
                <button type='submit'> Register </button>
            </Link> 
        </form>
    </>
  )
}

export default Register
