import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import axios from "axios";


class EventCard extends Component{

   
  constructor(props){
      super(props);
      this.state = {
          employees: []
      }
  }

  componentDidMount(){
      axios.get('http://localhost:3000/employees')
      .then(result => {
          this.setState({employees:result.data})
      })
      .catch(error => {
          console.log("err")
      })
  }

  deleteEmployee(id) {
    axios.delete('http://localhost:3000/employees/'+id)
    .then(alert('Event deleted') )
    .catch(error => {
      console.log("err")
  })
  }

  render(){
      return(
          <div>
              {this.state.employees.map((user,index) =>{
                          return(
                               <div>
                                 
                               <Card style={{ width: '18rem',margin:'2%' }}>
                       <Card.Body>
                         <Card.Title>#{user.id} - {user.name}
                              </Card.Title>
                         <Card.Subtitle className="mb-2 text-muted">{user.desc}</Card.Subtitle>
                         <button className="btn btn-primary" style={{marginRight:"2%"}}>View</button> 
                         <button className="btn btn-secondary" onClick={() => this.deleteEmployee(user.id)}>Delete</button>
                       </Card.Body>
                     </Card>
                           </div>
                          )
                      })}
          </div>
      )
  }
}

export default EventCard;