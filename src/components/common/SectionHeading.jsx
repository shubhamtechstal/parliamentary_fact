import React from 'react'
import Text from './Text'

function SectionHeading({title}) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <Text variant='h3' sx={{fontSize:'1rem', fontWeight: '600', my:1}} >  <span
            style={{
              display: 'inline-block',
              width: '14px',
              height: '14px',
              backgroundColor: '#f1807c',
              // borderRadius: '3px',
              marginRight: '6px',
            }}
          ></span>{' '} {title}</Text>
    </div>
  )
}

export default SectionHeading