import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';


class login extends React.Component {

    login() {
        console.log("login Clicked!");
    }

    render() {
        return (
            <React.Fragment>
                <div className="login-box">
                    <div className="controls">
                        <label for="exampleInputEmail1" className="left form-label">Email address</label>
                        <input type="email" className="right form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="controls">
                        <label for="exampleInputPassword1" className="left form-label">Password</label>
                        <input type="password" className="right form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" onClick={this.login()} className="btn btn-primary">Submit</button>
                    <div>
                    <Link to="/register">Don't have an account? Register</Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default login;