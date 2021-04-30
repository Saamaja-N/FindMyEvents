import React,{Component} from 'react';
import axios from "axios";
class UserList extends Component{

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result => {
            const users=result.data;
            this.setState({users:users})
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
                        {this.state.users.map((user,index) =>{
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

export default UserList;