import React, {Component}  from "react";
import {Redirect} from "react-router-dom"
import {Navbar} from '../navbar/navbar'
import "./home.css"

export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            question: "",
            questionError: "",
            answer: "",
            answerError : "", 
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        const token = localStorage.getItem('userToken')
        const url = process.env.REACT_APP_SERVER_URL + "/questions/5f03407e9483852a129e3086"


        console.log(url)
        
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
        .then((response) => {
            response.json()
            .then((body) => {
                console.log(body)
                this.setState({question: body.question})
                console.log(this.state.question)
            })
        })
        .catch(e => {
            console.error(e)
        }) 
    }

    validateForm(){
        let isValid = true
        if(!this.state.answer){
            this.setState({answerError : "Please submit your answer"})
            isValid =  false
        }

        if(this.state.answer && this.state.answer.length < 3){
            this.setState({answerError : "Answer must be more than 3 characters"})
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
        this.setState({answerError: "", questionError: ""})
        const token = localStorage.getItem('userToken')


        const isValid = this.validateForm()  

        if(isValid){
            const url = process.env.REACT_APP_SERVER_URL + "/submitAnswer"

            let data = {
                'question': this.state.question._id,
                'answer': this.state.answer,
            }

            fetch(url, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
                   'Accept': 'application/json',
                   'Authorization': token
               }, 
               body: JSON.stringify(data)
            })
            .then((response) => {
                console.log(response)
                
                console.log(response.status)
                response.json().then((body) => {
                    if (response.status === 400){
                        this.setState({answerError: "You already answered this question"})
                    }
                    else if (response.status === 200) {    
                        this.setState({answerError: "submitted"})
                    }
                    else if (response.status === 404){
                        this.setState({answerError: "..."})
                    }
                })
            })
            .catch(e => {
                console.error(e)
            })
        }
    }
    
    render () {
        if(localStorage.getItem('isLoggedIn') === "false"){
            console.log("i'm in home ")
            return <Redirect to="/"/>
        }
        return (
            <div className= "home-content ">
                {/*<Sidebar/>*/}
                <Navbar/>
                <div className="question">
                    <h2>{this.state.question.question}</h2>
                    <h2>{this.state.questionError}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input className="qst-input"
                            name= "answer" 
                            placeholder= "Your Answer" 
                            onChange= {this.handleChange} 
                            value={this.state.answer}>
                
                        </input>
                        <div style={{color: "red"}}>{this.state.answerError}</div> 
                        <br/>
                        <button className= "qst-button"> Submit Answer</button>
                    </form>
                </div>
            </div>
        )
    }
}