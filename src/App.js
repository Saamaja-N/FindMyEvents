import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import Home from './components/Home';
import UserList from './components/userlist';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';

class App extends Component{
state = {
  loggedIn: false
}

loginHandle = () => {
 this.setState(prevState => ({
   loggedIn: !prevState.loggedIn
 }))
}

  render(){
    return(
      <div>
        <BrowserRouter>
       
          <Route path="/" render={Home}></Route>
          <Route path="/userlist" component={UserList}></Route>
          <Route path="/emp" component={EmployeeList}></Route>
          <Route path="/empdetails" component={EmployeeDetails}></Route>
        </BrowserRouter>
        </div>
    )
  }
}

export default App;
