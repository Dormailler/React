// react - ajax - spring boot

import { useState } from "react";
import axios from "axios";
import qs from "qs";

function ServerConnection_boot(){
    const [message,setMessage] = useState(""); // 1번 화면 렌더링 이후 변수값 변화시마다 렌더링 라이브러리
    
    // http://localhost:3000 npm add axios
    // 다른 서버로 ajax 요청 - 응답 추가 규칙
    // axios 라이브러리 아직 미설치

    //전달데이터없는경우
    const ajaxbtn = function(){
        axios.get("http://localhost:8080/helloajax").then(function(response){
            setMessage(JSON.stringify(response.data));
        });

    }

    // 전달데이터있는경우(get)
    const ajaxbtn2 = function(){
        axios.get("http://localhost:8080/helloajaxparam",
            {params:{id:'ajax-get-id',password : 2222}}).then(function(response){
            setMessage(JSON.stringify(response.data));
        });
    }
    
    // 전달데이터있는경우(post)
    const ajaxbtn3 = function(){
        axios.post("http://localhost:8080/helloajaxparam",
            {id:'ajax-post-id',password : 3333}).then(function(response){
            setMessage(JSON.stringify(response.data));
        });
    }
    // 배열전달
    const ajaxbtn4= function(){
        // ids=1 & ids=5 &... 포맷 변경 라이브러리 설치 npm i qs -> paramsSerializer    
        axios.get("http://localhost:8080/helloajaxarray",
            {
                params:{ids:[1,5,6,8]},
                paramsSerializer:params=>{
                    console.log(qs.stringify(params,{arrayFormat:"indices"})); //ids[0]=1&ids[1]=5
                    console.log(qs.stringify(params,{arrayFormat:"brackets"})); //ids[]=1&ids[]=5
                    console.log(qs.stringify(params,{arrayFormat:"comma"})); // ids=1,5,9,8
                    console.log(qs.stringify(params,{arrayFormat:"repeat"})); // ids=1&ids=5&..
                    return qs.stringify(params,{arrayFormat:"repeat"});
                }
            })
            .then(function(response){
            setMessage(JSON.stringify(response.data));  
        });
    }
    // 배열객체 전달
    const ajaxbtn5 = function(){
        var playerArray = [];
		var player1 = {"player" : "son", "goal" : 30};
		var player2 = {"player" : "kane", "goal" : 45};
		
		playerArray.push(player1);
		playerArray.push(player2);
		
		var playerList2 = {"playerList":JSON.stringify(playerArray)};
        // axios.post("http://localhost:8080/playerInfo",
        //     {playerList:playerList2})
        axios({
            url:"http://localhost:8080/playerInfo",
            method : "post",
            data : playerList2
        })
            .then(function(response){
            setMessage(JSON.stringify(response.data));
        });
    }
    return (
        <div>
            <h1>{message}</h1>
            <h1>서버와 통신중입니다.</h1>
            <input type="button" value="ajxa(매개변수없는get)요청" onClick={ajaxbtn}/>
            <input type="button" value="ajxa(매개변수있는get)요청" onClick={ajaxbtn2}/>
            <input type="button" value="ajxa(매개변수있는post)요청" onClick={ajaxbtn3}/>
            <input type="button" value="ajxa(배열전달get)요청" onClick={ajaxbtn4}/>
            <input type="button" value="ajxa(객체배열전달post)요청" onClick={ajaxbtn5}/>
        </div>
    );
}

export default ServerConnection_boot;