import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Main from "./components/main.component";
import MainUser from "./components/mainUser.component";
import MainAdmin from "./components/mainAdmin.component";
import Register from "./components/register.component";
import Login from "./components/login.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={Main}/>
        <Route path="/user" component={MainUser}/>
        <Route path="/admin" component={MainAdmin}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
  );
}

export default App;
