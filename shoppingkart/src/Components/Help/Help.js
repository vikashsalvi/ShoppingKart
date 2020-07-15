import React,{Component} from "react";
import './Help.css';
import Question from "./Question/Question";

class Help extends Component {

    constructor(props) {
        super(props);

        this.questions = [
            {question: "Question 1", answer: "Answer 1"},
            {question: "Question 2", answer: "Answer 2"},
            {question: "Question 3", answer: "Answer 3"},
            {question: "Question 4", answer: "Answer 4"},
            {question: "Question 5", answer: "Answer 5"}
        ];

        this.selected = [];

        this.state = {
            chat: [],
            suggestion : []
        };

        this.fillSuggestion = this.fillSuggestion.bind(this);
        this.itemClick = this.itemClick.bind(this);
    }

    chat(){
        return (
            <div className="que-ans">
                <div className="ans">
                    <span>Welcome to Help Center !! Please ask your question</span>
                </div>
                {
                    this.state.chat.map((tup, index) => {
                        return(
                            <div className="set" key={index}>
                                <div className="que">
                                    <span>{tup.question}</span>
                                </div>
                                <div className="ans">
                                    <span>{tup.answer}</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    fillSuggestion(e){
        const userInp = e.target.value;
        let suggestion = [];
        if(userInp.length > 0){
            suggestion = this.questions.filter(item => {
                return item.question.toLowerCase().includes(userInp.toLowerCase());
            });
        }
        this.setState({
            suggestion: suggestion
        })
    }

    questionList(){
        if(this.state.suggestion.length === 0){
            return null;
        }
        return(
            <div className="queSuggestion">
                {
                    this.state.suggestion.map((item, index) => {
                        return <Question key={index} question={item.question} onClick={this.itemClick}/>
                    })
                }
            </div>
        );
    }

    itemClick(e) {
        document.getElementById("question").value = e.target.innerText;

        const tup = this.state.suggestion.filter((t) => {
            return t.question === e.target.innerText;
        });

        this.selected.push(tup[0]);

        this.setState({
            suggestion : [],
            chat: this.selected
        });
    }

    render() {
        return (
            <div>
                <div className="help-area">
                    <div className="chat-box">
                        {this.chat()}
                        <div className="user-area">
                            <input type="text" id="question" className="question" placeholder="Enter your question"
                                   onChange={this.fillSuggestion}/>
                            {this.questionList()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Help;
