import React,{useState} from 'react'
import styles from './auth.module.scss'
import reset from '../../assets/forgot.png'
import {Link} from 'react-router-dom'
import Card from '../../components/card/Card'
import {sendPasswordResetEmail } from "firebase/auth";
import {auth} from '../../firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loader/Loader'
const Reset = () => {
  const [email,setEmail]=useState("")
  const [iLoading,setILoading] = useState(false);
  const handleResetPassword = (e) => {
    e.preventDefault()
    setILoading(true);
    sendPasswordResetEmail(auth, email)
    .then(() => {
 toast.success("Check your email for a reset link")
 setILoading(false);
    })
    .catch((error) => {
        toast.error(error.message)
        setILoading(false);

    });

  }
  return (
    <>
    {iLoading && <Loader></Loader>}
        <section className={`container ${styles.auth}`}>

<Card>
<div className={styles.form}>
<h2>Reset Password</h2>

<form onSubmit={handleResetPassword}>
<input type="text" placeholder="Email" required
value={email} onChange={(e)=>setEmail(e.target.value)}
></input>
<button className="--btn --btn-primary --btn-block"
type="submit"
>
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