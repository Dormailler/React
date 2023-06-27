// function Book(p){
//     return (<div><h1>{p.name} 도서의 가격은 {p.price} 입니다.</h1></div>);
// }
// const Book = (p) => {
//     return (<div><h1>{p.name} 도서의 가격은 {p.price} 입니다.</h1></div>);

import React from "react";

class Book extends React.Component{
    // this.props 상속 포함 = 객체  
    render(){
        return (<div><h1>{this.props.name} 도서의 가격은 {this.props.price} 입니다.</h1></div>);
    }
}

export default Book;