/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState(["React", "Redux", "Hooks"]);
  const [counter, setCounter] = useState([0, 0, 0]);

  const [modal, setModal] = useState(false);
  const [contentName, setContentName] = useState("");

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
      {content.map(function (contentString, index) {
        return (
          <div className="list" key={index}>
            <h3
              onClick={() => {
                if (modal === false) {
                  setContentName(contentString);
                  setModal(!modal);
                } else {
                  contentName === contentString
                    ? setModal(!modal)
                    : setContentName(contentString);
                }
              }}
            >
              {contentString}
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
      {modal === true ? <Modal text={contentName}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.text}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
