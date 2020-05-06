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
/*         document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; */
    }
    closeNav(event){
        event.preventDefault()
        document.getElementById("mySidenav").style.width = "0";
/*         document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white"; */
        console.log("im in close")

    }

    render () {
     
        return (
            <div>
                <script>
                    
                </script>
                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <button onClick={this.openNav}>open</button>
            </div>
            
            
        )
    }
}

