import "./index.css";
import Monkey from "./Monkey.js";
import { useState, useEffect } from "react";
function App() {
  const [pastStrings, setPastStrings] = useState([]);
  const [pos, setPos] = useState([]);

  useEffect(() => {
    const newPastStrings = [];
    for (let i = 0; i < 20; i++) newPastStrings.push(generateString(25));
    setPastStrings(newPastStrings);
    let newPos = [];
    for (let i = 0; i < 100; i++)
      newPos.push({
        x: 450 + Math.floor(Math.random() * (window.innerWidth - 450)),
        y: Math.floor(Math.random() * window.innerHeight),
      });
    setPos(newPos);
  }, []);

  var repeat = window.setInterval(() => {
    setPastStrings(
      [generateString(25)].concat(
        pastStrings.slice(0, Math.min(pastStrings.length, 20))
      )
    );
  }, 250);

  return (
    <div className="App">
      <div>
        {pastStrings &&
          pastStrings.length > 0 &&
          pastStrings.map((pastString, i) => {
            return i == 0 ? (
              <h1 className="typewriter-active" key={i}>
                {pastString}
              </h1>
            ) : (
              <h1 className="typewriter" key={i}>
                {pastString}
              </h1>
            );
          })}
      </div>
      {pos &&
        pos.map((xy, i) => {
          return (
            <Monkey
              x={xy.x + "px"}
              y={xy.y + "px"}
              key={i}
              type={i % 2}
            ></Monkey>
          );
        })}
    </div>
  );
}

function generateString(length) {
  let result = "";
  const characters =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz.!?";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

export default App;
