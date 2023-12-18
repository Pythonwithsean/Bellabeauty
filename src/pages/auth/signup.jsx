import React, { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./signup.css";

export default function Signup() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = React.useState("");
  

  const  handleSubmit = async (e) => {
    e.preventDefault();

    try{

      if(passwordRef.current.value.length === 0 || usernameRef.current.value.length === 0 || emailRef.current.value.length === 0){
        alert("Please fill in all the fields");
        return setError("Please fill in all the fields");
  
       
    }else if(passwordRef.current.value.length < 3){ 
      alert("Password must be at least 3 characters");
      return setError("Password must be at least 6 characters");
    }
    else if()
    

    await signup(emailRef.current.value, passwordRef.current.value);

    }catch(err){
      setError("Failed to create an account");
    }

  
  

  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form_container">
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameRef} name="username" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" ref={passwordRef} required />
        

        <button type="submit">Sign Up</button>
      </form>
      <p className="login_prompt">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </>
  );
}