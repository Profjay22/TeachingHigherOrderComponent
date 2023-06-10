import React from 'react'
import Hoc from './Hoc'
const Person1 = ({hoverfontSize, fontSize}) => {
    
  return (
    <h2 onMouseOver={hoverfontSize} style={{fontSize}} >The font-size is {fontSize}</h2>
  )
}

export default Hoc(Person1)