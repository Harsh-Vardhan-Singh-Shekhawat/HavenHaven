import React from 'react'
import styles from './ComfortableLiving.module.css'
import fDisplay from '../Images/inner_slider_01.jpg'
const ComfortableLiving = () => {
  return (
    <section className={styles['living-section']}>
      <div className={styles['living-container']}>
        <div className={styles['living-sub-container']}>
            <div className={styles['color-text']}>
                <span className={styles['span-box']}></span>
                <span className={styles['span-box-2']}>WITH FAMILY IN MIND</span>
            </div>
            <h1 className={styles['comf-heading']}>Comfortable <i className={styles['living-color']}> Living</i></h1>
        </div>
        <div className={styles['interior-btn-div']}>
            <button className={styles['interior-btn']}>Interiors</button>
        </div>
      </div>
      <div className={styles['comf-para']}>
        A peaceful green oasis, children's playgrounds and nearby lake make this an ideal place for life, relaxation, recreation and socializing. Every space is created with family life in mind, with the space for every generation. This property is located in the beautiful part.
      </div>
        
      <div className={styles['f-display-container']}>
        <div className={styles['first-display']}>
            <div className={styles['left-fDisplay']}>
                <h1 className={styles['comf-heading']}>Cozy & Functional Interiors</h1>
                <p>
                    Energy efficiency simply means using less energy to perform the same task – that is, eliminating energy waste. Energy efficiency brings a variety of ecological benefits.
                </p>
            </div>
            <div>
                <img className={styles['fDisplay-img']} src={fDisplay} alt='fDisplay'></img>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ComfortableLiving
