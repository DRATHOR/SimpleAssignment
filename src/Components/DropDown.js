import React from 'react';
import './DropDown.css'
import Lable from './Lable';
import {IoIosArrowDown } from 'react-icons/io';


const DropDown = ({title,required}) => {
  return (
    <>
    <Lable title={title} required={required}/>
    <div className='dropdown'>
      <input type="text" required={required}/><span className="dropdown_arrow"><IoIosArrowDown/></span>
    </div>
    </>
    
  )
}

export default DropDown