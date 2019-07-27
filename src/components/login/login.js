import './login.css'
import React, { Component }  from 'react'; 

class Login extends Component {

    render () {
        return (
            <div className="login-container">
                <h3 className="login">Login or Register</h3>
                <button className="login">Login</button>
                <button className="Register">Register</button>
            </div>
        )
    }
}

export default Login; 