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
         axios({
            method: "GET",
            url:"http://localhost:5000/admin/getAllUser"
          }).then((response)=>{
              this.setState({users:response.data})
              console.log(this.state.users)
          })
    }
    
    render() {
        return (
            <div>
                <h3 align="center">These are the current users of Shopping Kart</h3>
                <br/><br/>
                {
                this.state.users.map((person, index) => (<UserCard></UserCard>))
            }
            
            </div>
        )
    
    }
}
export default AdminUserHome;