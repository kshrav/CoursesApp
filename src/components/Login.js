import React, { useState } from "react";
import "./Login.css";
import { handleLogin } from "./LoginFunctionality";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const result = handleLogin(email, password);
    setMessage(result.message);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {message && <div className="login-message">{message}</div>}
      </form>
    </div>
  );
};

export default Login;
