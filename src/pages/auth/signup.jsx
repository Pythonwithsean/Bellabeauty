import "./signup.css";
import { useRef } from "react";

export default function Signup() {
  const usernameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();

  return (
    <>
      <form action="/signup" method="post" className="form_container">
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameref} name="username" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailref} name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" ref={passwordref} required />

        <button type="submit">Sign Up</button>
       
      </form>
      <p className="login_prompt">Already have an account? <a href="/login">Log in</a></p>

      
    </>
  );
}
