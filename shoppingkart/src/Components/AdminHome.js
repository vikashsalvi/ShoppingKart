/**

 @author    Hardik Dudhrejia => B00835071

 **/


import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/home.css'

class AdminHome extends React.Component{
    render(){
        return(
            <div align="center" className="container" id="main-tag">
            <br/>
                <div className="row">
                    <div className="col-sm-5">
                        <Link to="/adminUserManagement"><button className="btn btn-primary">User Management</button></Link>
                    </div>
                    <div className="col-sm-5">
                       <Link to="/adminInventoryManagement"><button className="btn btn-primary">Inventory Management</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminHome;
