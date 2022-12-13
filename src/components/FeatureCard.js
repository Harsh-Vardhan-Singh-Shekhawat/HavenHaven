import React from 'react'
import h1 from './Images/h1.png'
import h2 from './Images/h2.png'
import h3 from './Images/h3.png'
import h4 from './Images/h4.png'
import h5 from './Images/h5.png'
import styles from './FeatureCard.module.css'
const FeatureCard = () => {
  return (
    <div className={styles['feature-container']}>
      <div className={styles['feature-item']}>
        <div>
          <img className={styles['feature-img']} src={h1} alt='h1'></img>
        </div>
        <div>
          <p><b>Family House</b><br></br>91 Property</p>
        </div>
      </div>
      <div className={styles['feature-item']}>
        <div>
          <img className={styles['feature-img']} src={h2} alt='h1'></img>
        </div>
        <div>
          <p><b>House & Villa</b><br></br> 121 Property</p>
        </div>
      </div>
      <div className={styles['feature-item']}>
        <div>
          <img className={styles['feature-img']} src={h3} alt='h1'></img>
        </div>
        <div>
          <p><b>Apartment</b> <br></br>88 Property</p>
        </div>
      </div>
      <div className={styles['feature-item']}>
        <div>
          <img className={styles['feature-img']} src={h4} alt='h1'></img>
        </div>
        <div>
          <p><b>Office & Studio</b> <br></br>88 Property</p>
        </div>
      </div>
      <div className={styles['feature-item']}>
        <div>
          <img className={styles['feature-img']} src={h5} alt='h1'></img>
        </div>
        <div>
          <p><b>Villa & Condo</b> <br></br>88 Property</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
