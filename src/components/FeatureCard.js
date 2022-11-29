import React from 'react'
import h1 from './Images/h1.png'
import h2 from './Images/h2.png'
import h3 from './Images/h3.png'
import h4 from './Images/h4.png'
import h5 from './Images/h5.png'

const FeatureCard = () => {
  return (
    <div>
      <div>
        <img className= src={h1} alt='h1'></img>
      </div>
      <h4>Family House</h4>
      <p>88 Property</p>
      <div>
        <img src={h2} alt='h2'></img>
      </div>
      <h4>House & Vila</h4>
      <p>54 Property</p>
      <div>
        <img src={h3} alt='h3'></img>
      </div>
      <h4>Apartment</h4>
      <p>121 Property</p><div>
        <img src={h4} alt='h4'></img>
      </div>
      <h4>Office & Studio</h4>
      <p>44 Property</p><div>
        <img src={h5} alt='h5'></img>
      </div>
      <h4>Villa & Condo</h4>
      <p>143 Property</p>
    </div>
  )
}

export default FeatureCard
