import React, { useState } from 'react';
import './DropDown.css'
import Lable from './Lable';
import {IoIosArrowDown } from 'react-icons/io';



const DropDown = ({title,required}) => {
  const [isOpen,setIsOpen]=useState('false');
  const [list,setList]=useState([
    {name:'select'},
    {name:'select'},
    {name:'select'},
    {name:'select'},
    {name:'select'},
    {name:'select'},

  ]);
  const onClickHandlar=()=>{
setIsOpen(!isOpen);
  }

  return (
    <div>
   {title&& <Lable title={title} required={required}/>}
    {/* <div className='dropdown'>
      <input type="text" required={required}/><span className="dropdown_arrow" onClick={onClickHandlar}><IoIosArrowDown/></span>
    </div>
    <div className="lists">
      <div className="lists_items">
          dsgsrjdtjfkgkfyu
      </div>
    </div> */}
    <div class="col-75">
        <select id="list" name="list">
          <option value="select">Select</option>
          <option value="select">Select 1</option>
          <option value="select">Select 2</option>
          <option value="select">Select 3</option>
         
        </select>
      </div>
    </div>
    
  )
}

export default DropDown