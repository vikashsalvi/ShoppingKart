import React, {Component} from "react";
import './UserProfile.css';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state ={
            isDisabled: true,
            fn: 'Deep',
            ln: 'Muni',
            date: '1994-06-04',
            fname: {status: false, text: ''},
            lname: {status: false, text: ''},
            dob: {status: false, text: ''},
            main: {status: false, text: ''}
        }

        this.edit = this.edit.bind(this);
        this.validate = this.validate.bind(this);
        this.update = this.update.bind(this);

    }

    validate(e){
        const field = e.target;
        let update = {};

        switch(e.target.id){
            case 'fname':
                if(field.value === ""){
                    update = {status : true, text :'First Name is required'}
                }else if(field.value.length < 4 || field.value.length > 21){
                    update = {status : true, text :'Length between 4 & 21'}
                }else{
                    update = {status : false, text :''}
                }
                this.setState({
                    fname: update,
                    fn: e.target.value
                });
                break;
            case 'lname':
                if(field.value === ""){
                    update = {status : true, text :'Last Name is required'}
                }else if(field.value.length < 4 || field.value.length > 21){
                    update = {status : true, text :'Length between 4 & 21'}
                }else{
                    update = {status : false, text :''}
                }
                this.setState({
                    lname: update,
                    ln: e.target.value
                });
                break;
            case 'dob':
                if(field.value === ""){
                    update = {status : true, text :'Date of Birth is required'}
                }else{
                    update = {status : false, text :''}
                }
                this.setState({
                    dob: update,
                    date: e.target.value
                });
                break;
            default:
                break;
        }
    }

    edit(){
        this.setState({
            isDisabled: false
        })
    }

    update(){
        if(this.state.isDisabled){
            alert("Please go to edit mode");
        }else if(this.state.fname.status || this.state.lname.status || this.state.dob.status){
            this.setState({
                main : {status: true, text: 'Please correct the errors!!'}
            });
            setTimeout(() => {
                this.setState({
                    main : {status: false, text: ''}
                });
            },2500);
        }else{
            this.setState({
                isDisabled: true
            });
            alert("Updated");
        }
    }

    render() {
        return (
            <div>
                <div className="profile-area">
                    <div className="profile-image">Profile Image</div>
                    <div className="profile-details">
                        <form>
                            <i className="fa fa-pencil edit" onClick={this.edit}>
                                <span className="tag">Edit</span>
                            </i>
                            <div className="input-section">
                                <label htmlFor="uname">User Name</label>
                                <input type="text" id="uname" className="inp" value="deepmuni94" disabled/>
                            </div>
                            <div className="input-section">
                                <label htmlFor="fname">First Name</label>
                                <input type="text" id="fname" className="inp" value={this.state.fn}
                                       disabled={this.state.isDisabled} onChange={this.validate}/>
                                {this.state.fname.status ? <div className="error">{this.state.fname.text}</div> : null}
                            </div>

                            <div className="input-section">
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" className="inp" value={this.state.ln}
                                       disabled={this.state.isDisabled} onChange={this.validate}/>
                                {this.state.lname.status ? <div className="error">{this.state.lname.text}</div>: null}
                            </div>

                            <div className="input-section">
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="date" id="dob" className="inp" value={this.state.date}
                                       disabled={this.state.isDisabled} onChange={this.validate}/>
                                {this.state.dob.status ? <div className="error">{this.state.dob.text}</div>: null}
                            </div>
                        </form>

                        <div className="input-section">
                            {this.state.main.status ? <div className="submitError">{this.state.main.text}</div> : null}
                            <button className="submit" onClick={this.update}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
