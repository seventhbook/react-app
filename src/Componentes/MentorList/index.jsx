import React,{Component} from 'react';
import firebase from '../../Services/firebase'
import { Table } from 'reactstrap';

class MentorList extends Component{
  constructor(){
    super();
    this.state={
      mentorsList:{}
    }
    
  }
  
  componentDidMount(){
    fetch('https://react-vercel-abe1d.firebaseio.com/Mentors.json').
    then(
      response=>{
       response.json().then(
         json=>{
           console.log(json)
           this.setState({mentorsList:json})
         }
       )
      }
    )
   } 

   
  
  render(){
    return(
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Modulo</th>
        </tr>
      </thead>
      <tbody>
        {
        
          Object.keys(this.state.mentorsList).map(
            (key,index)=>{
              let mentorName=this.state.mentorsList[key].name
              let mentorEmail=this.state.mentorsList[key].email
              let mentorModule=this.state.mentorsList[key].module
              return(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                    <td>{mentorName}</td>
                    <td>{mentorEmail}</td> 
                    <td>{mentorModule}</td>
                </tr> 
              )
            }
          )
        }
        
      </tbody>
    </Table>
    )
  }
}

export default MentorList;
