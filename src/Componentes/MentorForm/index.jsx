import React,{Component} from 'react';
import firebase from '../../Services/firebase'
import {
  Button, Form, FormGroup, Label, Input, FormText,Container
} from 'reactstrap';

class MentorForm extends Component{
  constructor(){
    super();
    this.state={
      name:"",
      email:"",
      module:""
    }
    this.onChangeHandler=this.onChangeHandler.bind(this)
    this.onSubmitHandler=this.onSubmitHandler.bind(this)
  }
  onChangeHandler(event){
    let  value= event.target.value
    let inputName=event.target.name
    console.log(value)
    this.setState({
      [inputName]:value
    })
  }
  
  onSubmitHandler(){
    let name=this.state.name;
    let module=this.state.module;
    let email=this.state.email;

    let mentorObject={name,module,email};
    console.log(mentorObject)
    var url='https://react-vercel-abe1d.firebaseio.com/Mentors.json';
    var data=mentorObject;

    fetch(url,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json())
    .catch(error=>console.error("Error: ",error))
    .then(response=>console.log('Success: ',response));

    
  }
  
  componentDidMount(){
   fetch('https://react-vercel-abe1d.firebaseio.com/.json').
   then(
     response=>{
      response.json().then(
        json=>{
          console.log(json)
        }
      )
     }
   )
  }

  render(){
    return(
      <Form className="bg-dark  text-white border rounded p-3 mt-3 text-center">
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email"  placeholder="with a placeholder" onChange={this.onChangeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Name</Label>
        <Input type="text" name="name" placeholder="with a placeholder" onChange={this.onChangeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Module</Label>
        <Input type="text" name="module" placeholder="with a placeholder" onChange={this.onChangeHandler}/>
      </FormGroup>
      <Button onClick={this.onSubmitHandler}>Submit</Button>
      </Form>
    )
  }
}

export default MentorForm;
