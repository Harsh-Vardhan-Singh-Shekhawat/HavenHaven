import React from 'react'
import styles from './ComfortableLiving.module.css'
import fDisplay from '../Images/inner_slider_01.jpg'

const FirstDisplay = () => {
  return (
    <section className={styles['f-disp-sec']}>
      <div className={styles['f-display-container']}>
        <div className={styles['first-display']}>
            <div className={styles['left-fDisplay']}>
                <h1 className={styles['comf-heading']}>Cozy & Functional <i>Interiors</i></h1>
                <p>
                    Energy efficiency simply means using less energy to perform the same task – that is, eliminating energy waste. Energy efficiency brings a variety of ecological benefits.
                </p>
            </div>
            <div className={styles['right-display']}>
                <img className={styles['fDisplay-img']} src={fDisplay} alt='fDisplay'></img>
            </div>
        </div>
      </div>

    </section>
  )
}

export default FirstDisplay
