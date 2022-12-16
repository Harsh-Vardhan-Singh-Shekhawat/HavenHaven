import React from 'react'
import salesimg from '../Images/inner_team_01.jpg'
import styles from './Sales.module.css'


const Sales = () => {
  return (
    <section className={styles['sales-sec']}>
      <div className={styles['sales-cont']}>
        <div className={styles['sales-cont-l']}>
            <p className={styles['sales-post']}>SALES MANAGER</p>
            <h1 className={styles['sales-name']}>Sanjana Singh</h1>
            <form className={styles['sales-form']}>
                <div className={styles['input-field']}>
                    <input placeholder='Name' required></input>
                    <input placeholder='Phone Number' required></input>
                </div>
                <input placeholder='Email' required></input>
                <textarea placeholder='Your Message'></textarea>
                <button className={styles['send-btn']}>Send</button>
            </form>
        </div>
        <div>
            <img className={styles['sales-img']} src={salesimg} alt='img'></img>
        </div>
      </div>
      
    </section>
  )
}

export default Sales
