import React from 'react'
import img1 from '../../Assets/eventimg/ML.jpg'
import calender from '../../Assets/elements/calender.jpg'
import clock from '../../Assets/elements/clock.png'
import loc from '../../Assets/elements/loc.png'
import './Event.css'

const Event = ({ img, title, link, id }) => {
  return (
  <>
    <h1 className='title'>Event</h1>
    <div className='maindiv'>
    
    <div className=''>
   <img src={img1} className='img'/>
   </div>
    
   
    <div className='event'>
        <span className='event-title'>Machine Learning</span>
      
        <div>
         <div className='event-details'>
            <img src={calender} className='icon'/>
            <span className=''>04 April,2022 - 06 April,2022</span>
         </div>
         <div className='event-details'>
            <img src={clock} className='icon'/>
            <span className=''> 4 PM - 6 PM</span>
         </div>
         <div className='event-details'>
            <img src={loc} className='icon'/>
            <span className=''>Google Meet</span>
         </div>
         </div>



    </div>

    </div>



  </>
  )
}

export default Event