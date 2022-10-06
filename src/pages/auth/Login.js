import React from 'react'
import styles from './auth.module.scss'
import login from '../../assets/login.png'
import {Link} from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../components/card/Card'
const Login = () => {
  return (
    <>
      <section className={`container ${styles.auth}`}>
<div className={styles.img}>
<img src={login} alt='' width="400"></img>
</div>
<Card>
<div className={styles.form}>
<h2>Login</h2>

<form>
<input type="text" placeholder="Email" required></input>
<input type="password" placeholder="password" required></input>
<button className="--btn --btn-primary --btn-block">
  Login
</button>
<div className={styles.links}>
<Link to='/reset'>Reset Password</Link>
</div>
<p>-- or --</p>
</form>
<button className="--btn --btn-danger --btn-block">
<FaGoogle color="#fff"></FaGoogle>
  Login With Google
</button>
<span>
Done'have an account?
<Link to='/register'> Register</Link>
</span>

</div>
</Card>
      </section>
    </>
  )
}

export default Login