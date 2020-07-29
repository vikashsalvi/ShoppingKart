import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/home.css'

class AdminHome extends React.Component{

    componentDidMount(){
        if((localStorage.getItem("username") !== null) && (localStorage.getItem("username").toLowerCase() === "admin")){
            this.props.history.push('/admin')
        }
        else{
            this.props.history.push('/login')
        }
    }
    render(){
        return(
            <div align="center" className="container" id="main-tag">
            <br/>
                <div className="row">
<<<<<<< HEAD
                    <div className="col-sm-5">
                        <Link to="/adminUserManagement"><button className="btn btn-primary">User Management</button></Link>
                    </div>
                    <div className="col-sm-5">
                       <Link to="/adminInventoryManagement"><button className="btn btn-primary">Inventory Management</button></Link>
=======
                    <div className="col-sm-2">
                        <Link to="/createProduct"><button className="btn btn-primary">Insert Product</button></Link>
                    </div>
                    <div className="col-sm-2">
                       <Link to="/updateProduct"><button className="btn btn-primary">Update Product</button></Link>
                    </div>
                    <div className="col-sm-2">
                    <Link to="removeProduct"> <button className="btn btn-primary">Delete Product</button></Link>
>>>>>>> f7d9d3bb405779c2e327b29f88aba682afbfc3a5
                    </div>
                    <div className="col-sm-2">
                    <Link to="/manageDiscount"> <button className="btn btn-primary">Manage Discount</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminHome;
