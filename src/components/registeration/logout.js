import React, {Component}  from "react";
import {Redirect, withRouter} from "react-router-dom"

class Logout extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn')
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const token =localStorage.getItem('userToken') 
        console.log(localStorage.getItem('isLoggedIn')) 
    }

    handleSubmit(event) {
        event.preventDefault()
        const {history} = this.props

        const token = localStorage.getItem('userToken')
        let url = process.env.REACT_APP_SERVER_URL + "/user/logout"
        fetch(url, {
            method : "POST",
            headers: {
                'Authorization' :token
            }
        })
        .then((response) => {
            response.json()
            .then((body) => {
                if(response.status === 200) {
                    localStorage.removeItem('userToken')
                    
                    this.setState({isLoggedIn: false})
                   
                    localStorage.setItem(('isLoggedIn'), this.state.isLoggedIn)

                    history.push('/')
                }
            })
        })

    }
    
    render () {
        if(localStorage.getItem('isLoggedIn') === "false"){
            return <Redirect to="/"/>
        }
        return (
            <div className="dropdown-content">
               <a onClick={this.handleSubmit}>Logout</a>
            </div>
        )
    }
}
export default withRouter(Logout)