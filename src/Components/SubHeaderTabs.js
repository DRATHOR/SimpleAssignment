import React, { useState } from 'react';
import './SubHeaderTabs.css'


const SubHeaderTabs = () => {
  const [active,setActive]=useState(1);
  const tabs = [
    'Log Calls',
    'Tasks',
    'Event',
    'Make Note',
    'Add Attachment',
    'Activity Set',
    'Custom Field',
  ]
const selectTab=(event)=>{
  setActive(event.target.id);

}
  return (
    <div className='subheader_container'>
     {tabs.map((items,i)=>{
      return(
        <div id={i} className={`subheader_items ${active==i?'active_tab':''}`} onClick={selectTab}>
          {items}
        </div>
      )
     })}
    </div>
  )
}

export default SubHeaderTabs