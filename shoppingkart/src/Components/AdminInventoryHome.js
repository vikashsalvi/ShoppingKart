/**

 @author    Hardik Dudhrejia => B00835071

 **/


import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/AdminInventoryHome.css'

class AdminHome extends React.Component{
    render(){
        return(
            <div align="right" className="container" id="main-tag">
            <br/>
                <div className="row">
                    <div className="col-sm-3">
                        <Link to="/createProduct"><button className="btn btn-primary">Insert Product</button></Link>
                    </div>
                    <div className="col-sm-3">
                       <Link to="/updateProduct"><button className="btn btn-primary">Update Product</button></Link>
                    </div>
                    <div className="col-sm-3">
                    <Link to="removeProduct"> <button className="btn btn-primary">Delete Product</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminHome;
