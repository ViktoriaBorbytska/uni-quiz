import React from 'react';
import PropTypes from "prop-types";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";

const Quiz = (props) => {
    const renderAnswerOptions = (key) => {
        return (
            <AnswerOption key={key.value}
                          answerValue={key.value}
                          answerContent={key.content}
                          answer={props.answer}
                          questionId={props.questionId}
                          onAnswerSelected={props.onAnswerSelected}/>
        );
    };
    return (
        <div className="quiz">
            <QuestionCount counter={props.questionId} total={props.questionTotal}/>
            <Question content={props.question}/>
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
            <button className="answerButton" onClick={props.onButtonClick} disabled={props.answer === ""}>Confirm Answer</button>
        </div>
    );
};

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;