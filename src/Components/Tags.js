import React, { useState } from 'react';
import { FcOk } from 'react-icons/fc';
import './Tags.css'

const Tags = ({ data }) => {
    const [selectedTag,setSelectedTag]=useState(0);
    const onClickHandler=(event)=>{
console.log(event)
        setSelectedTag(event.target.id);
    }
    return (
        <div className='tags_main'>

            {data.map((item, index) => {

                if (index === 0)
                    return <div id={index} className={`tags ${index==selectedTag?'success':''}`} onClick={onClickHandler}>
                        <div  id={index}  className="Tags_container" onClick={onClickHandler}>
                        </div>
                        <div className='tags_title'>
                           {item.title}
                            <div className='circle'>
                               {index==selectedTag&& <FcOk size={30} />}
                            </div>
                        </div>
                    </div>

                if (index !== 0 && index !== data.length - 1)
                    return (

                        <div id={index} className={`tags ${index-1==selectedTag?'warn':''} ${' '}${index==selectedTag?'success':''}`} onClick={onClickHandler}>
                            <div className="Tags_container">
                            </div>
                            <div className='tags_title'>
                            {item.title}
                            <div className='circle'>
                            {index==selectedTag&& <FcOk size={30} />}
                            </div>
                        </div>
                            <div className="Tags_container_back">
                            </div>
                        </div>

                    )
                else
                    return <div id={index} className={`tags  border-right ${index-1==selectedTag?'warn':''}`}>
                        <div className="Tags_container_last">
                        </div>
                        <div className='tags_title'>
                            {item.title}
                            <div className='circle mr-10'>
                            {index==selectedTag&& <FcOk size={30} />}
                            </div>
                        </div>
                    </div>
            })}
        </div>
    )
}

export default Tags