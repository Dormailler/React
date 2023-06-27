import React from 'react';
import ReactDOM from 'react-dom/client';
import BoardList from './BoardList';
import './index.css';
import Loginform from './LoginForm';
import LoginForm2 from './LoginForm2';
import LoginForm3 from './LoginForm3';
import NumberSum from './NumberSum';
import reportWebVitals from './reportWebVitals';
import ServerConnection_boot from './ServerConnection_boot';
import SmartHome from './UseCallbackTest2';
import User2 from './UseStateTest';



//start.js파일 내부 Hello 함수 실행 결과
const root = ReactDOM.createRoot(document.getElementById('root'));
const timer = ReactDOM.createRoot(document.getElementById('timer'));
root.render(
  <React.StrictMode>

    
    
    {/* <App />*/}
    {
    /* <Hello />
    <Hello2 />
    <Hello3 />
    <Hello4 />
    <Hello5 /> 
    <Card/>
    <Library/>
    <Greeting/>
    <GreetingAll/>
    <Clock/>
    <Book title='책제목1' price='20000' totalPage ='200' body='리액트 입문자용입니다.'/>
    <Book title='책제목2' price='30000' totalPage ='300' body='리액트 중급자용입니다.'/>
    <CommnetList/>
    <User id="부모에서 전달하는 id" />
    <LifeCycleEx prop_value="프롭스전달"/>
    <User2 id="부모에서 전달하는 id"/>
    <BoardList/>
    
    <SmartHome/>
    <NumberSum/>
    <Loginform/>
    <Loginform/>
    <hr/>
    <LoginForm2/>
    <LoginForm3/>8
    */}
    {/* <BoardList/> */}
    <ServerConnection_boot/>
  </React.StrictMode>
);
// setInterval(function(){
//   timer.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>
//   )
// },1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
