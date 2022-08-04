import React, { useState } from 'react';
import {Grid} from '@mui/material'
import './SubHeaderTabs.css'


const SubHeaderTabs = () => {
  const [active, setActive] = useState(1);
  const tabs = [
    'Log Calls',
    'Tasks',
    'Event',
    'Make Note',
    'Add Attachment',
    'Activity Set',
    'Custom Field',
  ]
  const selectTab = (event) => {
    setActive(event.target.id);

  }
  return (
    <Grid container spacing={0}>

      {tabs.map((items, i) => {
        if(i===4)
        return(
          <Grid item xm={4} sm={4} md={3} lg={2.2}>
            <div id={i} className={`subheader_items ${active == i ? 'active_tab' : ''}`} onClick={selectTab}>
            {items}
          </div>
          </Grid>
        )
        if(i===6){
          return(
            <Grid item xm={4} sm={4} md={3} lg={2}>
              <div id={i} className={`subheader_items ${active == i ? 'active_tab' : ''}`} onClick={selectTab}>
              {items}
            </div>
            </Grid>
          ) 
        }
        else
      return (
        <Grid item xm={4} sm={4} md={3} lg={1.5}>
          <div id={i} className={`subheader_items ${active == i ? 'active_tab' : ''}`} onClick={selectTab}>
          {items}
        </div>
        </Grid>
      )
      })}
  
    </Grid>
    
  )
}

export default SubHeaderTabs