import React, {Component}  from "react";
import {Redirect} from "react-router-dom"
import { Sidebar } from '../sidebar/sidebar'

import "./home.css"

export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn')
        }
    }

    componentDidMount() {
        const token =localStorage.getItem('userToken') 
        console.log(token)

    }
    
    render () {
        if(this.state.isLoggedIn === false){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <Sidebar/>
                <div id="home-content" className = "home-content">
                    <h1>MAIN PAGE</h1>
                </div>
            </div>
        )
    }
}