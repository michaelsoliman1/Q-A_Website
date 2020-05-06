import React, {Component}  from "react";
import "./home.css"

export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div className = "homePage">
                <h1>MAIN PAGE</h1>
            </div>
        )
    }
}