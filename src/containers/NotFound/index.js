import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Comp from './comp.js';

class NotFound extends Component {
  constructor() {
    super();

    this.state={
      aS: a,
      bS: b,
      cS: c,
      dS: d,
      eS: e,
      fS: f
    }
  }

  componentDidMount(){
    this.runTask();
  }

  runTask(){
    setTimeout(function(){
      this.setState({fS:a})
    }.bind(this),400)
    setTimeout(function(){
      this.setState({eS:f})
    }.bind(this),800)
    setTimeout(function(){
      this.setState({dS:e})
    }.bind(this),1200)
    setTimeout(function(){
      this.setState({cS:d})
    }.bind(this),1600)
    setTimeout(function(){
      this.setState({bS:c})
    }.bind(this),1800)
    setTimeout(function(){
      this.setState({aS:b})
    }.bind(this),2400)
    this.buildTask();
  }

  buildTask(){
    setTimeout(function(){
      this.setState({aS:a})
    }.bind(this),400)
    setTimeout(function(){
      this.setState({bS:b})
    }.bind(this),800)
    setTimeout(function(){
      this.setState({cS:c})
    }.bind(this),1200)
    setTimeout(function(){
      this.setState({dS:d})
    }.bind(this),1600)
    setTimeout(function(){
      this.setState({eS:e})
    }.bind(this),1800)
    setTimeout(function(){
      this.setState({fS:f})
    }.bind(this),2400)
  }







  render(){
    const {aS} = this.state
    const {bS} = this.state
    const {cS} = this.state
    const {dS} = this.state
    const {eS} = this.state
    const {fS} = this.state
    const arr = new Array(300).fill("i");


    return (
      <div>
        <Comp arr={arr} x={aS}/>
        <Comp arr={arr} x={bS}/>
        <Comp arr={arr} x={cS}/>
        <Comp arr={arr} x={dS}/>
        <Comp arr={arr} x={eS}/>
        <Comp arr={arr} x={fS}/>
      

      </div>
    );
  }
}

const a = {
  backgroundColor: "lightgreen"
}
const b = {
  backgroundColor: "salmon"
}
const c = {
  backgroundColor: "cornflowerblue"
}
const d = {
  backgroundColor: "orange"
}
const e = {
  backgroundColor: "yellow"
}
const f = {
  backgroundColor: "purple"
}

export default NotFound;