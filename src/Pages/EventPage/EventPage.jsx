import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { FaChalkboardTeacher } from "react-icons/fa";
import "./eventPage.css";

import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const EventPage = () => {
  const [event, setEvent] = useState([]);

  const { eventId } = useParams();
  useEffect(() => {
    fetch("../events/events.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setEvent(myJson[eventId]);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="nav-ignore"></div>
      <div className="maindiv">
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
                  />
                  <span className="">04 April,2022 - 06 April,2022</span>
                </div>
                <div className="event-details">
                  <img
                    src="https://images.unsplash.com/photo-1695173585480-e4d0724ec5b5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="icon"
                  />
                  <span className=""> 4 PM - 6 PM</span>
                </div>
                <div className="event-details">
                  <img
                    src="https://images.unsplash.com/photo-1695173585480-e4d0724ec5b5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="icon"
                  />
                  <span className="">Google Meet</span>
                </div>
              </div>

              <div className="tags">
                <div className="tag free">$Free</div>
                <div className="tag upcoming">#upcomingevent</div>
                <div className="tag workshop">#MachineLearning</div>
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
                      src="https://plus.unsplash.com/premium_photo-1690440686747-6fa153013e4c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                      className="mentorimg"
                    />

                    <div>
                      <b>Sanchit Pandey</b>
                      <p>Front-End Developer</p>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="attendees">Attendees :</span>
                  <p className="attendeesname">
                    Bipin Khatri, Sujan Khatri,{" "}
                    <a
                      className="attendeesnamehover"
                      title="Sanchit Pandey, Prabesh Bhandari, Pratish Bhandari"
                    >
                      8 others
                    </a>{" "}
                  </p>
                </div>
              </div>

              <hr className="hr-line" />

              <div className="wholesummary">
                <h2 className="event-summary-title">Event Summary</h2>
                <p className="event-summary-text">
                  Bachelor of Science in Computer Science and Information
                  Technology (BSc. CSIT) is a four years degree launched by
                  Tribhuvan University. BSc. CSIT program is being run by 10
                  constituent campus and 43 private campus under the affiliation
                  of TU. BSc. CSIT course is a blend of both Computer Science
                  and Information Technology i.e. it is a mixture of core
                  courses that you find in a computer science degree and
                  information technology degree. By that it means that students
                  will get to stuudy both software development along with
                  networking. If we compare computer science degree with
                  Information Technology degree then we can find application
                  development related course in a computer science degree
                  whereas we can find network and system related subjects in an
                  Information Technology degree.{" "}
                </p>
              </div>

              <div className="button">
                <a href="">Register Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="middle-div">
          <div className="middle-contents">
            <span className="heading">What is Machine Learning ?</span>
            <p className="description">
              Machine learning is a branch of artificial intelligence (AI) and
              computer science which focuses on the use of data and algorithms
              to imitate the way that humans learn, gradually improving its
              accuracy. IBM has a rich history with machine learning. One of its
              own, Arthur Samuel, is credited for coining the term, “machine
              learning” with his research (link resides outside ibm.com) around
              the game of checkers. Robert Nealey, the self-proclaimed checkers
              master, played the game on an IBM 7094 computer in 1962, and he
              lost to the computer. Compared to what can be done today, this
              feat seems trivial, but it’s considered a major milestone in the
              field of artificial intelligence.
            </p>

            <br />

            <span className="heading">About Mentor?</span>
            <p className="description">
              Machine learning is a branch of artificial intelligence (AI) and
              computer science which focuses on the use of data and algorithms
              to imitate the way that humans learn, gradually improving its
              accuracy. IBM has a rich history with machine learning. One of its
              own, Arthur Samuel, is credited for coining the term, “machine
              learning” with his research (link resides outside ibm.com) around
              the game of checkers. Robert Nealey, the self-proclaimed checkers
              master, played the game on an IBM 7094 computer in 1962, and he
              lost to the computer. Compared to what can be done today, this
              feat seems trivial, but it’s considered a major milestone in the
              field of artificial intelligence.
            </p>

            <br />

            <span className="heading">Hello mic test 123</span>
            <p className="description">
              Machine learning is a branch of artificial intelligence (AI) and
              computer science which focuses on the use of data and algorithms
              to imitate the way that humans learn, gradually improving its
              accuracy. IBM has a rich history with machine learning. One of its
              own, Arthur Samuel, is credited for coining the term, “machine
              learning” with his research (link resides outside ibm.com) around
              the game of checkers. Robert Nealey, the self-proclaimed checkers
              master, played the game on an IBM 7094 computer in 1962, and he
              lost to the computer. Compared to what can be done today, this
              feat seems trivial, but it’s considered a major milestone in the
              field of artificial intelligence.
            </p>
          </div>
        </div>

        <div className="lower-div">
          <div className="reviews-title">Top Reviews</div>

          <div className="review-section">
            <div className="review-box">
              <div className="review-items">
                <img
                  src="https://plus.unsplash.com/premium_photo-1690440686747-6fa153013e4c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                  className="review-photo"
                />

                <div>
                  <span className="review-name">Sanchit Pandey</span>
                  <p className="review-designation">Student</p>
                </div>
              </div>

              <p className="review-description">
                This is a mistake. Here, we’ll refer to some time-honored
                typesetting conventions, with an emphasis on readability, and
                offer guidance on adapting them effectively for devices and
                screens. We’ll see that the ability to embed fonts with
                @font-face is not by itself a solution to all of our typographic
                challenges.
              </p>
            </div>

            <div className="review-box">
              <div className="review-items">
                <img
                  src="https://plus.unsplash.com/premium_photo-1690440686747-6fa153013e4c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                  className="review-photo"
                />

                <div>
                  <span className="review-name">Sanchit Pandey</span>
                  <p className="review-designation">Student</p>
                </div>
              </div>

              <p className="review-description">
                This is a mistake. Here, we’ll refer to some time-honored
                typesetting conventions, with an emphasis on readability, and
                offer guidance on adapting them effectively for devices and
                screens. We’ll see that the ability to embed fonts with
                @font-face is not by itself a solution to all of our typographic
                challenges.
              </p>
            </div>

            <div className="review-box">
              <div className="review-items">
                <img
                  src="https://plus.unsplash.com/premium_photo-1690440686747-6fa153013e4c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                  className="review-photo"
                />

                <div>
                  <span className="review-name">Sanchit Pandey</span>
                  <p className="review-designation">Student</p>
                </div>
              </div>

              <p className="review-description">
                This is a mistake. Here, we’ll refer to some time-honored
                typesetting conventions, with an emphasis on readability, and
                offer guidance on adapting them effectively for devices and
                screens. We’ll see that the ability to embed fonts with
                @font-face is not by itself a solution to all of our typographic
                challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventPage;
