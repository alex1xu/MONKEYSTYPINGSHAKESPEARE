import "./index.css";
function Monkey(props) {
  return (
    <div
      className={props.type ? "monkey-container" : "monkey-container2"}
      style={{ left: props.x, top: props.y }}
    >
      <img className="monkey-body" src="/body.png" alt="body"></img>
      <img
        className={props.type ? "monkey-front2" : "monkey-front"}
        src="/front.png"
        alt="front"
      ></img>
      <img className="monkey-back" src="/back.png" alt="back"></img>
    </div>
  );
}

export default Monkey;
