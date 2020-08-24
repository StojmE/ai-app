import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import Home from "./pages/Home";
import OverView from "./pages/AlOverview";
import CompareView from "./pages/AIComapre";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/overview" component={OverView} />
      <Route exact path="/compare" component={CompareView} />
    </Switch>
  );
}

export default withRouter(App);
