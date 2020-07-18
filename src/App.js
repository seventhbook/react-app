import React from 'react';
import logo from './logo.svg';
import './App.css'
import SampleList from './Componentes/SampleList/index.jsx'
import Greeting from './Componentes/Greeting/index.jsx'
import {
  Container,Row,Col
} from 'reactstrap';
import MentorForm from './Componentes/MentorForm';
import MentorList from './Componentes/MentorList';

let styles={
  textAlign:'center'
}
function App() {
  return (
    <Container>
      <Row>
        <Col xs="12" md="8" className="pt-5">
          <h1>Hola Mundo Formulario Inicial</h1>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="8" >
          <MentorForm/>
        </Col>
      </Row>
      <Row className="p-3 mt-3">
        <Col xs="12" md="8" >
          <MentorList/>
        </Col>
      </Row>
     
    </Container>
  );
}

export default App;
