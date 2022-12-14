import React from 'react'
import styles from './SecondDisplay.module.css'
import SecondDisplayContent from './SecondDisplayContent'
import sDisplay from '../Images/interactive_image-1280x733.jpg'
const SecondDisplay = () => {
  return (
    <section className={styles['second-disp-section']}>
      <div className={styles['second-disp-container']}>
        <div>
            <h1 className={styles['sec-disp-heading']}>123 Waverly Road, <i>Melbourne VIC</i></h1>
        </div>
        <div>
            <div>
                <img className={styles['sDisplay-img']} src={sDisplay} alt='sDisplay'></img>
            </div>
            <div>
                <SecondDisplayContent />
            </div>
        </div>
      </div>
    </section>
  )
}

export default SecondDisplay
