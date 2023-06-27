import React from "react";
class Loginform extends React.Component{    
    constructor(props){
        super(props);
        this.state  = {id:'',pw:'', isLogin: false}
    }
    //state변수

    //이벤트처리핸들러
    
    render(){ //자바스크립트식은 {} 쳐야됨
        let inputForm = (e) => {console.log(e.target.name + "입력중"); this.setState({[e.target.name]:e.target.value})}

        let loginForm = (e)=>{alert(this.state.id + "회원님 "+this.state.pw + " 암호를 입력했습니다.")
            this.setState({isLogin : true} )
        }
        let logoutForm = (e)=>{
            this.setState({isLogin : false,id:'',pw:''} )
        }
        /*return (
        <div>
            아이디입력<input type='text' name = 'id' value={this.state.id} onChange={inputForm}/><br/>
            암호입력 <input type='password' name='pw' onChange={inputForm}/><br/>
            <input type='button' name='loginbtn' value='로그인' onClick={loginForm}/>
        </div>
        );*/
        return(
            <div>
            로그인상태출력 - {this.state.isLogin? "true" : "false"}
            {this.state.isLogin ? 
            (<div>{this.state.id} 회원님 환영합니다.<input type='button' name='logoutbtn' value='로그아웃' onClick={logoutForm}/> </div>)
            :
            (<div>아이디입력<input type='text' name = 'id' value={this.state.id} onChange={inputForm}/><br/>
            암호입력 <input type='password' name='pw' onChange={inputForm}/><br/>
            <input type='button' name='loginbtn' value='로그인' onClick={loginForm}/></div>)}
            </div>
        );
        
    }
}


export default Loginform;                                         