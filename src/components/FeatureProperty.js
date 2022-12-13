import React from 'react'
import FeatureCard from './FeatureCard'
import styles from './FeatureCard.module.css'
const FeatureProperty = () => {
  return (
    <>
      <div className={styles['feature-section']}>
        <h1>Feature Property Types</h1>
        <h3>Find all types of heading.</h3>
        <FeatureCard />
      </div>
    </>
  )
}
  
export default FeatureProperty
