import React from "react";
import {Route, Switch } from "react-router-dom";
import "./css/App.css";
import "./font-en/font-en.css";
import HomePeges from "./Pages/HomePages";
import InfoPages from "./Pages/InfoPages";

function App() {

  return (

    <React.Fragment>
      <Switch>
        <Route path="/" exact component={HomePeges} />
        <Route path="/Info/:id" exact component={InfoPages} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
