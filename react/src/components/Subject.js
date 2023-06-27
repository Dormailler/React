import React, { Component } from 'react';

class Subject extends Component{
    render(){ //클래스내함수는 생략가능
        console.log('Subject render');
      return(
        <header>
          <h1><a href='/' onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

export default Subject;