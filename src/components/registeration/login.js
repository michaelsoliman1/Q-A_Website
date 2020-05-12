import React, {Component}  from "react";
import {Redirect} from "react-router-dom"
import { useHistory } from "react-router-dom";
import loginImg from "../../login.svg";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./signup.css"

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            userNameError: "",
            passwordError: "",
            isLoggedIn : localStorage.getItem('isLoggedIn')

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    validateForm(){
        let isValid = true
        if(!this.state.userName){
            this.setState({userNameError : "Requiered"})
            isValid =  false
        }

        if(!this.state.password){
            this.setState({passwordError : "Requiered"})
            isValid = false
        }
       
        return isValid
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({userNameError: "", passwordError: ""})
        const isValid = this.validateForm()  

        if (isValid) {
            const {name, value} = event.target
            this.setState({
                [name] : value
            })
            console.log(this.state.isLoggedIn )
        }        
    }

    render() {
        if(this.state.isLoggedIn !== false) {
            return <Redirect to="/home"/>
        }
        return (
            <div className="body">
                 <header className = "head">
                    <h1>Welcome to veterians league</h1>
                    {/* <img id="img1" src={loginImg}></img> */}    

                </header>

                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="input"
                        name= "userName" 
                        placeholder= "userName" 
                        onChange= {this.handleChange} 
                        value={this.state.userName}>
                    </input>
                    <div style={{color: "red"}}>{this.state.userNameError}</div> 
                    <br/>
   
                    <input className="input"
                        name= "password" 
                        placeholder= "password" 
                        onChange= {this.handleChange}
                        value={this.state.password}>
                    </input>
                    <div style={{color: "red"}}>{this.state.passwordError}</div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <button className= "button" /* href="/home" */> Login</button>
                    <br/>   
                </form>
                <br/>
                <h4> Doesn't have an account ? <a href="/signup">Sign up</a></h4>
           </div>

        )
    }
}

























       /*  <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
                <div className="footer">
                <Button variant="primary">Login</Button>{' '}
                </div>
            </div>
        </div> */

/**
 * <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
 */