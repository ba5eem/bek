import React, { Component } from 'react';
import './idea.css';
import Box from './idea.js'

const start = {
  backgroundColor: "salmon"
}
const a = {
  backgroundColor: "lightgreen",
  transform: "scale(10,10)",
  zIndex:"-1"
}
const b = {
  backgroundColor: "yellow",
  transform: "scale(10,10)",
  zIndex: "-1"
}
const c = {
  backgroundColor: "cornflowerblue",
  transform: "scale(10,10)",
  zIndex:"-1"
}
const d = {
  backgroundColor: "orange",
  transform: "scale(10,10)",
  zIndex: "-1"
}
const e = {
  backgroundColor: "red",
  transform: "scale(10,10)",
  zIndex:"-1"
}
const f = {
  backgroundColor: "pink",
  transform: "scale(10,10)",
  zIndex: "-1"
}



class Idea extends Component {
  constructor() {
    super();

    this.state={
      a: start,
      b: start,
      c: start,
      d: start,
      e: start,
      f: start
    }
    this.beginAction=this.beginAction.bind(this);

  }

  beginAction(){
    this.setState({a:start,b:start,c:start,d:start,e:start,f:start})
    this.setState({a:a})
    let x = 900;
    setTimeout(function(){this.setState({b:b})}.bind(this),x)
    setTimeout(function(){this.setState({c:c})}.bind(this),1800)
    setTimeout(function(){this.setState({d:d})}.bind(this),2700)
    setTimeout(function(){this.setState({e:e})}.bind(this),3600)
    setTimeout(function(){this.setState({f:f})}.bind(this),4500)
    setTimeout(function(){this.beginNext()}.bind(this),5400)

    
  }

  beginNext(){
    for (var i = 0; i < 20; i++){
      this.beginAction()
    }
  }










  render(){
    const {a,b,c,d,e,f} = this.state

    
    return (
      <div id="ideaContainer">
        <Box state={a} beginAction={this.beginAction}/>
        <Box state={b} beginAction={this.beginAction}/>
        <Box state={c} beginAction={this.beginAction}/>
        <Box state={d} beginAction={this.beginAction}/>
        <Box state={e} beginAction={this.beginAction}/>
        <Box state={f} beginAction={this.beginAction}/>

        


      </div>
    );
  }
}


export default Idea;