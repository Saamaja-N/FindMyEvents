import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerphoto from '../img/photoheader.jpg';
import StyleSheet from 'react';
import EventCard from './EventCard.js';
import EmployeeAdd from './EmployeeAdd';

const Home = () => {
    return(
      <div>
      <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">FindMyEvents</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text style={{paddingRight:"2%"}}>
   About Us
    </Navbar.Text>
    <Navbar.Text style={{paddingRight:"2%"}}>
      Contact
    </Navbar.Text>
    <Navbar.Text style={{paddingRight:"2%"}}>
      Log out
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
<img src={headerphoto} style={{height: '50%', width: '85%', borderRadius:'2%', marginLeft:'8%'}}></img>
<h3>Events coming up !!</h3>
<EventCard/>
<h2>Want to add an event?</h2>
<EmployeeAdd/>
</div>
    )
  }
  
export default Home;