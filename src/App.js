/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState(["React", "Redux", "Hooks"]);
  const [counter, setCounter] = useState(0);

  const [modal, setModal] = useState(false);

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
        <h3
          onClick={() => {
            let modalVal = modal;
            modal === true ? (modalVal = false) : (modalVal = true);
            setModal(modalVal);
          }}
        >
          {content[2]}
        </h3>
        <p>9월 17일 발행</p>
        <hr />
      </div>
      {modal === true ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2></h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
