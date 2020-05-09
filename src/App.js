import React from "react";

import { useUser } from "./session/hooks";

import "./App.css";

function App() {
  const user = useUser();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {" "}
          Welcome: {user.displayName} - {user.email}{" "}
        </p>
      </header>
    </div>
  );
}

export default App;
