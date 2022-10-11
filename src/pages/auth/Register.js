import React,{useState} from 'react'
import styles from './auth.module.scss'
import register from '../../assets/register.png'
import {Link,useNavigate} from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import Card from '../../components/card/Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{auth} from '../../firebase/config'
import Loader from '../../components/loader/Loader';
const Register = () => {
  const [email,setEmail] =useState("")
  const [password,setPassword] = useState("")
  const [cpassword,setCPassword]= useState("")
  const [iLoading,setILoading] = useState(false)

  const navigate = useNavigate()

  const registerUser  = (e) => {
    e.preventDefault()
    console.log(email,password,cpassword)
    if(password !== cpassword){
      toast.error("Password do not match")
    }
 setILoading(true);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setILoading(false)
    toast.success("Register is successful")
    navigate("/login")
    // ...
  })
  .catch((error) => {
    toast.error(error.message);
    setILoading(false)
  });
  }
  return (
    <>
    <ToastContainer></ToastContainer>
    {iLoading && <Loader></Loader>}
       <section className={`container ${styles.auth}`}>

<Card>
<div className={styles.form}>
<h2>Register</h2>

<form onSubmit={registerUser}>
<input type="text" placeholder="Email" required
value={email} onChange={(e)=>setEmail(e.target.value)}
></input>
<input type="password" placeholder="password" required
value={password} onChange={(e)=>setPassword(e.target.value)}
></input>
<input type="password" placeholder="Confirm Password" required
value={cpassword} onChange={(e)=>setCPassword(e.target.value)}
></input>
<button className="--btn --btn-primary --btn-block"
type="submit"
>
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