import React from 'react'
import styles from './Card.module.css'
import img1 from '../Images/p-1.png'
const Card = () => {
  return (
    <div className={styles['card']}>
        <div>
            <img className={styles['card-img']} src={img1} alt='house-img'></img>
        </div>
        <div className={styles['price-div']}>
            <h2>
                ₹2100000
            </h2>
            <p>Address</p>
        </div>
        <div className={styles['hr-line']}></div>
        <div className={styles['home-details-container']}>
            
            <p className={styles['home-details-item']}>3 bedroom</p>
            <p className={styles['home-details-item']}>4 bathroom</p>
            <p className={styles['home-details-item']}>360m Living Area</p>
        </div>
        
    </div>
  )
}

export default Card
