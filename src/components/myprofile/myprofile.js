import React, {Component} from "react"
import {Navbar} from "../navbar/navbar"
import "./myprofile.css"


export class myProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myAnswers: [],
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
                console.log(body)
                this.setState({myAnswers : body})                 
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
                
                {this.state.myAnswers.map(answer => (
                    <div key={answer._id} className="answers">
                        <div>{answer.question} </div>
                        <div>{answer.answer}</div>
                    </div>
                ))}
            </div>
        )
    }    
}