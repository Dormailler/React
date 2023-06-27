import Book from './Book.js';

function Library(){
    return (<div>
        <Book name = '리액트 기본' price = '20000'/>
        <Book name = '자바스크립트 입문' price = {30000}/>
        <Book name = 'html css' price = '40000'/>
        </div>);
}

export default Library;