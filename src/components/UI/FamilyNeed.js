import React from 'react'
import styles from './FamilyNeed.module.css'
import {SlPlane} from "react-icons/sl"
import {GiKidSlide,GiBarbecue} from "react-icons/gi"
import {IoCarSportOutline} from "react-icons/io5"
const FamilyNeed = () => {
  return (
    <section className={styles['family-need-sec']}>
      <div className={styles['family-need-cont']}>
        <div className={styles['fn-card']}>
            <SlPlane className={styles['fn-icons']} />
            <h3 className={styles['fn-heading']}>FACILTIES FROM HOME</h3>
            <p className={styles['']}>All transport facilities are half an hour away</p>
        </div>
        <div className={styles['fn-card']}>
            <GiKidSlide className={styles['fn-icons']} />
            <h3 className={styles['fn-heading']}>KIDS PLAYGROUND</h3>
            <p className={styles['']}>Iterative approaches to corporate strategy foster</p>
        </div>
        <div className={styles['fn-card']}>
            <GiBarbecue className={styles['fn-icons']} />
            <h3 className={styles['fn-heading']}>BBQ AREA</h3>
            <p className={styles['']}>Organically grow the holistic world view via project</p>
        </div>
        <div className={styles['fn-card']}>
            <IoCarSportOutline className={styles['fn-icons']} />
            <h3 className={styles['fn-heading']}>PARKING GARAGE</h3>
            <p className={styles['']}>Bring to the table win-win survival strategies manage</p>
        </div>
      </div>
    </section>
  )
}

export default FamilyNeed
