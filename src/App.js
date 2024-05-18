import React from "react";

const App = () => {
  return (
    <div className="content-container">
      
      <div className="login-container">
        <h2>LOGIN</h2>
        <input type="text" className="userName" placeholder="Username"/><br/>
        <input type="password" className="password" placeholder="Password"/><br/>        
        <button className="login-button">LOGIN</button>
        <div className="container">
            <p>Forgot Password</p>
            <p>Register</p>
        </div>
      </div>
      <div>
        <img className="hamburger" src="hamburger.jpg" alt="hamburger"/>
       
      </div>
      <div className="background"></div>
    </div>
  );
};

export default App;
