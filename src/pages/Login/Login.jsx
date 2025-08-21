import React, { useState } from 'react'
import './Login.css'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Demo Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Demo Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return (
    loading ? (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="loading..." />
      </div>
    ) : (
      <div className="login">
        {/* Disclaimer Banner */}
        <div
          style={{
            backgroundColor: "#ffcccc",
            color: "#660000",
            padding: "10px",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "15px"
          }}
        >
          ⚠️ Demo project for learning purposes only. 
          No real login or personal data collected.
        </div>

        {/* Fake Demo Logo */}
        <h1 className="login-logo" style={{ color: "red", fontWeight: "bold" }}>
          ReactFlix (Demo)
        </h1>

        {/* Form */}
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState === "Demo Sign Up" ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Demo Name"
              />
            ) : null}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Demo Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Demo Password"
            />
            <button onClick={user_auth} type="submit">
              {signState}
            </button>

            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label>Remember Me (Demo)</label>
              </div>
              <p>Need Help? (Demo only)</p>
            </div>
          </form>

          {/* Switch between Sign In & Sign Up */}
          <div className="form-switch">
            {signState === "Demo Sign In" ? (
              <p>
                New to ReactFlix?{" "}
                <span onClick={() => setSignState("Demo Sign Up")}>
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setSignState("Demo Sign In")}>
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Login;