import React from 'react';
import Card from 'react-bootstrap/Card';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  //return <div className='card bg-dark text-white m-5' style={{maxWidth:'18rem'}}>
  //  <div className='card-header'>Notebook</div>
  //  <div className='card-body'>
  //    <h5 className='card-title'>R$ 2500</h5>
  //    <p className='card-text'>Esse é um Notebook com 16gb e placa de video top, confia.</p>
  //  </div>
  //</div>;
  return <Card bg='dark' text='white' className='m-5' style={{maxWidth: '18rem'}}>
    <Card.Header>Notebook</Card.Header>
    <Card.Body>
      <Card.Title>R$ 2500</Card.Title>
      <Card.Text>abluea sdluasldbnj sakdjhk asbnasdu</Card.Text>
    </Card.Body>
  </Card>
}

export default App
