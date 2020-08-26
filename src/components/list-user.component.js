// ** create-user.component.js ** //

import React, { Component } from 'react';
import commonService from "../services/common.services";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import EditUser from "./edit.component";

export default class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employess: []
        } 
      }
    
    componentDidMount() {
        this.getEmployes();
    }
    getEmployes() {
        commonService.getAllEmployees()
            .then(response => {
                console.log(response.data.data);

                this.setState({
                    employess: response.data.data
                });
                console.log(this.state.employess)

            })
            .catch(e => {
                console.log(e)
            })
    }
    render() {
        return (
     /*      <div> <p>bkdfksjdfjsdfnjl</p></div>  */
            /* if (!this.state.employess) {
            return <span>Sorry, color list is empty.</span>;
        } */
        <div> 
            <Router>
      <Switch>
        <Route path="/info" component={EditUser}></Route>
      </Switch>
      
    </Router>{
            this.state.employess.map(res => (
                <p>{res.first_name}</p>
            ))
        }
            <p >Create User Component!!</p>
        </div>
        )
    }
}