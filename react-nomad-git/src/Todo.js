import { useState } from "react";

function Todo(){
    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(todo === ""){
            return;
        }
        setTodos(currentArray => [todo,...currentArray])
        setTodo("");  
    };
    console.log(todos);
    return <div>
        <h1>나의 할일 {todos.length}개</h1>
        <form>
            <input 
                onChange={onChange} 
                value={todo} 
                type="text" 
                placeholder="할일을 입력하세요..."/>
            <button onClick={onSubmit}>할일 추가</button>
        </form>
        <hr/>
        <ul>
        {todos.map((item,inedx)=><li key={inedx}>{item}</li>)}
        </ul>
    </div>
}
export default Todo;