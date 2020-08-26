import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListUser from "./components/list-user.component";
import AddUser from "./components/add-user.component";
import AppOverall from "./components/app-overall.component";
import EditUser from "./components/edit.component";

function App() {
  return (<Router>
    <div><Link to={"/list-user"}>List</Link>
      <Link to={"/add-users"}>Add User</Link>
      <Link to={"/app-overall"}>Add approval</Link>
      <Link to={"/edit-users"}>Edit approval</Link>
    </div>

    <div><Switch>
      <Route exact path='/' component={ListUser} />
      <Route path="/list-user" component={ListUser} />
      <Route path="/add-users" component={AddUser} />
      <Route path="/app-overall" component={AppOverall} />
      <Route path="/edit-users" component={EditUser} />
    </Switch></div>
  </Router>

  );
}

export default App;
