import { useEffect, useState } from "react";
import Button from "../Button";
import Coin from "../Coin";
import Moive from "../components/Movie";
import Todo from "../Todo";
import styles from "../Home.module.css"

function Hello(){
    useEffect(()=>{
      console.log("생성됨..한번만실행?");
      return () => console.log("삭제됨");
    },[]);
    return <h1>Hello</h1>;
  }
  function CleanUp(){
    const [showing,setShowing] = useState(false);
    function onClick() {
        return setShowing((prev) => !prev);
    }
    return <div>
        {showing? <Hello/>:null}
        <button onClick={onClick}>{showing? "숨김":"보이기"}</button>
    </div>;
  }
function Home(){
  const [counter,setValue] = useState(0);
  const onClick = () => setValue((prev)=>prev+1);
  const [keyword,setKeyword] = useState("");
  const onChange = (event)=>{setKeyword(event.target.value);}
  console.log("항상 실행되는 코드");
  useEffect(()=>{
    console.log("API 호출");
  },[]);  // 한번만 실행
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
      console.log(keyword + " 검색");
    }
  },[keyword]); // keyword가 변화될때만 실행
  useEffect(()=>{
      console.log("검색어나 숫자 변경시 실행");
  },[keyword,counter]);
  return (
    <div >
      <input value={keyword} onChange={onChange} type="text" placeholder="검색하세요"/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>클릭하세요</button>
      <Button text={"확인"}/>
      <CleanUp/>
      ---------------------------------------------------------
      <Todo/>
      <hr/>
      <Coin/>
      <hr/>
      <Moive/>
    </div>
    
  );
}

export default Home;