import './App.css';
import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';


class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {

      mode:'welcome',
      selected_content_id:2,
      welcome:{title:'Welcome', desc:'Hello, React!!!'},
      Subject: {title:'WEB', sub:'World Wide Web'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is for information'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'JavaScript',desc:'JavaScript is for interative'}
      ]
    }
  }
  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
          break;
        }
        i = i + 1;
      }
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode ==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title  = {_title} desc = {_desc}></ReadContent>
    }else if(this.state.mode === 'read'){ 
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }else if(this.state.mode === 'create'){ 
      _article = <CreateContent onSub = {function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;
         //this.state.contents.push({id:this.max_content_id, title:_title , desc: _desc});
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title , desc: _desc});
        // var _contents = this.state.contents.concat(
        //   {id:this.max_content_id, title:_title , desc: _desc})
        this.setState({
          contents: _contents,//this.state.contents
          mode : 'read',
          selected_content_id : this.max_content_id
        });
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){ 
      _content = this.getReadContent();
      _article = <UpdateContent data = {_content} onSub = {
        function(_id,_title,_desc){
          //this.state.contents.push({id:this.max_content_id, title:_title , desc: _desc});
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length){
            if(_contents[i].id === _id){
              _contents[i] = {id:_id, title: _title, desc : _desc};
              break;
            }
            i += 1;
          }
          this.setState({
            contents: _contents,//this.state.contents
            mode : 'read'
          });
      }.bind(this)}></UpdateContent>
    }
    return _article
  }
  render(){
    console.log('App render');
    
    return (
      <div className="App">
        <Subject 
        title={this.state.Subject.title} 
        sub={this.state.Subject.sub} 
        onChangePage = {function(){
          this.setState({mode:'welcome'});
        }.bind(this)}>
        </Subject> 
        <TOC 
        data={this.state.contents}
        onChangePage = {function(id){
          this.setState({
            mode:'read',
            selected_content_id : Number(id) 
          });
          
        }.bind(this)}></TOC>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm("정말 삭제합니까?")){
              var _contents = Array.from(this.state.contents)
              var i = 0;
              while(i< _contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                i+=1;
              }
              alert('deleted!');
              this.setState({
                contents : _contents,
                mode: 'welcome'
              });
            }   
          }else{
            this.setState({
              mode: _mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
