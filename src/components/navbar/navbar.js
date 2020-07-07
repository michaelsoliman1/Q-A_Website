import React, {Component}  from "react"
import Logout from '../registeration/logout'
import "./navbar.css"

export class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render () {
     
        return (
            <div>
                <ul>
                    <li><a href="/home">Veterans</a></li>
                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropbtn">Profile</a>
                        <div className="dropdown-content">
                            <a href="/myprofile">My Profile</a>
                            <Logout />
                        </div>
                    </li>
                    <li className = "right"><a href="#news">News</a></li>

                </ul>
            </div>
            
            
        )
    }
}

