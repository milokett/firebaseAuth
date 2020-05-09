import React from "react";

const LoginScreen = ({ signIn, status }) => (
  <div className="login">
    <h1> Welcome </h1>
    <h2> Log In </h2>
    {status === "init" && <span>Trying to restore session...</span>}
    {status === "restored" && (
      <button onClick={signIn}>Login with Google</button>
    )}
  </div>
);

export default LoginScreen;
