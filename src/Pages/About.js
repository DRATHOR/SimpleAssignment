import React, { useState } from 'react'
import { Button } from '../Components/Button'
import Card from '../Components/Card'
import DatePicker from '../Components/DatePicker'
import DropDown from '../Components/DropDown'
import Inputfield from '../Components/Inputfield'
import NavBar from '../Components/NavBar'
import SubHeaderTabs from '../Components/SubHeaderTabs'
import Table from '../Components/Table'
import Tabs from '../Components/Tabs'
import TextArea from '../Components/TextArea'
import './About.css'

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
    <div className='container'>
      <div className='nav'>
        <NavBar />
      </div>
      <div className='subheadertab'>
        <Tabs />
      </div>
      <div className='container1'>
        <div className="tabs"><SubHeaderTabs /></div>
        <div className="form1">
          <DropDown title="Task Type" required />
          <DropDown title="Assign To" required />
          <div className="row">
            <DatePicker className='datepicker1' />
            <DatePicker className='datepicker2' />
          </div>
          <DatePicker title="Remind On" />
        </div>
        <div className="form2">
          <Inputfield title='Select' />
          <TextArea title='Details' />

          <div className='action'>
            <div className="first_action">  <Button title="Cancle" className='mr-10' /></div>
            <div className="second_action"><Button title="Apply" className='apply' /></div>
          </div>
        </div>
        <div className='table'>
        <Table />
        </div>
        
      </div>
      <div className='container2'>
      <DropDown />
    <div className='divider'>

    </div>
      <div className='card_info'>
      {details.map((item, i) => {
                            return (
                                 <Card item={item} index={i} length={details.length-1}/>
                            )
                        })}
      </div>
      </div>
    </div>
  )
}

export default About