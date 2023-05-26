import React from 'react'
import Nav1 from './Units/Nav1.jsx'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import AddItem from './Pages/AddItem';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export default function App() {
  return (
    <div>
      <Nav1></Nav1>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddItem/>} />
          <Route path="/login" element={<Login />} />
       </Routes>
       <Container className="d-flex justify-content-center">
       <h1 className='mx-5'>PRODUCTS</h1>
      <Button variant="success">Add +</Button>{' '}

       </Container>
    </div>
  )
}
