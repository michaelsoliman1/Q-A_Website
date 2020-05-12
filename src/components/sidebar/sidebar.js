import React, {Component}  from "react";
import "./sidebar.css"

export class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.openNav = this.openNav.bind(this)
    }

    openNav(event){
        event.preventDefault()
        console.log("im in open")
        document.getElementById("mySidenav").style.width = "250px";   
        document.getElementById("home-content").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; 
    }
    closeNav(event){
        event.preventDefault()
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("home-content").style.marginLeft = "0";
        document.body.style.backgroundColor = "white"; 
        console.log("im in close")

    }

    render () {
     
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a className="closebtn" onClick={this.closeNav}>&#9776;</a>
                    <a href="#">News</a>
                    <a href="#">Profile</a>
                </div>
                <a className="openbtn" onClick={this.openNav}>&#9776;</a>
            </div>
            
            
        )
    }
}

