import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { getUserData, submitLogin } from "./../../redux/actions/loginAction";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login() {
    const { email, password } = this.state;
    this.props.submitLogin(email, password);
  }

  componentWillReceiveProps(props) {
    const { userData, loginError } = props;
    if (loginError) {
      alert(loginError);
    }
    if (userData && userData.length) {
        window.open("/home","_self")
          
    }
  }

  componentDidMount() {
    this.props.getUserData("users");
  }

  render() {
    const { email, password } = this.state;
    this.disable = email && password ? true : false;
    return (
      <React.Fragment>
        <div className="login-box">
          <div className="controls">
            <label className="left">Email address</label>
            <input
              type="email"
              onChange={(event) => this.setState({ email: event.target.value })}
              className="right"
            />
          </div>
          <div className="controls">
            <label className="left">Password</label>
            <input
              type="password"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
              className="right"
            />
          </div>
          <button
            type="submit"
            onClick={() => this.login()}
            className="btn btn-primary"
          >
            Submit
          </button>
          <div>
            <ul>
              <li>
                <Link to="/register">Don't have an account? Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loginError: state.loginReducer.loginError,
  userData: state.loginReducer.result,
  
});
const mapDispatchToProps = {
  getUserData,
  submitLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
