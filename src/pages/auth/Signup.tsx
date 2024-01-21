import React, { FormEvent, LegacyRef, MutableRefObject, useRef } from "react";
import "./signup.css";

export default function Signup() {
  const usernameRef: MutableRefObject<
    HTMLFormElement | HTMLInputElement | undefined
  > = useRef();
  const emailRef: MutableRefObject<
    HTMLFormElement | HTMLInputElement | undefined
  > = useRef();
  const passwordRef: MutableRefObject<
    HTMLFormElement | HTMLInputElement | undefined
  > = useRef();

  const [error, setError] = React.useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form_container">
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={usernameRef as LegacyRef<HTMLInputElement>}
          name="username"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          ref={emailRef as LegacyRef<HTMLInputElement>}
          name="email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef as LegacyRef<HTMLInputElement>}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
      <p className="login_prompt">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </>
  );
}
