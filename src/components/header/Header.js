import React,{useEffect, useState} from 'react'
import { Link,NavLink,useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import {FaShoppingCart,FaUserCircle,FaTimes } from 'react-icons/fa'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { signOut } from "firebase/auth";
import {auth} from '../../firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from 'react-redux'
import {SET_ACTIVE_USER,REMOVE_ACTIVE_USER} from '../../redux/slice/authSlice'
const logo = (
    <div className={styles.logo}>
    <Link to="/">
    <h2>
        e<span>Shop</span>
    </h2>
    </Link>
        </div>
)
const cart = (
    <span className={styles.cart}>
            <Link to="/cart">
            Cart<FaShoppingCart
            size={20}
            >
            </FaShoppingCart>
            <p>0</p>
            </Link>
            </span>
)

const activeLink = ({isActive})=>
(isActive ? `${styles.active}`: "")

const Header = () => {
    const dispatch = useDispatch()

    const [showMenu,setShowMenu] =useState(false)
    const [displayName ,setdisplayName] = useState("")

    //Monitor current sign in user
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
           
              const uid = user.uid;
              console.log(user.displayName)
              setdisplayName(user.displayName)

              dispatch(SET_ACTIVE_USER({
                email: user.email,
                userName: user.displayName ? user.displayName : displayName,
                userID: user.uid,
              }))
        
            } else {
                setdisplayName("")
                dispatch(REMOVE_ACTIVE_USER());
            }
          });
    },[dispatch, displayName])

    const toggleMenu= ()=>{
        setShowMenu(!showMenu)
    }
    const hideMenu= ()=>{
        setShowMenu(false)
    }

    //logoutUser
    const navigate = useNavigate()
    const logoutUser = ()=>{
   
        signOut(auth).then(() => {
            toast.success("Logout successful")
            navigate("/")
          }).catch((error) => {
           toast.error(error.message)
          })
    }
  return (
    <header>
        <div className={styles.header}>
     {logo}
     <nav className=
     {
        showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
     }>
     <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
     : `${styles["nav-wrapper"]}`
     
     }  onClick={hideMenu} >
      
     </div>

     <ul onClick={hideMenu}>
        <li className={styles["logo-mobile"]}>
          {logo}
          <FaTimes size={20} onClick={hideMenu}></FaTimes>
        </li>
        <li>
            <NavLink to='/' className={activeLink
            }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/contact' className={activeLink}>
                Contact
            </NavLink>
        </li>
        </ul>
     <div>

   
        <div className={styles["header-right"]
    
        }    onClick={hideMenu}>
            <span className={styles.links}>
                <Link to="/login">
                Login
                </Link>
                <a >
            <FaUserCircle size={15}></FaUserCircle>
            Hi,{displayName}
                </a>
                <Link to="/register">
                register
                </Link>
                <Link to="/order-history">
                My orders
                </Link>
                <Link to="/"
                onClick={logoutUser}>
              Logout
                </Link>
            </span>
        {cart}
        </div>
        </div>
     </nav>

<div className={styles["menu-icon"]}>
{cart}


 <HiOutlineMenuAlt3 size={20} onClick={toggleMenu}></HiOutlineMenuAlt3> 
 



</div>

        </div>
    </header>
  )
}

export default Header