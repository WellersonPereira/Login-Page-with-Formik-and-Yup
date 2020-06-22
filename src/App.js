import React, { Component } from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import SignUpform from './pages/SignUpForm';
import SingInForm from './pages/SignInForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App_Aside"></div>
          <div className="App_Form">

            <div className="PageSwitcher">
              <NavLink to="/sign-in"
              activeClassName="PageSwitcher_Item--Active"
              className="PageSwitcher_Item">Sign In</NavLink>

              <NavLink exact to="/"
              activeClassName="PageSwitcher_Item--Active"
              className="PageSwitcher_Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
              <NavLink to="/sign-in"
                activeClassName="FormTitle_Link--Active"
                className="FormTitle_Link">Sign In</NavLink>
              or
            <NavLink exact to="/"
                activeClassName="FormTitle_Link--Active"
                className="FormTitle_Link">Sign Up</NavLink>
            </div>

            <Route exact path="/" component={SignUpform} />
            <Route path="/sign-in" component={SingInForm}>
            </Route>
          </div>
        </div >
      </BrowserRouter>
    );
  }
}

export default App;
