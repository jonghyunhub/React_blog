/* eslint-disable */

import React, { useState } from 'react';
import './App.css';


function App() {
  
  let [title,titleFunc] = useState( ['하이!','운동 좀 하자','잠이 안와..'] );
  let [numGood,numGoodFunc] = useState( [0, 0, 0] );
  
  let [modal, modalFunc] = useState( false );
  let [titleNum,titleNumFunc] = useState(0);

  function titleChange(){
    var newData = [...title];
    newData.sort();
    titleFunc( newData );
  }

  function GoodChange(num) {
    var newGood = [...numGood];
    newGood[num]+=1;
    numGoodFunc(newGood);
  }

  function ModalSee(num) {
    
    console.log(num);
    modalFunc(!modal);
    titleNumFunc(num);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
        <button onClick={ titleChange }>새로고침</button>
      </div>

    {
      title.map(function name(params, index) {
        return(
        <div className='list' >
          <div className='title'>
            <h3 onClick = {
                  ()=> { ModalSee(index) }
            } > { title[index] }</h3>
            <h3> <span onClick={ () => { GoodChange(index) } } >👍 { numGood[index] } </span> </h3>
          </div>
            <p>3월 31일 발행</p>
            <hr/>
        </div>
        )
      })
    }
          {
            modal === true
            ? < Modal title={title} titleNum={titleNum}/>
            :null
          }
      
      </div>
  );
} 

function Modal(props){
  return (
    <div className="modal">
      <h2> { props.title[props.titleNum] } </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;


