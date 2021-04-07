import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Festival } from './components/festival/Festivals';
import { SignIn } from "./components/user/SignIn"; 
import { SignUp } from "./components/user/SignUp";
import { MyFestivals } from "./components/festival/MyFestivals";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <SignIn /> 
          </Route>
          <Route exact path="/signup">
            <SignUp /> 
          </Route>
          <Route exact path="/festivals">
            <Festival />
            <MyFestivals />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export { App };
