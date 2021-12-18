import Signup from"./Signup"
import Login from "./login";
import Home from './Home';
import Contact from './Contact'
import Appointment from "./Appointment";
import {BrowserRouter as Router ,Switch,Route,Link} from "react-router-dom";
function App() {
  return (
    <Router>
      <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">MagicHospital</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><Link to='/Home'>Home</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
     
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><Link to="/Signup"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>
 
    <Switch>
      <Route exact path ="/login">
        <Login/>
      </Route>
      <Route exact path="/Home" >
        <Home/>
      </Route>
      <Route exact path="/Signup">
        <Signup/>
      </Route>
      <Route exact path="/Contact">
      <Contact/>
      </Route>
      <Route exact path ="/Appointment">
        <Appointment/>
      </Route>
    </Switch>
    </Router>

  );
}

export default App;
