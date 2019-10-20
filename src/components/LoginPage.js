import React, {Component} from 'react';
import './../components/Login.css'

class LoginPage extends Component{
    constructor(){
        super();
    }

    onSubmitLogin(){
        var email = document.getElementById("myemail").value;
        var password = document.getElementById("mypassword").value;

        if(email === 'admin@admin.com' && password === '12345')
        {
            this.props.history.push('/bus')
        }
        else{
            alert("Please check your details and try again");
        }
    }

    render(){
        return(
            <div className="loginStyle">
                <form onSubmit={this.onSubmitLogin.bind(this)}>
                    <h1>Login Page</h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address     </label>
                        <input type="email" class="form-control" id="myemail" aria-describedby="emailHelp" placeholder="Enter email"/>
                       </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password               </label>
                        <input type="password" class="form-control" id="mypassword" placeholder="Password"/>
                    </div>
                    <button type="submit" class="loginBtn">Login</button>
                    </form>
            </div>
        )
    }
}

export default LoginPage;