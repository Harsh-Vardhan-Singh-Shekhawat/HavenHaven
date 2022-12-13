import React from 'react'
import styles from './RecentProperty.module.css'
import Card from './components/UI/Card'
const RecentProperty = () => {
  return (
    <div className={styles['recent-prop-container']}>
        <h1>Recent Property Listed</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <Card />
    </div>
  )
}

export default RecentProperty
