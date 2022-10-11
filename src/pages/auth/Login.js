import React,{useState} from 'react'
import styles from './auth.module.scss'
import login from '../../assets/login.png'
import {Link,useNavigate} from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../components/card/Card'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/loader/Loader'
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [iLoading,setILoading] = useState(false);
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    setILoading(true)

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;
   setILoading(false)
   navigate("/")
   toast.success("Login successful")
  })
  .catch((error) => {
    toast.error(error.message)
    setILoading(false)
  })
  }
  return (

    <>
    <ToastContainer></ToastContainer>
        {iLoading && <Loader></Loader>}
      <section className={`container ${styles.auth}`}>
<div className={styles.img}>
<img src={login} alt='' width="400"></img>
</div>
<Card>
<div className={styles.form}>
<h2>Login</h2>

<form onSubmit={handleLogin}>
<input type="text" placeholder="Email" required
value={email} onChange={(e)=>setEmail(e.target.value)}
></input>
<input type="password" placeholder="password" required
value={password} onChange={(e)=>setPassword(e.target.value)}
></input>
<button className="--btn --btn-primary --btn-block"
type="submit"
>
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