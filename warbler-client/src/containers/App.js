import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "../components/Homepage";

const App = () => (
    <Router>
      <div className="onboarding">
        <Homepage />
      </div>
    </Router>
);

export default App;