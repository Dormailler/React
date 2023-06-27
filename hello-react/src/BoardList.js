import React from "react";
class BoardHeading extends React.Component{
//번호 제목 작성자 조회수 제목행4개 컬럼 구성 1개행
render(){
    return (<thead><tr><th>번호</th><th>제목</th><th>작성자</th><th>조회수</th><th>추가동작</th></tr></thead>);
}
}

class BoardRow extends React.Component{
    constructor(p){
        super(p);
        this.state = {
            isUpdateClick : false,
            updateSeq : 0,
            updateTitle : '',
            updateWriter : ''
        }
    }
    // 1개 게시물 저장하고 board 추가
    render() {
        let deleteBoard = (e)=>{
                //삭제버튼 클릭시 id속성값 읽어옴
                //this.props.deleteBOard 메소드 호출 매겨변수 전달
                this.props.deleteBoard(parseInt(e.target.id));
        }
        let updateHandler = (e)=>{
            //state 동일 변수 = 수정 입력값
            this.setState({
                [e.target.name] : e.target.value,
            })
        }
        let updateEnd = (e) =>{ //수정 seq 수정 title, 수정 writer this.props.updateboard 전달
            this.props.updateBoard({seq:this.state.updateSeq,title:this.state.updateTitle,writer : this.state.updateWriter,view:0})
            this.setState({isUpdateClick:false});
        }
        let updateStart = (e) =>{
            this.setState({updateSeq:e.target.id, isUpdateClick : true})
        }
        const board_row = this.props.data.map((oneboard)=>{
            return (
            <tr key = {oneboard.seq}>
                <td>{oneboard.seq}</td>
                <td>{oneboard.title}</td>
                <td>{oneboard.writer}</td>
                <td>{oneboard.view}</td>
                {this.state.isUpdateClick && oneboard.seq == this.state.updateSeq ? 
                <td><input tpye='text' name='updateTitle' onChange={updateHandler}/><br/>
                <input tpye='text' name='updateWriter' onChange={updateHandler}/><br/>
                <button id={oneboard.seq} onClick={updateEnd}>수정완료</button></td>
                :
                <td>
                    <button id={oneboard.seq} onClick={updateStart}>수정</button>
                    <button id={oneboard.seq} onClick = {deleteBoard}>삭제</button>
                </td>}
                
            </tr>)
        });
        return (
        <tbody>
            {board_row}
        </tbody>)
      }
}
class BoardForm extends React.Component{
    //this.props.data/this.props.addBoadr 전달
    constructor(props){
        super(props); //전달받음
        this.state = {
            seq : this.props.data.length+1,
            title :'',
            writer :'',
            view : 0
        }
    }
    render(){
        let inputForm = (e)=>{ //[""] or그냥써야됨
            this.setState({
                [e.target.id] : e.target.value
            })
        }
        let createboard = ()=>{
            this.setState({seq:this.state.seq+1})
            this.props.addBoard({seq:this.state.seq,title:this.state.title,writer:this.state.writer,view:this.state.view})
        }
        return( //게시물제목 작성자2개 입력
            <div>
                게시물제목 : <input type='text' id='title' value={this.state.title} onChange={inputForm}></input><br/>
                작성자 : <input type='text' id='writer' value={this.state.writer} onChange={inputForm}></input><br/>
                <button onClick={createboard}>글쓰기</button>

            </div>
        )
        
    }
}
class BoardList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board:[    
                {seq:1, title:'제목1', writer:"작성자1", view:"10"},    
                {seq:2, title:'제목2', writer:"작성자2", view:"11"},    
                {seq:3, title:'제목3', writer:"작성자3", view:"30"},    
                {seq:4, title:'제목4', writer:"작성자4", view:"55"},    
                {seq:5, title:'제목5', writer:"작성자5", view:"0"},
                        
            ]
        };
    }
    //게시물 1개 저장
    
    
    render(){
        //boardform에서 테스트

        let addBoard = (inputboard)=>{
            //const newseq = this.state.board.length+1;
            const oneboard = inputboard;
            const copyboard = [...this.state.board , oneboard]
            this.setState({board: copyboard});
        }
        //const target = 3;
        //const new_arr = array.filter(function(value,index){return target!== value});
        let deleteBoard = (deleteSeq)=>{
            //this.state.board삭제기능구현

            const new_board = this.state.board.filter(function(value,index){return deleteSeq !== value.seq});
            this.setState({board:new_board});
        }
        let updateBoard = (updateboard) =>{
            //this.state.board에서 해당 updateboard seq 동일한 부분 수정 /동일하지 않은 부분 그대로 새로운 배열
            const new_board = this.state.board.map(function(v){
                return v.seq == updateboard.seq? {...v, title:updateboard.title, writer:updateboard.writer}:v; //배열복사 [] 객체복사 {} 수정가능
            }) // return updateboard.seq o.seq 비교 같으면 변경 조건삼항}
            this.setState({board:new_board});
        }
        return (
            <div>
            <table border = '3'>
                <BoardHeading/> 
                <BoardRow data={this.state.board} deleteBoard = {deleteBoard} updateBoard = {updateBoard}/>
            </table>
            {/* <button onClick={addtest}>게시물추가테스트</button> */}
            <BoardForm data={this.state.board} addBoard={addBoard} />
            </div>);
        }
}
    
export default BoardList;