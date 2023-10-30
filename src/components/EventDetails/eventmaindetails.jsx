// Reusable component for extra event details
function Extradetails({ extratitles, extratitlecontent }) {
  return (
    <>
      <div className="event-detail1">
        <h2 className="event-extra-title">{extratitles}</h2>
        <p>{extratitlecontent}</p>
      </div>
    </>
  );
}
function Eventmaindetails() {
  return (
    <>
      <section className="event-maindetails">
        <Extradetails
          extratitles={"What is Javascript"}
          extratitlecontent={
            "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area."
          }
        />
        <Extradetails
          extratitles={"About Mentor"}
          extratitlecontent={
            "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area."
          }
        />
        <Extradetails
          extratitles={"Resources"}
          extratitlecontent={
            "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area."
          }
        />
      </section>
    </>
  );
}
export default Eventmaindetails;
