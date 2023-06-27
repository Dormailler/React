import { useEffect, useState } from "react";

function User2(props){
    let id="지역변수 id";
    const [stateid , setStateId]= useState('초기 state id');
    const [age , setAge] = useState(0);
    //age = useState(0)[0];
    //setAge = useState(0)[1];
    //[변수명,변경메소드명

    let change = ()=>{
        id = id + " 변경";
        console.log(id);
        setStateId(stateid + "변경"); // 자동 render 호출
    }
    useEffect(()=>{ //state 변화 반영 + render + 이후 추가 수행
        console.log('useeffect === '+ id);
        console.log('useeffect === '+ stateid);
    
    });
    return(
        <div>
            <h3>props.id = {props.id} 는 불변입니다.</h3>
            <h3 onClick={change}>id={id} </h3>
            <h3>useState:id = {stateid}</h3>
        </div>
    );
}


export default User2;
