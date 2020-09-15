import React, {Component} from 'react';
import './App.css';
import quizQuestions from "./quizQuestions";
import Quiz from "./Quiz";
import Result from "./Result";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            question: "",
            answerOptions: [],
            answer: "",
            answersCount: 0,
            result: 0
        };
        this.answerHistoryList = [];
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount() {
        this.shuffleArray(quizQuestions);
        const shuffledAnswerOptions = quizQuestions.map(question => this.shuffleArray(question.answers));
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }

    shuffleArray(array) {
        let currentIndex = array.length, tempValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tempValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempValue;
        }
        return array;
    };

    handleButtonClick() {
        this.computeUserAnswer(this.state.answer);
        if (this.state.counter + 1 < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        }
    }

    handleAnswerSelected(event) {
        this.setState({
            answer: event.currentTarget.value
        });
    }

    computeUserAnswer(answer) {
        const correctAnswer = quizQuestions[this.state.counter].correctAnswer;
        if (answer === correctAnswer) {
            this.setState({
                result: this.state.result + 1
            });
        } else {
            const wrongAnswerData = {
                answerId: this.state.counter,
                question: this.state.question,
                answer: answer,
                correctAnswer: correctAnswer
            };
            this.answerHistoryList.push(wrongAnswerData);
        }
        this.setState({
            answersCount: this.state.answersCount + 1
        });
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;

        this.setState({
            counter: counter,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
    }

    renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.counter + 1}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
                onButtonClick={this.handleButtonClick}
            />
        );
    }

    renderResult() {
        return <Result quizResult={this.state.result} historyList={this.answerHistoryList} onClick={this.props.startNewGame}/>;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Exam questions quiz</h1>
                </header>
                <div className="container">
                    {this.state.answersCount === quizQuestions.length ? this.renderResult() : this.renderQuiz()}
                </div>

            </div>
        );
    }
}

export default App;