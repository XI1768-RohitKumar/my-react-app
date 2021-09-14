import React from 'react';
import {Redirect} from 'react-router-dom';


class registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            zipcode: "",
            isRegistered: false
        }
    }

    userSignUp() {
        const { name, email, zipcode } = this.state;

        localStorage.setItem("registeredUser", JSON.stringify({name, email, zipcode}));
        this.setState({isRegistered: true});

        window.open("/login","_self");
    }

    render() { 
        return (
            <React.Fragment>
                <div class="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" onChange={(event) => this.setState({name: event.target.value})} />
                </div>
                <div class="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" onChange={(event) => this.setState({email: event.target.value})} />
                </div>
                <div class="mb-3">
                    <label for="zipcode" className="form-label">Zip code</label>
                    <input type="password" onChange={(event) => this.setState({zipcode: event.target.value})} />
                </div>
                <button type="submit" onClick={() => this.userSignUp()} class="btn btn-primary">Submit</button>

                {this.state.isRegistered ? <p>User registration successful!</p> : <p></p>}
            </React.Fragment>
        );
    }
}
 
export default registration;
