import React from 'react'
import Lable from './Lable'
import { AiOutlineCalendar } from 'react-icons/ai';
import './DatePicker.css'

const DatePicker = ({title,required}) => {
  return (
    <>
    <div >
    <Lable title={title} required={required}/>
    <div className='datepicker'>
      <input type="text"  required={required}  />
      <span className="datepicker_icon">
        <AiOutlineCalendar style={{fill:'#E29D0B'}}/>
      </span>
    </div>
    </div>
    </>
  )
}

export default DatePicker