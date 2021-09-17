/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState(["React", "Redux", "Hooks"]);
  const [counter, setCounter] = useState(0);

  function changeContent() {
    let newArray = [...content];
    newArray[0] = "JavaScript";
    setContent(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={changeContent}>버튼</button>
      <div className="list">
        <h3>
          {content[0]}{" "}
          <span
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            👍
          </span>
          {counter}
        </h3>
        <p>9월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{content[1]}</h3>
        <p>9월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{content[2]}</h3>
        <p>9월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
