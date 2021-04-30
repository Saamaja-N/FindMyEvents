import React,{Component} from 'react';
import axios from "axios";
class EmployeeList extends Component{

   
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


    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((user,index) =>{
                            return(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeList;