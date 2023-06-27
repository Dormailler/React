import { useMemo, useRef, useState } from "react";

const NumberSum = () => {
    const [number, setNumber] = useState(''); //입력하는 숫자 저장
    // 총합 저장 배열
    const [list, setList] = useState([]);

    const onChange = (e)=>{
        console.log('onchange발생')
        setNumber(e.target.value)
    } //입력한 숫자모음
    const onClick= (e)=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber(''); //초기화
        //$('input').focus(); jquery 
        inputElement.current.focus(); //input 자동 focus
    }   //list배열 누적

    const getAverage = numbers => {
        console.log('평균값 계산중');
        if(numbers.length ===0) return 0;
        const sum = numbers.reduce(function(a,b){return a+b;});
        return sum / numbers.length;
    }

    const avg = useMemo(()=> getAverage(list), [list]); //list 변화 있을때만 실행
    const inputElement = useRef(null); // 참조할 객체 초기값 선언
    return(
        <div>
            <input value={number} onChange = {onChange} ref={inputElement}/>
            <button onClick={onClick}>계산</button>
            <ul>
                {list.map(function(value,index){return (<li key={index}>{value}</li>)})}
            </ul>
            <b>평균값 : {avg}</b>
        </div>
    )

}

export default NumberSum;

/*
평균 출력 
숫자 입력/계산 클릭 호출
의도 -  숫자 입력시 호출x 계산입력할때만 호출
        랜더링 특정 값 변경되면 그때만 호출
        number 변경 호출 x 
        list 변경시 호출
*/