import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import './Quick.css'

const QuickDetails = ({ event }) => {


  return (
    <>

      <div className="bg-div">
        <div className="upper-div">
          <div className="imgdiv">
            <img
              src={event.Banner}
              className="img"
            />
          </div>

          <div className="event">
            <span className="event-title">{event.Name}</span>

            <div>
              <div className="event-details">
                <img
                  src="https://images.unsplash.com/photo-1695173585480-e4d0724ec5b5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="icon"
                  alt=''
                />
                <span className="">{event.Date}</span>
              </div>
              <div className="event-details">
                <img
                  src="https://images.unsplash.com/photo-1695173585480-e4d0724ec5b5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="icon"
                  alt=''
                />
                <span className="">{event.time}</span>
              </div>
              <div className="event-details">
                <img
                  src="https://images.unsplash.com/photo-1695173585480-e4d0724ec5b5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="icon"
                  alt=''
                />
                <span className="">{event.location}</span>
              </div>
            </div>

            <div className="tags">
              <div className="tag free"># {event.tags[0]}</div>
              <div className="tag upcoming"># {event.tags[1]}</div>
              <div className="tag workshop"># {event.tags[2]}</div>
            </div>

            <hr className="hr-line" />

            <div className="mentor">
              <div className="">
                <div className="mentortxt">
                  <FaChalkboardTeacher className='mentoricon' />
                  <span>Mentor</span>
                </div>
                <div className="mentorname">
                  <img
                    src={event.mentor.photoUrl}
                    className="mentorimg"
                  />

                  <div>
                    <b>{event.mentor.name}</b>
                    <p>{event.mentor.post}</p>
                  </div>
                </div>
              </div>

              <div>
                <span className="attendees">Attendees :</span>
                <p className="attendeesname">
                  Sanchit Pandey, Bipin Khatri, Sujan Khatri,{" "}
                  <a
                    className="attendeesnamehover"
                    title={event.attendees.listOfAttendees}>

                    {event.attendees.numberOfAttendees} others

                  </a>{" "}
                </p>
              </div>
            </div>

            <hr className="hr-line" />

            <div className="wholesummary">
              <h2 className="event-summary-title">Event Summary</h2>
              <p className="event-summary-text">
                {event.summary}{" "}
              </p>
            </div>

            <div className="button">
              <a href={event.registrationUrl}>Register Now</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default QuickDetails