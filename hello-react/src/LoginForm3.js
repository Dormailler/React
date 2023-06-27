import React, { useState } from "react";
function LoginForm3(){
    
    // const [id,setId] = useState("")
    // const [pw,setPw] = useState("")
    // const [isLogin,setIsLogin] = useState(false)
    const [form, setForm] = useState({
        id : '',
        pw : '',
        gender : ''
    })

    //자바스크립트식은 {} 쳐야됨
    let inputForm = (e) => {console.log(e.target.name + "입력중"); 
        setForm({
        ...form, // 기존 form 복사
        [e.target.name] : e.target.value}) // 원하는 변수 덮어씌움
    }

    let genderForm = (e)=>{
        setForm({
            ...form,
            gender : e.target.value
        })
    }
    let submitForm = (e)=>{
        alert(form.id + " 회원님 " + form.pw + " 암호를 입력했습니다. " + "성별은 " + form.gender);
        //e.preventDefault();
        
    }
    
    return( // {form.isLogin && form.id} ture이면 form.id출력?
        <form action="http://localhost:8080/back/a.jsp" onSubmit={submitForm}>
        아이디입력<input type='text' name = 'id' value={form.id} onChange={inputForm}/><br/>
        암호입력 <input type='password' name='pw' onChange={inputForm}/><br/>
        성별 <select name='gender' onChange={genderForm}>
            <option value='남자'>남자</option>
            <option value='여자'>여자</option>
        </select>
        <input type='submit' name='loginbtn' value='로그인'/>
        </form>
    );
} // function end   

export default LoginForm3;                                         