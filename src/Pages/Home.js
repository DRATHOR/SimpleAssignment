import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '../Components/Button'
import Card from '../Components/Card'
import DatePicker from '../Components/DatePicker'
import DropDown from '../Components/DropDown'
import Inputfield from '../Components/Inputfield'
import NavBar from '../Components/NavBar'
import Paper from '../Components/Paper'
import SubHeaderTabs from '../Components/SubHeaderTabs'
import Table from '../Components/Table'
import TextArea from '../Components/TextArea'
import './Home.css'

const About = () => {
    const [details, setDetails] = useState([
        {
            title: 'Informed Product Features',
            description: 'You contacted with ',
            name:'Charles Gomez',
            date: '13 Nov 2018',
            time: '05:49 AM',
            icon:'call',
            color:'blue'
        },
        {
            title: 'Send Product Brochure',
            description: 'You added ToDo task with',
            name:'Arun Var',
            date: '10 Nov 2018',
            time: '06:49 PM',
            icon:'right',
            color:'right'
        },
        {
            title: 'Send Product Brochure',
            description: 'You added a ToDo task with',
            name:'Arun Var',
            date: '10 Nov 2018',
            time: '06:49 PM',
            icon:'list',
            color:'list'
        }, 
        {
            title: 'Informed Product Features',
            description: 'You contacted with ',
            name:'Charles Gomez',
            date: '13 Nov 2018',
            time: '05:49 AM',
            icon:'call',
            color:'blue'
        },
        {
            title: 'Send Product Brochure',
            description: 'You added ToDo task with',
            name:'Arun Var',
            date: '10 Nov 2018',
            time: '06:49 PM',
            icon:'right',
            color:'right'
        },
    ])

  return (
    
       <Grid container spacing={2}>
        <Grid item xs={12}>
            <NavBar/>
        </Grid>
  <Grid item xm={12} sm={12} md={12} lg={8}>
  <Paper>
  <SubHeaderTabs />
                        <div className='container_form'>
                            <Grid container spacing={2}>
                               <Grid item xm={12} sm={12} md={12} lg={8}>
                               <div className='container_form_first'>
                                <DropDown title="Task Type" required />
                                <DropDown title="Assign To" required />
                                <div className="row">
                                    <DatePicker/>
                                    <DatePicker/>

                                    {/* <div className='first'>
                                        <DatePicker title="Start Date" />
                                    </div>
                                    <div className='second'>
                                        <DatePicker title="End Date" />
                                    </div> */}

                                </div>
                                <DatePicker title="Remind On" />

                            </div>
                                </Grid> 
                               <Grid item xm={12} sm={12} md={12} lg={4}>
                               <div className='container_form_second'>
                                <Inputfield title='Select'/>
                                <TextArea title='Details'/>

                            </div>
                                </Grid> 
                            </Grid>
                           
                           
                        </div>
                        <div className='container_action'>
                            <Button title="Cancle" className='mr-10' />
                            <Button title="Apply" className='apply' />
                        </div>

                        <Table />
                        {/* <div className='container_action'>
                            <Button />
                        </div> */}
                    </Paper>
  </Grid>
  <Grid item xm={12} sm={12} md={12} lg={4} >
  <Paper>
                        <DropDown />
                        <hr className='divider'/>
                        {details.map((item, i) => {
                            return (
                                <Grid item xm={12} sm={12} md={12} lg={4}>
                                <Card item={item} index={i} length={details.length-1}/>

                                </Grid>
                            )
                        })}
                    </Paper>
  </Grid>
        </Grid>

  )
}

export default About