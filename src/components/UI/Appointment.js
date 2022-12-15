import React from 'react'
import styles from './Appointment.module.css'
import {CiMobile3} from 'react-icons/ci'
const Appointment = () => {
  return (
    <section className={styles['app-sec']}>
      <div className={styles['app-cont']}>
        <h1>Looking For More ?</h1>
        <h1>Book an <i>Appointment</i></h1>
      </div>
      <div className={styles['app-ctn-cont']}>
        <CiMobile3 className={styles['mob-icon']} />
        <div className={styles['app-ctn-sub-cont']}>
            <p>RESERVE YOUR SPOT</p>
            <h2>+91 123 456 7890</h2>
        </div>
      </div>
    </section>
  )
}

export default Appointment
