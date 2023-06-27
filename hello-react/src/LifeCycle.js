import React,{Component} from "react";

class LifeCycleEx extends Component{
    //리액프 컴포넌트 생성
    static getDerivedStateFromProps(props,state){
        console.log('2. getDerivedStateFromProps Call:' + props.prop_value);
        
        return {tmp_state: props.prop_value};
    }

    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount(){
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state: '+this.state.tmp_state);
        this.setState({tmp_state2: true})
        //setState() -> 변수의 선언과 초기화를 동시에 실행 
    }
    
    render(){
        console.log('3. render Call ')
        return (
            <h2>[THIS IS COMPONENTDIDMOUNT FUNCTION]</h2>
        )
    }

 // 생성후 리액트 컴포넌트 변경
 //shouldComponentUpdate()함수의 반환 값에 따라 render() 함수를 재실행할 수 있다 ! 
 //이를 통해 props나 state변수가 변경될 때 화면을 리랜더링할 수 있다 ~ ! 
 shouldComponentUpdate(props,state){
    console.log('6. shouldComponentUpdate Call / tmp_state2='
    + state.tmp_state2);
    return false
}
}

export default LifeCycleEx;