function GreetingAll(){
    let insa0 = "오늘도 즐거운 하루되세요!";
    let insa1 = "안녕하세요 리액트";
    let insa2 = "오늘 날씨 어때요?";
    let insas = [insa0,insa1,insa2]
    const result = insas.map(function(value,index){
        return <h1>{index} - {value}</h1>
    });
    return <div>{result}</div>;
}
export default GreetingAll;