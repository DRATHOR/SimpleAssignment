import React, { useState } from 'react'
import Paper from './Paper'
import Tags from './Tags'
import {Grid} from '@mui/material'
import './Nav.css'

const NavBar = () => {
    const [list, setList] = useState([
     {title:'Status1',},
     {title:'New',},
     {title:'Working',},
     {title:'Nurturing',},
     {title:'Converted',},
    ])
    return (
        <Grid container>
        <div className="nav">
          
            <Paper>
                <div className='nav_items'>
                <Tags data={list} />
                </div>
               
            </Paper>
       
           
        </div>
        </Grid>
    )
}

export default NavBar