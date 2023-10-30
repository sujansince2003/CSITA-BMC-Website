function Tag({ bgcolor, tagname }) {
  return (
    <>
      <span className="tag" style={{ backgroundColor: bgcolor }}>
        {tagname}
      </span>
    </>
  );
}

function Eventtags() {
  return (
    <>
      <div className="event-tags">
        <Tag tagname={"reactjs"} bgcolor={"yellow"} />
        <Tag tagname={"Javascript"} bgcolor={"pink"} />
        <Tag tagname={"Typescript"} bgcolor={"yellow"} />
        <Tag tagname={"BMCassociation"} bgcolor={"pink"} />
      </div>
    </>
  );
}

export default Eventtags;
