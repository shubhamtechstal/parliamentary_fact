import React from 'react'

function SectionHeading({title}) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <div style={{height:'10px',width:'10px', background:'#f1807c'}} />
        <h3>{title}</h3>
    </div>
  )
}

export default SectionHeading