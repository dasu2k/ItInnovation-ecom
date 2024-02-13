import React from 'react'
import styles from './navbar.module.css'
function Navbar() {
  return (
    <div className={styles.navbar}>
      <h4>IT Innovation</h4>
      <div className={styles.NavButtons}>
        <button>profile</button>
        <button>your orders</button>
      </div>
    </div>
  )
}

export default Navbar