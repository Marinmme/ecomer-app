import React from 'react'
import styles from './auth.module.scss'
import register from '../../assets/register.png'
import {Link} from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../components/card/Card'
const Register = () => {
  return (
    <>
       <section className={`container ${styles.auth}`}>

<Card>
<div className={styles.form}>
<h2>Register</h2>

<form>
<input type="text" placeholder="Email" required></input>
<input type="password" placeholder="password" required></input>
<input type="password" placeholder="Confirm Password" required></input>
<button className="--btn --btn-primary --btn-block">
Register
</button>

</form>

<span>
Already an account
<Link to='/login'> Login</Link>
</span>

</div>
</Card>
<div className={styles.img}>
<img src={register} alt='' width="400"></img>
</div>
      </section>
    </>
  )
}

export default Register