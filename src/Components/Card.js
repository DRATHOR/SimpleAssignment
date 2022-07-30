import React from 'react'
import { MdCall } from 'react-icons/md';
import {IoIosArrowDown } from 'react-icons/io';
import {BsCheck2 } from 'react-icons/bs';
import {IoMdListBox } from 'react-icons/io';



import './Card.css'

const Card = ({item,index,length}) => {
  return (
    <>
    <div className='card'>
    <div className='card_details'>
      <div className='card_icon'>
        <div className={`card_icon_circle ${item.color}`}>
       {item.icon==='call'&& <MdCall size={30} style={{fill:'#4880FF'}}/>}
       {item.icon==='right'&& <BsCheck2 size={30} style={{fill:'#66BB6A'}}/>}
       {item.icon==='list'&& <IoMdListBox size={30} style={{fill:'#F37D36'}}/>}

        </div>
       
      </div>
      <div className='card_info'>
        <h4>{item.title}</h4>
        <p>{item.description}{' '}<span className='card_name_info'>{item.name}</span></p>
        <div className="time_info">
          <div>
            <p className="date_time">{item.date}</p>
          </div>
          <div>
            <p className="date_time">{item.time}</p>
          </div>
        </div>
        <div className="more">
       <IoIosArrowDown/>
      </div>
    </div>
      </div>
      
    </div>
    
       
  { index!==length&& <div className='vertical_line'>

    </div>}
    </>

  )
}

export default Card