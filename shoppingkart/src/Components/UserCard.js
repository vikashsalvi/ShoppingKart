import React from 'react';
import Axios from 'axios';

class UserCard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            user: this.props.person
            }
    }

    deleteItem(id){
            this.props.deleteUser(id);    
    }

    render(){
        return(
        <div  className="card text-white bg-info mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-header">{this.state.user.firstname+ " "} {this.state.user.lastname}</div>
            <div className="card-body">
        <h5 className="card-title">{this.state.user.username}</h5>
        <button className="btn btn-success" onClick={this.deleteItem.bind(this,this.state.user._id)}>Delete</button>
            </div>
        </div>

        )}
}
export default UserCard;