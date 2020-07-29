import React from 'react'
import axios from 'axios';
import UserCard from './UserCard';

class AdminUserHome extends React.Component{
    constructor(){
        super()
        this.state={
            users: []
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:5000/admin/getAllUsers").then(response => {
            this.setState({users:response.data})
          })
          .catch(error => {
            console.log(error)
          })
        }
        
        deleteUser(id,index){

            console.log("User deleted with", id,"and with index",index)
            this.state.users.splice(index,1)
            this.setState({users:this.state.users})
        //     axios.post("http://localhost:5000/admin/deleteUser",{
        //         id:id
        //     }).then(response => {
        //     console.log(response)

        //     //Axios call to get user
        //     this.setState({users:response.data})
        //   })
        //   .catch(error => {
        //     console.log(error)
        //   })


        }
    
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Delete User?</th>
                        </tr>
                    </thead>
                    <tbody>
                    {console.log(this.state.users)}
                    {this.state.users.length>0?
                            this.state.users.map((person, index) => 
                            (
                            <tr>    
                                <th scope="row">{person._id}</th>
                                <td>{person.firstname}</td>
                                <td>{person.lastname}</td>
                                <td><button className="btn btn-outline-primary"
                                    onClick={this.deleteUser.bind(this,person._id,index)}>Delete User</button></td>
                            </tr>
                            ))
                            :null}   
                        
                    </tbody>
                </table>
                                    {/* <br/><br/>
                <div className="row">
                    <div className="col-xs-2">
                        {this.state.users.length>0?
                        this.state.users.map((person, index) => 
                        (<UserCard person={person} deleteUser={this.callBackdeleteUser}/>))
                        :null} 
                    </div>
                </div> */}
            </div>
        )
    
    }
}
export default AdminUserHome;