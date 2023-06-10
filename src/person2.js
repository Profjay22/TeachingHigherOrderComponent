import React from 'react'
import Hoc from './Hoc'
const Person2 = ({hoverfontSize, fontSize}) => {

    
  return (
    <h1 onClick={hoverfontSize} style={{fontSize}}>The font-size is {fontSize}</h1>
  )
}

export default Hoc(Person2)