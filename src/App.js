/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState(["React", "Redux", "Hooks"]);
  const [counter, setCounter] = useState([0, 0, 0]);

  const [modal, setModal] = useState(false);

  function changeCounter(index) {
    let newCounter = [...counter];
    newCounter[index] += 1;
    setCounter(newCounter);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {content.map(function (contentName, index) {
        return (
          <div className="list" key={index}>
            <h3>
              {contentName}
              <span
                onClick={() => {
                  changeCounter(index);
                }}
              >
                {" "}
                👍
              </span>
              {counter[index]}
            </h3>
            <p>9월 17일 발행</p>
            <hr />
          </div>
        );
      })}
      {/* {modal === true ? <Modal content={contentName}></Modal> : null} */}
    </div>
  );
}

function Modal(content) {
  return (
    <div className="modal">
      <h2>{content}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
