import React from 'react'
import styles from './Details.module.css'
import {GrLocation} from 'react-icons/gr'
import {BsTelephone} from "react-icons/bs"
import {FiVoicemail} from 'react-icons/fi'
import {TfiAlarmClock} from "react-icons/tfi"

const Details = () => {
  return (
    <section className={styles['detail-sec']}>
      <div className={styles['detail-cont']}>
        <div className={styles['detail-sub-cont']}>
            <GrLocation className={styles['detail-icon']} />
            <p className={styles['detail-heading']}>LOCATION</p>
            <p>Leverage agile frameworks to</p>
        </div>
        <div className={styles['detail-sub-cont']}>
            <BsTelephone className={styles['detail-icon']} />
            <p className={styles['detail-heading']}>TELEPHONE</p>
            <p>+91 123 456 7890</p>
        </div>
        <div className={styles['detail-sub-cont']}>
            <FiVoicemail className={styles['detail-icon']} />
            <p className={styles['detail-heading']}>E-MAIL</p>
            <p>abc@gmail.com</p>
        </div>
        <div className={styles['detail-sub-cont']}>
            <TfiAlarmClock className={styles['detail-icon']} />
            <p className={styles['detail-heading']}>WORKING HOURS</p>
            <p>Tue – Sun: 9 AM – 6 PM</p>
        </div>

      </div>
    </section>
  )
}

export default Details
