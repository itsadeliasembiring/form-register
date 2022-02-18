import React from "react";
import CostDetail from "./Pages/CostDetail";
import FormRegister from "./Pages/FormRegister";
import SubmittedPage from "./Pages/Submitted";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={CostDetail} />
          <Route path="/form-register" component={FormRegister} />
          <Route path="/submitted-page" component={SubmittedPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
