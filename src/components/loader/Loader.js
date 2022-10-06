import React from 'react'
import ReactDOM  from 'react-dom'
import styles from './Loader.module.scss'
import loader from '../../assets/loader.gif'
const Loader = () => {
  return ReactDOM.createPortal (
    <>
    <div className={styles.wrapper} >
    <div className={styles.loader}>
        <img src={loader} alt="Loading... "></img>
    </div>
    </div>

    </>,
    document.getElementById("loader")
  )
}

export default Loader