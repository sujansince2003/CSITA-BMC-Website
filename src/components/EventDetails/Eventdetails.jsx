import "./eventdetails.css";
import Eventmaindetails from "./eventmaindetails";
import Eventtags from "./eventtags";
function Eventdetails() {
  return (
    <>
      <section className="main">
        <section className="hero">
          <div className="left-hero">
            <img
              src="https://picsum.photos/seed/picsum/400"
              alt="not available"
            />
          </div>
          <div className="right-hero">
            <div className="event-details-time">
              <p className="event-title">react workshopt</p>
              <div className="event-datetime">
                <p className="event-date">
                  <div className="svgicons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 448 512"
                    >
                      <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                    </svg>
                  </div>
                  04 April, 2022 - 06 April, 2022
                </p>
                <p className="event-time">
                  <div className="svgicons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                  </div>
                  04 PM - 6PM
                </p>
                <p className="event-platform">
                  <div className="svgicons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 384 512"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                  </div>
                  Google meet
                </p>
              </div>
              {/* <div className="event-tags">
                <span className="tag" style={{ backgroundColor: "burlywood" }}>
                  react
                </span>
                <span className="tag" style={{ backgroundColor: "burlywood" }}>
                  js
                </span>
                <span className="tag" style={{ backgroundColor: "burlywood" }}>
                  typesvejr
                </span>
              </div> */}
              <Eventtags />
            </div>
            <hr />
            <div className="mentor-attendes">
              <div className="mentor-title">
                <h3>
                  <div className="svgicons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 0 640 512"
                    >
                      <path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
                    </svg>
                  </div>
                  mentor
                </h3>

                <div className="mentor">
                  <div>
                    <img
                      className="mentor-img"
                      src="https://picsum.photos/40"
                      alt=""
                    />
                  </div>
                  <div className="mentor-details">
                    <p className="name">sujan khatri</p>
                    <p className="position">tech lead </p>
                  </div>
                </div>
              </div>
              <div className="attendes">
                <h3>Attendes</h3>
                <p className="attendes-info">ram,shyam,hari....+250</p>
              </div>
            </div>
            <hr />
            <div className="event-summary">
              <h3>event summary</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                modi vel sapiente atque accusantium tempore totam perferendis
                aut voluptatum repellat nobis ducimus natus molestiae quidem qui
                tenetur laboriosam, perspiciatis, quam culpa sint dolor
                inventore odio vero? Magnam deleniti facilis debitis eaque
                fugiat incidunt, ut ducimus optio nesciunt molestias molestiae
                aperiam alias repellat placeat sit perferendis eos saepe sunt
                reprehenderit? Consectetur, amet, cupiditate rem culpa illo
                exercitationem error officiis velit temporibus commodi explicabo
                maiores? Nulla doloremque repellendus laudantium qui,
                praesentium minus hic dicta cum debitis magni, similique iure
                nihil provident iusto atque magnam voluptatum cupiditate ut
                maiores recusandae architecto obcaecati porro?
              </p>
              <div>
                <button className="register">Register now</button>
              </div>
            </div>
          </div>
        </section>

        <Eventmaindetails />
      </section>
    </>
  );
}
export default Eventdetails;
