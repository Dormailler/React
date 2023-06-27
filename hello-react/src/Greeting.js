function Greeting(){
    let insa0 = "오늘도 즐거운 하루되세요!";
    let insa1 = "안녕하세요 리액트";
    let insa2 = "오늘 날씨 어때요?";
    let random = parseInt(Math.random() * 3); //0 1 2
    // if(random === 0){ return <div><h1>{insa0}</h1></div>}
    // if(random === 1){ return <div><h1>{insa1}</h1></div>}
    // if(random === 2){ return <div><h1>{insa2}</h1></div>}
    return random === 0? <h1>{insa0}</h1> : 
    random === 1? <h1>{insa1}</h1> : <h1>{insa2}</h1>; //마지막 else = :
}

export default Greeting;