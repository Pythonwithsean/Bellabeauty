import { FormEvent, LegacyRef, MutableRefObject, useRef } from "react";
import "../../styles/signup.css";

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

  const signUpFunc = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await fetch("http://localhost:5702/auth/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        console.log("Sign up successful");
        const r = await response.json();
        console.log(r.TOKEN);
        localStorage.setItem("TOKEN", r.TOKEN);
      } else {
        console.error("Sign up failed");
      }
    } catch (err) {
      console.error("Error occurred during sign up:", err);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpFunc(
      usernameRef.current?.value,
      emailRef.current?.value,
      passwordRef.current?.value
    );
  };

  return (
    <>
      <div className="sign-up-container">
        <form onSubmit={handleSubmit} className="form_container">
          <h2>Sign Up</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={usernameRef as LegacyRef<HTMLInputElement>}
            key={"Username Key"}
            name="username"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            ref={emailRef as LegacyRef<HTMLInputElement>}
            name="email"
            key={"Email Key "}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef as LegacyRef<HTMLInputElement>}
            key={"Password Key"}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        <p className="login_prompt">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </>
  );
}
