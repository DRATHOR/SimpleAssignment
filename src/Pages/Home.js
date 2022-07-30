import React, { useState } from 'react'
import { Button } from '../Components/Button'
import Card from '../Components/Card'
import DatePicker from '../Components/DatePicker'
import DropDown from '../Components/DropDown'
import Inputfield from '../Components/Inputfield'
import NavBar from '../Components/NavBar'
import Table from '../Components/Table'
import Tabs from '../Components/Tabs'
import SubHeaderTabs from '../Components//SubHeaderTabs'
import TextArea from '../Components/TextArea'
import './Home.css'
import Paper from '../Components/Paper'

const Home = () => {
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
        <div className='home'>
            <NavBar />
            <Tabs />
            <div className='container'>
                <div class="container_first">
                    <Paper>
                        <SubHeaderTabs />
                        <div className='container_form'>
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
                            <div className='container_form_second'>
                                <Inputfield title='Select'/>
                                <TextArea title='Details'/>

                            </div>
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



                </div>
                <div class="container_second">
                    <Paper>
                        <DropDown />
                        <hr className='divider'/>
                        {details.map((item, i) => {
                            return (
                                <Card item={item} index={i} length={details.length-1}/>
                            )
                        })}
                    </Paper>

                </div>

            </div>
            {/* header */}
            {/* tabs */}
            {/* split div */}
            {/* first div */}
            {/* tabs header */}
            {/* split div */}
            {/* first div */}
            {/*dropdown -2 */}
            {/* 2 date picken in one row */}
            {/* date picker in one row */}
            {/* second div */}
            {/* one input */}
            {/* text area  */}
            {/* bottom bar having 2-button  */}
            {/* Table */}
            {/* view more button with down arrow */}
            {/* ------------------------------------------- */}
            {/* second div */}
        </div>
    )
}

export default Home