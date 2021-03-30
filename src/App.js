/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
  let [title,titleFunc] = useState(['하이!','운동 좀 하자','잠이 안와..']);
  let [numGood,numGoodFunc] = useState(0);
  
  let [modal, modalFunc] = useState(false);
  
  let posts = '배고파';

  function titleChange(){
    var newData = [...title];
    newData.sort();
    titleFunc( newData );
  }

  function ModalSee(){
    modalFunc(!modal);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
        <button onClick={ titleChange }>새로고침</button>
      </div>
      <div className="list">
        <h4>{ title[0] } 
        <span onClick={function(){ numGoodFunc(numGood+1)}}>👍</span> 
        {numGood} </h4>
        <p>3월 30일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>3월 30일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>3월 30일 발행</p>
        <hr/>
      </div>
      <button onClick={ ModalSee }>모달</button>

      {
        modal === true
        ? <Modal/>
        :null
      }
    </div>
  );
} 

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;


