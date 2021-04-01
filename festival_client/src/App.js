import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { SignIn } from "./components/user/signin"; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <SignIn /> 
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
