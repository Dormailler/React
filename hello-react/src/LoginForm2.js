import React, { useState } from "react";
function LoginForm2(){
    
    // const [id,setId] = useState("")
    // const [pw,setPw] = useState("")
    // const [isLogin,setIsLogin] = useState(false)
    const [form, setForm] = useState({
        id : '',
        pw : '',
        isLogin : false
    })

    //자바스크립트식은 {} 쳐야됨
    let inputForm = (e) => {console.log(e.target.name + "입력중"); 
        setForm({
        ...form, // 기존 form 복사
        [e.target.name] : e.target.value}) // 원하는 변수 덮어씌움
    }

    let loginForm = (e)=>{alert(form.id + "회원님 "+form.pw + " 암호를 입력했습니다.")
        setForm({...form,isLogin : true} )
    }
    let logoutForm = (e)=>{
        setForm({...form,isLogin : false,id:'',pw:''} )
    }
    let enterFrom=(e)=>{
        if(e.key==='Enter'){
            loginForm();
        }
    }
    return( // {form.isLogin && form.id} ture이면 form.id출력?
        <div>
        로그인상태출력 - {form.isLogin? "true" : "false"}
        {form.isLogin ? 
        (<div>{form.id} 회원님 환영합니다.<input type='button' name='logoutbtn' value='로그아웃' onClick={logoutForm}/> </div>)
        :
        (<div>아이디입력<input type='text' name = 'id' value={form.id} onChange={inputForm}/><br/>
        암호입력 <input type='password' name='pw' onChange={inputForm} onKeyDown={enterFrom}/><br/>
        <input type='button' name='loginbtn' value='로그인' onClick={loginForm}/></div>)}
        </div>
    );
} // function end   

export default LoginForm2;                                         