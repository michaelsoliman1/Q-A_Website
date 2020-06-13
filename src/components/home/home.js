import React, {Component}  from "react";
import {Redirect} from "react-router-dom"
import { Sidebar } from '../sidebar/sidebar'
import Logout from '../registeration/logout'

import "./home.css"

export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn')
        }
    }

    
    
    render () {
        if(localStorage.getItem('isLoggedIn') === "false"){
            console.log("i'm in home ")
            return <Redirect to="/"/>
        }
        return (
            <div>
                <Sidebar/>
                <div id="home-content" className = "home-content">
                    <h1>Welcome to , <br/>Veterans League</h1>
                </div>
            </div>
        )
    }
}