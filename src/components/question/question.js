import React, {Component} from 'react'

export class Question extends Component {
    constructor(props) {
        super(props)
        this.state ={

        }
    }


    render() {
        return (
            <div>
                <h2>{this.state.question.question}</h2>
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
        )
    }
}