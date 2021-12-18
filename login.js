import React from 'react'
import './login.css';
const Login = () => {
    return (
        <div className="login">
            <div> 
        <form class="box">
         <h1>LOGIN</h1>
         <input type="text" placeholder="Username"/>
         <input type="password" placeholder="Password"/>
         <input type="submit" value="Login"/>
        </form>
    </div>
        </div>
    )
}
export default Login
