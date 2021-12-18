import React from 'react'
import './login.css';
const Signup = () => {
    return (
         <div className="login">
            <div> 
        <form class="box">
         <h1>Signup</h1>
         <input type="text" placeholder="Username"/>
         <input type="text" placeholder="Phone no."/>
         <input type="password" placeholder="Enter password"/>
         <input type="password" placeholder="Renter Password"/>
         <input type="submit" value="Sign Up"/>
        </form>
    </div>
        </div>
    )
}

export default Signup
