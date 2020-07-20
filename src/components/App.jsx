import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Login from "./Login";
import SignUp from "./SignUp";
import Calendar from "./Calendar";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} Calendar={Calendar} />
          <Route exact path="/Login" data-testid="login" component={Login} />
          <Route
            exact
            path="/SignUp"
            data-testid="sign-up"
            component={SignUp}
          />
          < Route exact path="/Calendar" component={Calendar} />
        </Switch>
      </>
    );
  }
}

export default App;
