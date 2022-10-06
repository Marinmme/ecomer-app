import React from 'react'
import styles from './auth.module.scss'
import reset from '../../assets/forgot.png'
import {Link} from 'react-router-dom'
import Card from '../../components/card/Card'
const Reset = () => {
  return (
    <>
        <section className={`container ${styles.auth}`}>

<Card>
<div className={styles.form}>
<h2>Reset Password</h2>

<form>
<input type="text" placeholder="Email" required></input>
<button className="--btn --btn-primary --btn-block">
Reset Password
</button>
<div className={styles.links}>
<p>
<Link to='/login'> Login</Link>
</p>
<p>
<Link to='/register'> Register</Link>
</p>
</div>




</form>


</div>
</Card>
<div className={styles.img}>
<img src={reset} alt='' width="400"></img>
</div>
      </section>
    </>
  )
}

export default Reset