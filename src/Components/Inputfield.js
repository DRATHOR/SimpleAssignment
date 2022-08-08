import React from 'react'
import Lable from './Lable'
import './Inputfield.css'

const Inputfield = ({title,required}) => {
  return (
    <>
    <div >
   {title && <Lable title={title} required={required}/>}
    <div className='inputfield'>
      <input type="text"  required={required}  />
      {/* <span className="inputfield_icon"></span> */}
    </div>
    </div>
    </>
  )
}

export default Inputfield