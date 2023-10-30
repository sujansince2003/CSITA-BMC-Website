import "./eventdetails.css";
function Eventdetails() {
  return (
    <>
      <section className="main">
        <section className="hero" style={{ display: "flex" }}>
          <div className="left-hero">
            <img
              src="https://picsum.photos/seed/picsum/400"
              alt="not available"
            />
          </div>
          <div className="right-hero">
            <p className="event-title">react workshopt</p>
            <div className="event-details">
              <p className="event-date">04 April, 2022 - 06 April, 2022</p>
              <p className="event-time">04 PM - 6PM</p>
              <p className="event-platform">Google meet</p>
            </div>
            <div className="event-tags">
              <span>react</span>
              <span>js</span>
              <span>typesvejr</span>
            </div>
            <div className="mentor-attendes">
              <div className="mentor">
                <img src="" alt="" />
                <div className="mentor-details">
                  <p className="name">sujan khatri</p>
                  <p className="position">tech lead afsfr</p>
                </div>
              </div>
              <div className="attendes">
                <p>Attendes</p>
                <p className="attendes-info">ram,shyam,hari....+250</p>
              </div>
            </div>
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
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default Eventdetails;
