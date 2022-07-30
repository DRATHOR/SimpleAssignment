import React from 'react';
import './Lable.css'

const Lable = ({title,required}) => {
  return (
    <div className='lable'>
      {title}{required?'*':''}
    </div>
  )
}

export default Lable