import React, {Component} from "react"
import {Navbar} from "../navbar/navbar"
import "./myprofile.css"

export class myProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myAnswers: [],
            answerError: "",
            score : "",

        }
    }

    componentDidMount() {
        const token = localStorage.getItem('userToken')
        const url = process.env.REACT_APP_SERVER_URL + "/user/myAnswers"

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            }
        })
        .then(response => {response.json()
            .then(body => {
                if (response.status === 200) {
                    this.setState({myAnswers : body.answers})                 
                }
                else if (response.status === 404) {
                    this.setState({
                        answerError: "You didn't answer any questions!",
                        myAnswers: undefined
                    })
                }
            })
        })
        .catch(e => {
            console.log(e)
        })

    }


    render() {
        /* if(this.state.myAnswers.length == 0) {
            return  <div>You didn't answer any questions</div>
        } */
        return (
            <div className="home-content"> 
                <Navbar/>
                <div className="score">
                    <h2> Your Score : {this.state.score} </h2>
                </div>
                { !this.state.myAnswers ? <div className = "question"> {this.state.answerError} </div> : 
                this.state.myAnswers.map(answer => (
                    <div className="question" key={answer.answer_id}>
                        <h3>{answer.question} </h3>
                        <br/>
                        <h4>{answer.answer}</h4>
                    </div>
                ))}
            </div>
        )
    }    
}