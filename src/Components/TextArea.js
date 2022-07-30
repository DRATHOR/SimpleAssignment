import React from 'react'
import Lable from './Lable'
import './TextArea.css'

const TextArea = ({title,required}) => {
  return (
    <>
    <div >
    <Lable title={title} required={required}/>
    <div className='text_container'>
      <textarea  rows='10' cols="auto" className='textarea_main'/>
      <span className="textarea_icon"></span>
    </div>
    </div>
    </>
  )
}

export default TextArea