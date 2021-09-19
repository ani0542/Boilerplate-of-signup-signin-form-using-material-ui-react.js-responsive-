
import './App.css';
// import Signin from './Components/Signin';
import SignUp from './Components/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './Components/Signin';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
