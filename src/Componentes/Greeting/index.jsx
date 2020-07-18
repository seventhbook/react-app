import React,{Component} from 'react';

class Greeting extends Component{
  constructor(){
    super();
    this.state={
      greetingText:"Coders"
    }
    this.greetingInputHandler=this.greetingInputHandler.bind(this)
  }

  greetingInputHandler(event){
    console.log(event.target)
    var a=event.target.value
    this.setState(
      {greetingText:a}
    );
  }

  render(){
    return(
      <div>
        <h1>{this.state.greetingText}</h1>
        <input type="text" name="greeting" onChange={this.greetingInputHandler}/>
      </div>
    )
  }
}

export default Greeting;
