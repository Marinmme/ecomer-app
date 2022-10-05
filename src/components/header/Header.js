import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import {FaShoppingCart,FaUserCircle,FaTimes } from 'react-icons/fa'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
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

const Header = () => {
    const [showMenu,setShowMenu] =useState(false)

    const toggleMenu= ()=>{
        setShowMenu(!showMenu)
    }
    const hideMenu= ()=>{
        setShowMenu(false)
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

     <div>

   
        <ul onClick={hideMenu}>
        <li className={styles["logo-mobile"]}>
          {logo}
          <FaTimes size={20} onClick={hideMenu}></FaTimes>
        </li>
        <li>
            <Link to='/'>
                Home
            </Link>
        </li>
        <li>
            <Link to='/contact'>
                Contact
            </Link>
        </li>
        </ul>
        <div className={styles["header-right"]
    
        }    onClick={hideMenu}>
            <span className={styles.links}>
                <Link to="/login">
                Login
                </Link>
                <Link to="/register">
                register
                </Link>
                <Link to="/order-history">
                My orders
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