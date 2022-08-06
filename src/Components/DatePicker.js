import React, { useState } from 'react'
import Lable from './Lable'
import { AiOutlineCalendar } from 'react-icons/ai';
import './DatePicker.css'

const DatePicker = ({title,required}) => {
const date=`${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2,'0')}-${new Date().getDay().toString().padStart(2,'0')}`;
console.log(date)
  return (
    <>
    <div >
    <Lable title={title} required={required}/>
    <div className='datepicker'>
      <input type="date"  value={date.toString()} required={required}  />
      {/* <span className="datepicker_icon" >
        <AiOutlineCalendar style={{fill:'#E29D0B'}}/>
      </span> */}
    </div>
    {/* <div className="lists">
      hi
    </div> */}
    </div>
    </>
  )
}

export default DatePicker