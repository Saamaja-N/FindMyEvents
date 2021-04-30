import React, {Component} from 'react';
import axios from 'axios';

class EmployeeAdd extends Component{
    constructor(props){
        super(props);
        this.state= {
            id:null,
            name:null,
            desc:null
        };
    }
    
handleSubmit = event =>{
    const employee = {
        id: this.state.id,
        name: this.state.name,
        desc: this.state.desc
    };
    axios.post('http://localhost:3000/employees',employee)
    .then(result => {
        console.log('obj added successfully');
    })
    .catch(error => {
        console.log("err")
    })
}

handleChange = event =>{
    const {name,value}= event.target;
    this.setState({[name]:value})
    console.log(this.state);
}
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Event ID</label>
                        <input type="text" className="form-control" name='id' onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Event Name</label>
                        <input type="text" className="form-control" name='name' onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Event Description</label>
                        <input type="text" className="form-control" name='desc' onChange={this.handleChange}/>
                    </div>
                    <input type="submit" className="btn btn-secondary" value="Submit"></input>
                </form>
            </div>

        );
    }
}

export default EmployeeAdd;